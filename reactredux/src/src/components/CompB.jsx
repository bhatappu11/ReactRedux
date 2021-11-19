import React, {useContext} from 'react'
import { UserContext } from '../App'

export default function CompB() {
    const user = useContext(UserContext)
    return (
        <div>
            {user}
        </div>
    )
}
