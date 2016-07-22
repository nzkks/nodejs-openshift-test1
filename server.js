var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer());

var techskills = [
      { catName: "Primary Web Languages", skills: ["HTML5",  "CSS3",  "SASS/SCSS",  "JavaScript",  "Jade"]},
      { catName: "Frontend Frameworks", skills: ["Bootstrap",  "Zurb Foundation",  "Bourbon/Neat/Refills",  "Jekyll"]},
      { catName: "JavaScript Libraries & Templates", skills: ["Angular.js",  "jQuery",  "Webpack.js",  "Grunt.js",  "Bower.js",  "GSAP"]},
      { catName: "Databases & Data Languages", skills: ["SQL",  "XML",  "JSON",  "MS SQL Server",  "MySql (WordPress)"]},
      { catName: "Web Testing Tools", skills: ["Chrome Developer Tools",  "Firebug",  "jshint",  "W3C",  "Webaim Wave",  "UITest.com",  "GTMetrix",  "Pingdom"]},
      { catName: "Web Analysis Tools", skills: ["Google Analytics",  "AdWords",  "Webmaster Tools",  "MOZ"]},
      { catName: "Content Management Systems", skills: ["WordPress",  "Umbraco CMS",  "Joomla"]},
      { catName: "Design Tools", skills: ["Adobe CC (Photoshop, Illustrator, InDesign, Premiere)"]},
      { catName: "Platforms & Version Control", skills: ["Windows",  "Mac",  "Ubuntu",  "Git"]}
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