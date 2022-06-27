import student from './Student.css';
const Student = (props) => {

    return (
        <>

            <div className="stu">
                <h1>{props.roll}</h1>
                <p>{props.name}</p>

                <p><input type="button" value="x" onClick={props.del} /></p>
            </div>

        </>
    )
}

export default Student;