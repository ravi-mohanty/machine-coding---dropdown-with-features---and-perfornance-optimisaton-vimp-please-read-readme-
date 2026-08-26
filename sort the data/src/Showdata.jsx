import { useState } from "react"
const data = [
    { id: 1, name: "Navya Chauhan", age: 37, gender: "Male", dob: "1989-05-12" },
    { id: 2, name: "Riley Mehta", age: 35, gender: "Male", dob: "1991-04-03" },
    { id: 3, name: "Sanjay Desai", age: 41, gender: "Male", dob: "1985-02-17" },
    { id: 4, name: "Ishaan Joshi", age: 24, gender: "Non-binary", dob: "2002-11-15" },
    { id: 5, name: "Aarav Malhotra", age: 43, gender: "Female", dob: "1983-05-10" },
    { id: 6, name: "Navya Kumar", age: 33, gender: "Non-binary", dob: "1993-11-16" },
    { id: 7, name: "Pooja Malhotra", age: 48, gender: "Male", dob: "1978-04-13" },
    { id: 8, name: "Jordan Nair", age: 41, gender: "Male", dob: "1985-03-09" },
    { id: 9, name: "Shreya Patel", age: 22, gender: "Non-binary", dob: "2004-12-14" },
    { id: 10, name: "Vikram Joshi", age: 49, gender: "Male", dob: "1977-05-13" },
    { id: 11, name: "Kiara Pillai", age: 43, gender: "Non-binary", dob: "1983-10-12" },
    { id: 12, name: "Siya Desai", age: 40, gender: "Female", dob: "1986-01-14" },
    { id: 13, name: "Rahul Malhotra", age: 25, gender: "Female", dob: "2001-04-07" },
    { id: 14, name: "Saanvi Nair", age: 51, gender: "Female", dob: "1975-09-26" },
    { id: 15, name: "Aditya Menon", age: 43, gender: "Non-binary", dob: "1983-08-13" },
    { id: 16, name: "Sai Rao", age: 48, gender: "Female", dob: "1978-11-18" },
    { id: 17, name: "Casey Desai", age: 50, gender: "Male", dob: "1976-03-09" },
    { id: 18, name: "Riley Nair", age: 44, gender: "Non-binary", dob: "1982-06-20" },
    { id: 19, name: "Emerson Chauhan", age: 50, gender: "Female", dob: "1976-08-05" },
    { id: 20, name: "Amit Mehta", age: 49, gender: "Non-binary", dob: "1977-07-10" },
    { id: 21, name: "Ramesh Nair", age: 24, gender: "Female", dob: "2002-12-03" },
    { id: 22, name: "Anika Gupta", age: 21, gender: "Male", dob: "2005-10-21" },
    { id: 23, name: "Ananya Joshi", age: 37, gender: "Female", dob: "1989-05-02" },
    { id: 24, name: "Vikram Rao", age: 33, gender: "Female", dob: "1993-09-24" },
    { id: 25, name: "Krishna Chopra", age: 40, gender: "Female", dob: "1986-06-08" },
    { id: 26, name: "Sai Mehta", age: 30, gender: "Male", dob: "1996-07-08" },
    { id: 27, name: "Reyansh Chauhan", age: 30, gender: "Female", dob: "1996-09-24" },
    { id: 28, name: "Riya Iyer", age: 29, gender: "Non-binary", dob: "1997-03-12" },
    { id: 29, name: "Shreya Pillai", age: 43, gender: "Non-binary", dob: "1983-05-03" },
    { id: 30, name: "Ayaan Bhat", age: 48, gender: "Male", dob: "1978-10-11" },
    { id: 31, name: "Priya Chopra", age: 23, gender: "Male", dob: "2003-12-11" },
    { id: 32, name: "Navya Joshi", age: 46, gender: "Male", dob: "1980-05-25" },
    { id: 33, name: "Kiara Joshi", age: 36, gender: "Non-binary", dob: "1990-05-13" },
    { id: 34, name: "Sanjay Joshi", age: 41, gender: "Non-binary", dob: "1985-02-18" },
    { id: 35, name: "Navya Reddy", age: 29, gender: "Non-binary", dob: "1997-04-04" },
    { id: 36, name: "Shreya Verma", age: 30, gender: "Female", dob: "1996-02-12" },
    { id: 37, name: "Aditya Mehta", age: 43, gender: "Non-binary", dob: "1983-05-28" },
    { id: 38, name: "Manoj Pillai", age: 32, gender: "Male", dob: "1994-07-12" },
    { id: 39, name: "Anjali Iyer", age: 50, gender: "Female", dob: "1976-03-26" },
    { id: 40, name: "Charlie Verma", age: 46, gender: "Female", dob: "1980-07-21" },
    { id: 41, name: "Shreya Malhotra", age: 46, gender: "Male", dob: "1980-02-26" },
    { id: 42, name: "Divya Bhat", age: 39, gender: "Female", dob: "1987-11-21" },
    { id: 43, name: "Aarav Desai", age: 44, gender: "Female", dob: "1982-08-16" },
    { id: 44, name: "Vikram Singh", age: 37, gender: "Non-binary", dob: "1989-10-15" },
    { id: 45, name: "Diya Pillai", age: 49, gender: "Male", dob: "1977-05-13" },
    { id: 46, name: "Riya Singh", age: 41, gender: "Female", dob: "1985-10-20" },
    { id: 47, name: "Charlie Kumar", age: 42, gender: "Female", dob: "1984-02-12" },
    { id: 48, name: "Morgan Mehta", age: 33, gender: "Male", dob: "1993-11-15" },
    { id: 49, name: "Emerson Iyer", age: 24, gender: "Male", dob: "2002-03-11" },
    { id: 50, name: "Aarav Menon", age: 31, gender: "Male", dob: "1995-02-23" },
];

const feilds = Object.keys(data[0]);
console.log(feilds, "feilds");

function Showdata() {
    const [sortkey, setsortkey] = useState(null);
    const [direction, setdirection] = useState("asc");
    function handleSort(index) {
        if (index === sortkey) setsortkey(index);
        else setsortkey(index);

        console.log(index, "this is that");

    }

    const sortedRecords = sortkey ? [...data].sort((a, b) => {
        if (a[sortkey] < b[sortkey]) return direction === 'asc' ? -1 : 1;
        if (a[sortkey] > b[sortkey]) return direction === 'asc' ? -1 : 1;
        return 0;
    }) : data;

    console.log(sortedRecords, "sortedRecords");


    return (
    <table>
      <thead>
        <tr>
          {feilds.map((col) => (
            <th key={col} onClick={() => handleSort(col)} style={{ cursor: "pointer" }}>
              {col} {sortkey === col ? (direction === "asc" ? "▲" : "▼") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedRecords.map((row) => (
          <tr key={row.id}>
            {feilds.map((col) => (
              <td key={col}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Showdata 