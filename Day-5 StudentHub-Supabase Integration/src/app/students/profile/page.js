import React from 'react'
import useStore from '@/app/stores/studentStore'
export default function page() {
    const {activeStudent}=useStore();
  return (
    <div>
        <p>{activeStudent.name}</p>
        <p>{activeStudent.email}</p>
    </div>
  )
}
