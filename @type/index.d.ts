import { FieldPath, WhereFilterOp } from 'firebase/firestore'

export type Timestamp = {
  nanoseconds: number
  seconds: number
}

export type User = {
  address?: string
  avatar?: string
  birthday?: Timestamp
  description?: string
  email?: string
  firstname?: string
  id?: number | string
  lastname?: string
  phone?: string
  age?: number
  dob?: string
}

export type Skill = {
  skillname?: string
  progress?: number
  category_id?: string
  id?: string
}

export type Condition = {
  field: string | FieldPath
  symbol: WhereFilterOp
  value: any
}
