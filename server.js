var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer());

var techskills = [
      { catName: "Primary Web Languages", skills: [{ skillName: "HTML5"}, {skillName: "CSS3"}, {skillName: "SASS/SCSS"}, {skillName: "JavaScript"}, {skillName: "Jade"}]},
      { catName: "Frontend Frameworks", skills: [{ skillName: "Bootstrap"}, {skillName: "Zurb Foundation"}, {skillName: "Bourbon/Neat/Refills"}, {skillName: "Jekyll"}]},
      { catName: "JavaScript Libraries & Templates", skills: [{ skillName: "Angular.js"}, {skillName: "jQuery"}, {skillName: "Webpack.js"}, {skillName: "Grunt.js"}, {skillName: "Bower.js"}, {skillName: "GSAP"}]},
      { catName: "Databases & Data Languages", skills: [{ skillName: "SQL"}, {skillName: "XML"}, {skillName: "JSON"}, {skillName: "MS SQL Server"}, {skillName: "MySql (WordPress)"}]},
      { catName: "Web Testing Tools", skills: [{ skillName: "Chrome Developer Tools"}, {skillName: "Firebug"}, {skillName: "jshint"}, {skillName: "W3C"}, {skillName: "Webaim Wave"}, {skillName: "UITest.com"}, {skillName: "GTMetrix"}, {skillName: "Pingdom"}]},
      { catName: "Web Analysis Tools", skills: [{ skillName: "Google Analytics"}, {skillName: "AdWords"}, {skillName: "Webmaster Tools"}, {skillName: "MOZ"}]},
      { catName: "Content Management Systems", skills: [{ skillName: "WordPress"}, {skillName: "Umbraco CMS"}, {skillName: "Joomla"}]},
      { catName: "Design Tools", skills: [{ skillName: "Adobe CC (Photoshop, Illustrator, InDesign, Premiere)"}]},
      { catName: "Platforms & Version Control", skills: [{ skillName: "Windows"}, {skillName: "Mac"}, {skillName: "Ubuntu"}, {skillName: "Git"}]}
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