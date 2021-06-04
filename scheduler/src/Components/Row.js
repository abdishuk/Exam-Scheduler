/* eslint-disable array-callback-return */
import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { compose } from "redux";
import { EXAMList, examSchedule } from "../actions/ExamListAction";
import Message from "./AlertComponent";
import "./Row.css";
function Row({ id }) {
  const [ValueNotentered, setValueNotentered] = useState(false);
  const [inputList, setInputList] = useState([
    {
      coursecode: "",
    },
    {
      coursecode: "",
    },
    {
      coursecode: "",
    },
    {
      coursecode: "",
    },
    {
      coursecode: "",
    },
  ]);
  const dispatch = useDispatch();
  const exams = useSelector((state) => state.exams);
  let RegisteredCourses = [{}];
  const { ExamList, error, loading } = exams;
  useEffect(() => {
    dispatch(EXAMList());
  }, [dispatch]);
  const { result } = ExamList;

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const handleRemove = (e, index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  const hanldleInput = () => {
    setInputList([
      ...inputList,
      {
        coursecode: "",
      },
    ]);
  };
  console.log(inputList[0]?.coursecode);
  const HandleEnter = (e) => {
    RegisteredCourses = [];
    e.preventDefault();
    if (inputList.length === 0 || inputList === undefined) {
      setValueNotentered(true);
    }
    result.Arr830 &&
      result.Arr830.map((item) => {
        if (item.June142021) {
          let Coursecode = item.June142021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode.toUpperCase()) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 14 2021",
                time: "8:30",
              });
            }
          });
        }
        if (item.June152021) {
          let Coursecode = item.June152021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 15 2021",
                time: "8:30",
              });
            }
          });
        }
        if (item.June162021) {
          let Coursecode = item.June162021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 16 2021",
                time: "8:30",
              });
            }
          });
        }
        if (item.June172021) {
          let Coursecode = item.June172021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 17 2021",
                time: "8:30",
              });
            }
          });
        }
        if (item.June182021) {
          let Coursecode = item.June182021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 18 2021",
                time: "8:30",
              });
            }
          });
        }
        if (item.June192021) {
          let Coursecode = item.June192021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 19 2021",
                time: "8:30",
              });
            }
          });
        }
        if (item.June212021) {
          let Coursecode = item.June212021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 21 2021",
                time: "8:30",
              });
            }
          });
        }
        if (item.June222021) {
          let Coursecode = item.June222021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 22 2021",
                time: "8:30",
              });
            }
          });
        }
        if (item.June232021) {
          let Coursecode = item.June232021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 23 2021",
                time: "8:30",
              });
            }
          });
        }
        if (item.June242021) {
          let Coursecode = item.June242021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 24 2021",
                time: "8:30",
              });
            }
          });
        }
        if (item.June252021) {
          let Coursecode = item.June252021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 25 2021",
                time: "8:30",
              });
            }
          });
        }
        if (item.June262021) {
          let Coursecode = item.June262021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 26 2021",
                time: "8:30",
              });
            }
          });
        }
      });

    // 1145 Array
    result.Arr1145 &&
      result.Arr1145.map((item) => {
        if (item.June142021) {
          let Coursecode = item.June142021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 14 2021",
                time: "11:45",
              });
            }
          });
        }
        if (item.June152021) {
          let Coursecode = item.June152021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 15 2021",
                time: "11:45",
              });
            }
          });
        }
        if (item.June162021) {
          let Coursecode = item.June162021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 16 2021",
                time: "11:45",
              });
            }
          });
        }
        if (item.June172021) {
          let Coursecode = item.June172021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 17 2021",
                time: "11:45",
              });
            }
          });
        }
        if (item.June182021) {
          let Coursecode = item.June182021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 18 2021",
                time: "11:45",
              });
            }
          });
        }
        if (item.June192021) {
          let Coursecode = item.June192021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 19 2021",
                time: "11:45",
              });
            }
          });
        }
        if (item.June212021) {
          let Coursecode = item.June212021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 21 2021",
                time: "11:45",
              });
            }
          });
        }
        if (item.June222021) {
          let Coursecode = item.June222021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 22 2021",
                time: "11:45",
              });
            }
          });
        }
        if (item.June232021) {
          let Coursecode = item.June232021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 23 2021",
                time: "11:45",
              });
            }
          });
        }
        if (item.June242021) {
          let Coursecode = item.June242021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 24 2021",
                time: "11:45",
              });
            }
          });
        }
        if (item.June252021) {
          let Coursecode = item.June252021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 25 2021",
                time: "11:45",
              });
            }
          });
        }
        if (item.June262021) {
          let Coursecode = item.June262021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 26 2021",
                time: "11:45",
              });
            }
          });
        }
      });

    // A15:00 Array

    result.Arr1500 &&
      result.Arr1500.map((item) => {
        if (item.June142021) {
          let Coursecode = item.June142021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 14 2021",
                time: "15:00",
              });
            }
          });
        }
        if (item.June152021) {
          let Coursecode = item.June152021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 15 2021",
                time: "15:00",
              });
            }
          });
        }
        if (item.June162021) {
          let Coursecode = item.June162021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 16 2021",
                time: "15:00",
              });
            }
          });
        }
        if (item.June172021) {
          let Coursecode = item.June172021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 17 2021",
                time: "15:00",
              });
            }
          });
        }
        if (item.June182021) {
          let Coursecode = item.June182021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 18 2021",
                time: "15:00",
              });
            }
          });
        }
        if (item.June192021) {
          let Coursecode = item.June192021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 19 2021",
                time: "15:00",
              });
            }
          });
        }
        if (item.June212021) {
          let Coursecode = item.June212021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 21 2021",
                time: "15:00",
              });
            }
          });
        }
        if (item.June222021) {
          let Coursecode = item.June222021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 22 2021",
                time: "15:00",
              });
            }
          });
        }
        if (item.June232021) {
          let Coursecode = item.June232021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 23 2021",
                time: "15:00",
              });
            }
          });
        }
        if (item.June242021) {
          let Coursecode = item.June242021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 24 2021",
                time: "15:00",
              });
            }
          });
        }
        if (item.June252021) {
          let Coursecode = item.June252021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 25 2021",
                time: "15:00",
              });
            }
          });
        }
        if (item.June262021) {
          let Coursecode = item.June262021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 26 2021",
                time: "15:00",
              });
            }
          });
        }
      });

    // Array 18:15

    result.Arr1815 &&
      result.Arr1815.map((item) => {
        if (item.June142021) {
          let Coursecode = item.June142021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode.toUpperCase()) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 14 2021",
                time: "18:15",
              });
            }
          });
        }
        if (item.June152021) {
          let Coursecode = item.June152021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 15 2021",
                time: "18:15",
              });
            }
          });
        }
        if (item.June162021) {
          let Coursecode = item.June162021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 16 2021",
                time: "18:15",
              });
            }
          });
        }
        if (item.June172021) {
          let Coursecode = item.June172021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 17 2021",
                time: "18:15",
              });
            }
          });
        }
        if (item.June182021) {
          let Coursecode = item.June182021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 18 2021",
                time: "18:15",
              });
            }
          });
        }
        if (item.June192021) {
          let Coursecode = item.June192021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 19 2021",
                time: "18:15",
              });
            }
          });
        }
        if (item.June212021) {
          let Coursecode = item.June212021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 21 2021",
                time: "18:15",
              });
            }
          });
        }
        if (item.June222021) {
          let Coursecode = item.June222021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 22 2021",
                time: "18:15",
              });
            }
          });
        }
        if (item.June232021) {
          let Coursecode = item.June232021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 23 2021",
                time: "18:15",
              });
            }
          });
        }
        if (item.June242021) {
          let Coursecode = item.June242021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 24 2021",
                time: "18:15",
              });
            }
          });
        }
        if (item.June252021) {
          let Coursecode = item.June252021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 25 2021",
                time: "18:15",
              });
            }
          });
        }
        if (item.June262021) {
          let Coursecode = item.June262021.toUpperCase();
          inputList.map((course) => {
            if (course.coursecode.toUpperCase() === Coursecode) {
              RegisteredCourses.push({
                coursecode: Coursecode,
                date: "June 26 2021",
                time: "18:15",
              });
            }
          });
        }
      });

    // setFetched(true);
    if (RegisteredCourses.length === 0) {
      setValueNotentered(true);
    }
    dispatch(examSchedule(RegisteredCourses));
  };

  return (
    <>
      {ValueNotentered && (
        <Message variant="danger">Please enter at least a Course Code</Message>
      )}

      {inputList.map((item, i) => {
        return (
          <tr key={i}>
            <td>
              {" "}
              <label id="courseLable">Course Code:</label>
            </td>
            <td>
              <input
                class="field"
                type="text"
                name="coursecode"
                value={item.coursecode}
                onChange={(e) => handleChange(e, i)}
                id={`select-type-${id}`}
                placeholder="EX:CMPE423"
              />
            </td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                onClick={(e) => handleRemove(e, i)}
              >
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        );
      })}
      <div class="buttons">
        <button
          type="button"
          onClick={hanldleInput}
          class="btn btn-info add  btn-sm"
        >
          Add A course
        </button>
      </div>
      <div class="enter">
        <button
          type="button"
          class="btn btn-success btn-sm enter"
          onClick={HandleEnter}
        >
          View Exam Schedule
        </button>
      </div>
    </>
  );
}

export default Row;
