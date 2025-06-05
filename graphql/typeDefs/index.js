const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int
    name: String
    email: String
    password: String
    is_deleted: Boolean
    role: String
  }

  type Exercise {
    id: Int
    name: String
    type: String
    muscle: String
    equipment: String
    difficulty: String
    instructions: String
  }

  type ExerciseLog {
    id: Int
    user_id: Int
    exercise_id: Int
    date: String
    sets: Int
    reps: Int
    weight: Float
  }

  type Routine {
    id: Int
    name: String
    user_id: Int
    created_at: String
  }

  type RoutineExercise {
    id: Int
    routine_id: Int
    exercise_id: Int
    sets: Int
    repetitions: Int
    day_of_week: String
  }

  type Auditoria {
    idAuditoria: Int
    orTable: String
    trgAction: String
    dataJson: String
    dtmAction: String
    trgUser: String
  }

  type RutinaConUsuario {
    rutina_id: Int
    nombre_rutina: String
    nombre_usuario: String
    email: String
  }

  type EjercicioEnRutina {
    rutina_ejercicio_id: Int
    rutina: String
    ejercicio: String
    sets: Int
    repetitions: Int
    day_of_week: String
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    users: [User]
    user(id: Int!): User
    userByEmail(email: String!): User
    countActiveUsers: Int
    exercises: [Exercise]
    exercise(id: Int!): Exercise
    exerciseLogs: [ExerciseLog]
    exerciseLog(id: Int!): ExerciseLog
    routines: [Routine]
    routine(id: Int!): Routine
    routineExercises: [RoutineExercise]
    routineExercise(id: Int!): RoutineExercise
    auditorias: [Auditoria]
    rutinaConUsuarios: [RutinaConUsuario]
    ejerciciosEnRutinas: [EjercicioEnRutina]
  }

  type Mutation {
    # User
    createUser(name: String!, email: String!, password: String!, role: String): User
    updateUser(id: Int!, name: String, email: String, password: String, is_deleted: Boolean, role: String): User
    deleteUser(id: Int!): Boolean

    # Exercise
    createExercise(name: String!, type: String, muscle: String, equipment: String, difficulty: String, instructions: String): Exercise
    updateExercise(id: Int!, name: String, type: String, muscle: String, equipment: String, difficulty: String, instructions: String): Exercise
    deleteExercise(id: Int!): Boolean

    # ExerciseLog
    createExerciseLog(user_id: Int!, exercise_id: Int!, date: String!, sets: Int, reps: Int, weight: Float): ExerciseLog
    updateExerciseLog(id: Int!, user_id: Int, exercise_id: Int, date: String, sets: Int, reps: Int, weight: Float): ExerciseLog
    deleteExerciseLog(id: Int!): Boolean

    # Routine
    createRoutine(name: String!, user_id: Int!): Routine
    updateRoutine(id: Int!, name: String, user_id: Int): Routine
    deleteRoutine(id: Int!): Boolean

    # RoutineExercise
    createRoutineExercise(routine_id: Int!, exercise_id: Int!, sets: Int, repetitions: Int, day_of_week: String): RoutineExercise
    updateRoutineExercise(id: Int!, routine_id: Int, exercise_id: Int, sets: Int, repetitions: Int, day_of_week: String): RoutineExercise
    deleteRoutineExercise(id: Int!): Boolean

    # Auth
    login(email: String!, password: String!): AuthPayload
  }
`;

module.exports = typeDefs;
