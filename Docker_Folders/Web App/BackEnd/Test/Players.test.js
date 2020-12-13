var mysql = require('mysql');
/*   test('Database form', () => {
    var dataLengh = 0  ;
    var connection = mysql.createConnection({
      host     : '172.16.238.3',
      port : 3306,
      user     : 'root',
      password : 'rootroot',
      database : 'PLAYERS'
    });
     connection.connect(function(err) {
      if (err) throw err
      connection.query("SELECT * FROM list", function (err, result, fields) {
        if (err) throw err;
        dataLengh = result.length;
        expect(dataLengh).toBe(5); 
      });
    })
    
  }); */
  test('Database first item', () => {
    var data = []  ;
    var connection = mysql.createConnection({
      host     : '172.16.238.3',
      port : 3306,
      user     : 'root',
      password : 'rootroot',
      database : 'PLAYERS'
    });
     connection.connect(function(err) {
      if (err) throw err
      connection.query("SELECT * FROM list", function (err, result, fields) {
        if (err) throw err;
        dataLengh = result;
        expect(dataLengh[1].name).toBe('CR7'); 
      });
    })
    connection.end();
    
  });