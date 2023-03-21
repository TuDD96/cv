/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import {
  collection,
  addDoc,
  getDoc,
  doc,
  getDocs,
  query,
  setDoc,
  deleteField,
  onSnapshot,
  updateDoc,
  deleteDoc,
  where,
} from 'firebase/firestore'
import db from '~/configs/firebase'
import { Condition } from '~/@type/index'

class FirestoreService {
  // miss case where
  async getAll(collectionParam: string) {
    const cl = collection(db, collectionParam)
    const q = query(cl)
    const querySnap = await getDocs(q)

    return querySnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  }

  async get(collectionParam: string, documentId: string) {
    const docSnap = await getDoc(doc(db, collectionParam, documentId))

    let response = {}

    if (docSnap.exists()) {
      response = { id: docSnap.id, ...docSnap.data() }
    }

    return response
  }

  async getWhere(collectionParam: string, conditions: Condition[]) {
    const condition = conditions.map((con) => {
      return where(con.field, con.symbol, con.value)
    })
    const q = query(collection(db, collectionParam), ...condition)

    const querySnap = await getDocs(q)

    return querySnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  }

  async create(collectionParam: string, data: any) {
    const colRef = collection(db, collectionParam)

    const docRef = await addDoc(colRef, data)

    return docRef.id
  }

  async set(collectionParam: string, documentId: string, data: any) {
    return await setDoc(doc(db, collectionParam, documentId), data)
  }

  async setMerge(collectionParam: string, documentId: string, data: any) {
    const d = doc(db, collectionParam, documentId)

    return await setDoc(d, data, { merge: true })
  }

  async update(collectionParam: string, documentId: string, data: any) {
    return await updateDoc(doc(db, collectionParam, documentId), data)
  }

  async delete(collectionParam: string, documentId: string) {
    await deleteDoc(doc(db, collectionParam, documentId))
  }

  async deleteField(
    collectionParam: string,
    documentId: string,
    fields: string[]
  ) {
    const fieldDelete: any = {}
    fields.forEach((field) => {
      fieldDelete[field] = deleteField()
    })

    return await updateDoc(doc(db, collectionParam, documentId), fieldDelete)
  }

  snapshotDocument(
    collectionParam: string,
    documentId: string,
    callback: (response: any) => void
  ) {
    return onSnapshot(doc(db, collectionParam, documentId), (snap) => {
      const response: any = {
        id: snap.id,
        ...snap.data(),
      }
      callback(response)
    })
  }

  snapshotList(collectionParam: string, callback: (response: any) => void) {
    return onSnapshot(collection(db, collectionParam), (snap) => {
      const response = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

      callback(response)
    })
  }
}

export default new FirestoreService()
