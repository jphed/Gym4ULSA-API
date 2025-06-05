const db = require('../../database/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET = 'tu_clave_secreta'; // Usa una variable de entorno en producción

const resolvers = {
  Query: {
    users: async () => db('User').select('*'),
    user: async (_, { id }) => db('User').where({ id }).first(),
    userByEmail: async (_, { email }) => {
      const [user] = await db.raw('CALL ObtenerUsuarioPorCorreo(?)', [email]);
      return user[0] || null;
    },
    countActiveUsers: async () => {
      const [[{ 'fn_ContarUsuariosActivos()': count }]] = await db.raw('SELECT fn_ContarUsuariosActivos()');
      return count;
    },
    exercises: async () => db('Exercise').select('*'),
    exercise: async (_, { id }) => db('Exercise').where({ id }).first(),
    exerciseLogs: async () => db('ExerciseLog').select('*'),
    exerciseLog: async (_, { id }) => db('ExerciseLog').where({ id }).first(),
    routines: async () => db('Routine').select('*'),
    routine: async (_, { id }) => db('Routine').where({ id }).first(),
    routineExercises: async () => db('Routine_Exercise').select('*'),
    routineExercise: async (_, { id }) => db('Routine_Exercise').where({ id }).first(),
    auditorias: async () => db('auditoria').select('*'),
    rutinaConUsuarios: async () => db.select('*').from('vista_rutinas_con_usuario'),
    ejerciciosEnRutinas: async () => db.select('*').from('vista_ejercicios_en_rutinas'),
  },

  Mutation: {
    // User
    createUser: async (_, args) => {
      const [id] = await db('User').insert(args);
      return { ...args, id };
    },
    updateUser: async (_, { id, ...data }) => {
      await db('User').where({ id }).update(data);
      return { id, ...data };
    },
    deleteUser: async (_, { id }) => {
      await db.raw('CALL BajaUsuarioLogico(?)', [id]);
      return true;
    },

    // Exercise
    createExercise: async (_, args) => {
      const [id] = await db('Exercise').insert(args);
      return { ...args, id };
    },
    updateExercise: async (_, { id, ...data }) => {
      await db('Exercise').where({ id }).update(data);
      return { id, ...data };
    },
    deleteExercise: async (_, { id }) => {
      const deleted = await db('Exercise').where({ id }).del();
      return deleted > 0;
    },

    // ExerciseLog
    createExerciseLog: async (_, args) => {
      const [id] = await db('ExerciseLog').insert(args);
      return { ...args, id };
    },
    updateExerciseLog: async (_, { id, ...data }) => {
      await db('ExerciseLog').where({ id }).update(data);
      return { id, ...data };
    },
    deleteExerciseLog: async (_, { id }) => {
      const deleted = await db('ExerciseLog').where({ id }).del();
      return deleted > 0;
    },

    // Routine
    createRoutine: async (_, args) => {
      const [id] = await db('Routine').insert(args);
      return { ...args, id };
    },
    updateRoutine: async (_, { id, ...data }) => {
      await db('Routine').where({ id }).update(data);
      return { id, ...data };
    },
    deleteRoutine: async (_, { id }) => {
      const deleted = await db('Routine').where({ id }).del();
      return deleted > 0;
    },

    // RoutineExercise
    createRoutineExercise: async (_, args) => {
      const [id] = await db('Routine_Exercise').insert(args);
      return { ...args, id };
    },
    updateRoutineExercise: async (_, { id, ...data }) => {
      await db('Routine_Exercise').where({ id }).update(data);
      return { id, ...data };
    },
    deleteRoutineExercise: async (_, { id }) => {
      const deleted = await db('Routine_Exercise').where({ id }).del();
      return deleted > 0;
    },

    // Login
    login: async (_, { email, password }) => {
      const user = await db('User').where({ email }).first();
      if (!user || user.is_deleted) throw new Error('Usuario no encontrado');
      if (user.password !== password) throw new Error('Contraseña incorrecta');
      const token = jwt.sign({ userId: user.id, email: user.email }, SECRET, { expiresIn: '1d' });
      return { token, user };
    },
  }
};

module.exports = resolvers;
