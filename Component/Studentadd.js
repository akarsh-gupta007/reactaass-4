import React from "react";
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { StudContext } from "./Data";

const Studentadd = () => {
    let navigate = useNavigate();
    const [rows, setRows] = useContext(StudContext);
    let { id } = useParams();
    let [details, setDetails] = useState({
        id: "",
        name: "",
        age: "",
        course: "",
        batch: "",
    })

    useEffect(() => {
        rows.forEach((details) => {
            if (details.id === id) {
                setDetails({
                    name: details.name,
                    age: details.age,
                    course: details.course,
                    batch: details.batch,
                });
            }
        });
    }, [id, rows]);

    const handleChange = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (details.name === '') {
            alert("Name is Required");
        }
        else {
            if (id === undefined) {
                let newDetails = { ...details, id: new Date().getTime().toString() };
                setRows([...rows, newDetails]);
            } else {
                setRows((prevState) =>
                    prevState.map((student) =>
                        student.id === id
                            ? {
                                id: id,
                                name: details.name,
                                age: details.age,
                                course: details.course,
                                batch: details.batch,
                            }
                            : student
                    )
                );
            }
        }
        navigate("/student");
    };

    return (
        <div className="details">
            <form action="" onSubmit={handleSubmit} className="k">
                <div className="field1">
                    <label>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={details.name}
                        onChange={handleChange}
                    />
                    </div>
                    <br />
                    <div className="field2">
                    <label>Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={details.age}
                        onChange={handleChange}
                    />
                    </div>
                    <br />
                    <div className="field3">
                    <label>Course:</label>
                    <input
                        type="text"
                        id="course"
                        name="course"
                        value={details.course}
                        onChange={handleChange}
                    />
                    </div>
                    <br />
                    <div className="field4">
                    <label>Department:</label>
                    <input
                        type="text"
                        id="batch"
                        name="batch"
                        value={details.batch}
                        onChange={handleChange}
                    />
                    </div>
                    <br />
                <Link to="/student">
                    <button className="back-btn">Go Back</button>
                </Link>
                <button type="submit" className="update-btn">Update</button>
            </form>
        </div>
    );
};

export default Studentadd;


// Arjun;
// Aniket;
// karishma;
