import express from "express";
import axios from "axios";
import cheerio from "cheerio";

async function getTimeTableData() {
  try {
    const siteUrl = "https://stdportal.emu.edu.tr/ExamList.asp";
    const keys = [
      "June142021",
      "June152021",
      "June162021",
      "June172021",
      "June182021",
      "June192021",
      "June212021",
      "June222021",
      "June232021",
      "June242021",
      "June252021",
      "June262021",
    ];
    const table830 = "body > table:nth-child(6) > tbody > tr";
    const table1145 = "body > table:nth-child(10) > tbody > tr";
    const table1500 = "body > table:nth-child(14) > tbody > tr ";
    const table1815 = "body > table:nth-child(18) > tbody > tr";
    const { data } = await axios({
      method: "GET",
      url: siteUrl,
    });
    const $ = cheerio.load(data);
    let Arr830 = [];
    let Arr1145 = [];
    let Arr1500 = [];
    let Arr1815 = [];
    // table 8:30
    $(table830).each((ParentIndex, ParentElem) => {
      let keyIndex = 0;
      let Obj830 = {};

      $(ParentElem)
        .children()
        .each((childIndex, childElem) => {
          const tdval = $(childElem).text().trim();

          if (tdval) {
            Obj830[keys[childIndex]] = tdval;
            keyIndex++;
          }
        });
      Arr830.push(Obj830);
      // console.log(Arr830);
    });

    // table 11:45

    $(table1145).each((ParentIndex, ParentElem) => {
      let keyIndex = 0;
      let Obj1145 = {};

      $(ParentElem)
        .children()
        .each((childIndex, childElem) => {
          const tdval = $(childElem).text().trim();

          if (tdval) {
            Obj1145[keys[childIndex]] = tdval;
            keyIndex++;
          }
        });
      Arr1145.push(Obj1145);
      //  console.log(Arr1145);
    });

    // table 15:00
    $(table1500).each((ParentIndex, ParentElem) => {
      let keyIndex = 0;
      let Obj1500 = {};

      $(ParentElem)
        .children()
        .each((childIndex, childElem) => {
          const tdval = $(childElem).text().trim();

          if (tdval) {
            Obj1500[keys[childIndex]] = tdval;
            keyIndex++;
          }
        });
      Arr1500.push(Obj1500);
      // console.log(Arr1500);
    });
    $(table1815).each((ParentIndex, ParentElem) => {
      let keyIndex = 0;
      let obj1815 = {};

      $(ParentElem)
        .children()
        .each((childIndex, childElem) => {
          const tdval = $(childElem).text().trim();

          if (tdval) {
            obj1815[keys[childIndex]] = tdval;
            keyIndex++;
          }
        });
      Arr1815.push(obj1815);
      //  console.log(Arr1815);
    });
    return {
      Arr830,
      Arr1145,
      Arr1500,
      Arr1815,
    };
  } catch (error) {
    console.log(error);
  }
}

export default getTimeTableData;
