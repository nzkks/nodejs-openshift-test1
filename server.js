var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer());

var techskills = [
      { name: "Primary Web Languages", skills: [{ name: "HTML5"}, {name: "CSS3"}, {name: "SASS/SCSS"}, {name: "JavaScript"}, {name: "Jade"}]},
      { name: "Frontend Frameworks", skills: [{ name: "Bootstrap"}, {name: "Zurb Foundation"}, {name: "Bourbon/Neat/Refills"}, {name: "Jekyll"}]},
      { name: "JavaScript Libraries & Templates", skills: [{ name: "Angular.js"}, {name: "jQuery"}, {name: "Webpack.js"}, {name: "Grunt.js"}, {name: "Bower.js"}, {name: "GSAP"}]},
      { name: "Databases & Data Languages", skills: [{ name: "SQL"}, {name: "XML"}, {name: "JSON"}, {name: "MS SQL Server"}, {name: "MySql (WordPress)"}]},
      { name: "Web Testing Tools", skills: [{ name: "Chrome Developer Tools"}, {name: "Firebug"}, {name: "jshint"}, {name: "W3C"}, {name: "Webaim Wave"}, {name: "UITest.com"}, {name: "GTMetrix"}, {name: "Pingdom"}]},
      { name: "Web Analysis Tools", skills: [{ name: "Google Analytics"}, {name: "AdWords"}, {name: "Webmaster Tools"}, {name: "MOZ"}]},
      { name: "Content Management Systems", skills: [{ name: "WordPress"}, {name: "Umbraco CMS"}, {name: "Joomla"}]},
      { name: "Design Tools", skills: [{ name: "Adobe CC (Photoshop, Illustrator, InDesign, Premiere)"}]},
      { name: "Platforms & Version Control", skills: [{ name: "Windows"}, {name: "Mac"}, {name: "Ubuntu"}, {name: "Git"}]}
    ];

    app.get('/api/techskills', function(req, res){
      res.json(techskills);
    });

    app.get('/api/techskills/:index', function(req, res){
      res.json(techskills[req.params.index]);
    });

    app.delete('/api/techskills/:index', function(req, res){
      techskills.splice(req.params.index, 1);
      res.json(techskills);
    });

    app.post('/api/techskills', function(req, res){
      var newTechSkill = req.body;
      techskills.push(newTechSkill);
      res.json(techskills);
    });


app.use(express.static(__dirname + '/public'));

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ip);
console.log('Server running at ' + ip + ':' + port);