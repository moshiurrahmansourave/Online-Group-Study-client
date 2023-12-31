import { useLoaderData } from "react-router-dom";
import AssignmentsCard from "./AssignmentsCard";
import { useState } from "react";


const Assignments = () => {

    const loadAssignments = useLoaderData();
    const [assignments, setAssignments] = useState(loadAssignments)

    const [fullData, setFullData] = useState(assignments);
    const [searchData, setSearchData] = useState(assignments);

    const handleSearch = () => {
        const searchFild = document.getElementById('Search-fild')
        const searchText = searchFild.value;
        console.log(searchText)
        if (searchText.length > 3) {
            const newData = fullData.filter(item => item.quality == searchText)


            if (newData) {
                setSearchData(newData)
            }
        }
        else {
            setSearchData(fullData)
        }

    }

    return (
        <div>

            <h1 className="text-4xl font-bold text-center  underline mb-3">All The Submited Assignments</h1>

            <div>
                <h2 className="font-bold text-orange-500">Assignment Quality</h2>
                <div className="my-5  flex  ">
                    <div>
                        <select id="Search-fild" name="quality" className="select rounded-none select-bordered  max-w-xs">
                            <option >All</option>
                            <option>Easy</option>
                            <option>Normal</option>
                            <option>Heard</option>
                        </select>
                    </div>
                    <button
                        onClick={handleSearch}
                        className="btn  rounded-none  ">Search</button>
                </div>


            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    searchData?.map(assignment => <AssignmentsCard
                        key={assignment._id}
                        assignment={assignment}
                        assignments={assignments}
                        setSearchData={setSearchData}
                        setAssignments={setAssignments}
                    ></AssignmentsCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;