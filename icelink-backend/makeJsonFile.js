const obj = {
    id : 123,
    product : {
      type : 'book',
      page : 200,
      title : 'Javascript',
      tags : ['JS', 'Beginner']
    }
};

const json = JSON.stringify(obj);

const fs = require("fs");
fs.writeFileSync('./test.json', json, 'utf-8');
