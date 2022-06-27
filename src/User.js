import { useState } from "react";
import Student from './Student';


const User = () => {
    const [data, setData] = useState({ roll: "", name: "" });
    const [records, setRecords] = useState([])

    const handleChange = (evt) => {
        setData({ ...data, [evt.target.name]: evt.target.value });
    }
    const handleAdd = () => {
        const rcds = [...records];
        rcds.push({ roll: data.roll, name: data.name });
        setRecords(rcds);
    }
    const handleDel = (n) => {
        const rcds = [...records];
        rcds.splice(n, 1);
        setRecords(rcds);
    }



    return (
        <>
            Roll: <input type="text" value={data.roll} name="roll" onChange={handleChange} /><br /><br />
            Name: <input type="text" value={data.name} name="name" onChange={handleChange} /> <input type="button" value="add" onClick={handleAdd} />
            <hr />
            {
                records.map((row, i) => {
                    return (
                        <Student
                            key={row.roll}
                            roll={row.roll}
                            name={row.name}
                            del={() => handleDel(i)} />
                    )

                })

            }


        </>
    )
}

export default User;