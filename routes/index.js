var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get("/test", function (req, res, next) {
    var child_process = require("child_process")
    child_process.execFile("test1.bat", null, {cwd: 'D:/web-starter-kit-0.6.5/app'}, function (error, stdout, stderr) {
        if (error !== null) {
            console.log("exec error" + error)
        }
        else console.log("成功")
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    })
})

module.exports = router;
