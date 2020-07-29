## EDIBO 

### mans pirmais ieraksts!

[GitHub pages](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)

## [terminal common commands](https://user-images.githubusercontent.com/67696837/86453406-6474bb00-bd26-11ea-918a-6f0c8a7e1434.png)

Day 1

Noderīgi paņēmieni:

echo $0 - ar kādu shella palīdzību komunicējam

command_name - key(s) argument(s)

command_name -key2 argument

man command_name (quit with q)

hexdump -C

adresses: absolute (/) <-- root directory, relative (., .., ~)
rwx - read, write, execute

$ for i in {0..100}; do echo "$i $((i*i)) $((i*i)) $((i*i))"; done

$ for i in {0..5}; do echo "$i $((i*i))"; done

dc /etc - nonāk citā root?

ls -l /usr/bin/vi  /// ls -l `whereis vim` (using backticks)

df - disk space usage

df -m -> 1mb blokos

df -h 

ls /dev/ -> visas ierīces

history >h.txt

du - disk usage

du -h -> cik aizņem vietas

df -h/dev/sda2 - apskata izmantošan


df -h | grep sda2 -> lai paskatītos izvēlēto rindu, vienu pašu

df | egrep sda2
(f.e) man grep - lasa dokumentāciju ->> shift + G - (pēdējais ieraksts), G+G (pirmais ieraksts)

1. df /home | awk '{ print $5 }' | sed 's/|//' - **dod precīzus procentus!!!!!!!!!!** ( df / --output=pcent | tail -n 1 ) ( echo `awk "BEGIN {printf\"%.2f\n\",66290508/103292152*100}"`"%" )

2. df -h |egrep sda2 | awk '{print ($3)/$2*100 "%"}' 

3. df -k /home | awk '{ print $5 }'|grep %|cut -d% -f 1
  

[Gnuplot](http://www.gnuplot.info/docs_4.6/gnuplot.pdf)
  
  tsugi.sakai.lv
  
  ifconfig
  
  python -m http.server
  
  curl
  
  6. diena
  
  wget
  
123 -> 123:2=61 -> 61:2 -> 30 -> 30:2=15 -> 15:2=7 -> 7:2=3 -> 3:2=1 -> 1:2=0 ***(Rīkojas ar veseliem skaitļiem, atmetot 1)*** -> 1111,011 **0** 123=01111011 in binary
  
 $ D2B=({0,1}{0,1}{0,1}{0,1}{0,1}{0,1}{0,1}{0,1})
$ echo ${D2B[7]}
00000111
$ echo ${D2B[123]}
01111011

#! /bin/bash
n=123
rezultats=0
pakape=1

while [ $ -ne 0 ]
do
        atlikums=$(( $n % 2 ))
        rezultats=$(( $atlikums * $pakape + $rezultats ))
        pakape=$(( $pakape * 10 ))
        n=$(( $n / 2 ))
done

echo "Binārais skaitlis, skaitlim 123= $rezultats"

[Understanding module in python](https://www.youtube.com/watch?v=b5cb_nfDyyM)

operating with github through terminal:

(ex...)

cd ~/Desktop

mkdir myproject

cd myproject/

git init

touch (ex...1234.txt)

ls

1234.txt

git status

git add 1234.txt

git commit -m "text"

git checkout -b <branch name>
  
git branch

tba...


[courses](https://www.udemy.com/courses/search/?price=price-free&q=BASH&sort=relevance)

[ASCII](http://www.ecowin.org/ascii.htm)

 ***Day 7***
 
 printf
 
 hexdump -c, -v, -C, -x, -o
 printf (tba.) | hexdump -c, -v, -C...
 
 printf ... | hd -c, -C...
 
 

$ mkdir 20200709
$ cd 20200709
$ pwd
/home/user/20200709
$ ls -la
total 8
drwxr-xr-x  2 user user 4096 Jul  9 14:56 .
drwxr-xr-x 27 user user 4096 Jul  9 14:56 ..
$ ls -a
.  ..
$ touch a.dat
$ ls -a
.  ..  a.dat
$ ls -l a.dat 
-rw-r--r-- 1 user user 0 Jul  9 15:00 a.dat
$ cat a.dat 
$ 




$ echo 1 > a.dat
$ ls -l
total 4
-rw-r--r-- 1 user user 2 Jul  9 15:01 a.dat
$ echo a  > a.dat
$ ls -l a.dat 
-rw-r--r-- 1 user user 2 Jul  9 15:02 a.dat
$ echo A  > a.dat
$ ls -l a.dat 
-rw-r--r-- 1 user user 2 Jul  9 15:03 a.dat
$ echo A
A
$ echo A  > a.dat
$ printf A  > b.dat
$ ls -l
total 8
-rw-r--r-- 1 user user 2 Jul  9 15:04 a.dat
-rw-r--r-- 1 user user 1 Jul  9 15:04 b.dat

python

**del z (izdzēš kādu ierakstu piem. a = 123)**

ipython:

type(s) str

type(2) - int

s2 = str(s2)

type(s2)

str

s+s2

a/2=61.5

a//2=61
a%2 = a modula = 1

8%2 = 3

pakāpe ** s ** 100..

| DEC  | Binary| Hex|
| ---- | ----- | ---|
|  0   | 0000  |  0 |
|  1   | 0010  |  2 | tba

c.reverse()

c.sort()

c.sort(reverse=true)

c.append - pievieno listes aizmugurē

c.pop()

d={} type=dict.

c=(11,22) -> type(c) = tuple

c.remove["piemērs"]

d={'abols':'apple'} in: d['abols'] output: 'apple'

git clone http://github.com/Kristaps1234/EDIBOd.update({"bumbieris":'birne'})

d - tiek apvienota vārdnīca

d.pop('abols')

d.update({"mylint": 1234})

d['mylist'][-1].lower()
'ŗtu'

+.capitalize() -> 'Rtu'

DAY 8 

b = b'123'

b'123'

In [105]: for i in range(5):
     ...:     for j in range(2):
     ...:         print(i, j)
     ...:         
     ...:     
0 0
0 1
1 0
1 1
2 0
2 1
3 0
3 1
4 0
4 1

[Paskāla trijstūris](https://code.sololearn.com/c429kyeqhpSL/#py)

In [256]: s = """
     ...: Godājamais x,
     ...: Jums ir pienācis naudas pārvedums
     ...: ar vertību y EUR
     ...: Lai saņemtu naudu, atsūtiet
     ...: īsziņu uz tel. numuru z 
     ...: 
     ...: Cieņā,
     ...:         atraitne
     ...: """
     ...: 
     ...: 

In [257]: s
Out[257]: '\nGodājamais x,\nJums ir pienācis naudas pārvedums\nar vertību y EUR\nLai saņemtu naudu, atsaūtiet\nīsziņu uz tel. numuru z \n\nCieņā,\n        atraitne\n'

In [258]: print(s)

Godājamais x,
Jums ir pienācis naudas pārvedums
ar vertību y EUR
Lai saņemtu naudu, atsūtiet
īsziņu uz tel. numuru z 

Cieņā,
        atraitne

t =  "summa = %s, valūta = %s"%(2,'EUR')


In [319]: x = "Jāni's,"
     ...: y = 100      
     ...: z = +34254673
     ...: 
     ...: 
     ...:        
     ...:              
     ...: s = """                          
     ...: Godājamais %s                    
     ...: Jums ir pienācis naudas pārvedums
     ...: ar vērtību %d EUR         
     ...: Lai saņemtu naudu atsūtiet
     ...: īsziņu uz telefona nr. %d
     ...:                   
     ...: Cieņā,            
     ...:          Atraitne.
     ...: """  %(x,y,z)
     ...:         
     ...: print(s)
     ...:              
     ...:              
     ...: # %s = string
     ...: # %d = int
     ...: 



In [8]: f = open("a.dat", "w")

In [9]: type(f)
Out[9]: _io.TextIOWrapper

In [10]: dir(f)
Out[10]: 
['_CHUNK_SIZE',
 '__class__',
 '__del__',
 '__delattr__',
 '__dict__',
 '__dir__',
 '__doc__',
 '__enter__',
 '__eq__',
 '__exit__',
 '__format__',
 '__ge__',
 '__getattribute__',
 '__getstate__',
 '__gt__',
 '__hash__',
 '__init__',
 '__init_subclass__',
 '__iter__',
 '__le__',
 '__lt__',
 '__ne__',
 '__new__',
 '__next__',
 '__reduce__',
 '__reduce_ex__',
 '__repr__',
 '__setattr__',
 '__sizeof__',
 '__str__',
 '__subclasshook__',
 '_checkClosed',
 '_checkReadable',
 '_checkSeekable',
 '_checkWritable',
 '_finalizing',
 'buffer',
 'close',
 'closed',
 'detach',
 'encoding',
 'errors',
 'fileno',
 'flush',
 'isatty',
 'line_buffering',
 'mode',
 'name',
 'newlines',
 'read',
 'readable',
 'readline',
 'readlines',
 'seek',
 'seekable',
 'tell',
 'truncate',
 'writable',
 'write',
 'writelines']

In [11]: f.closed
Out[11]: False

In [12]: 
    ...: f.
  File "<ipython-input-12-ded12ecb1fb1>", line 2
    f.
      ^
SyntaxError: invalid syntax


In [13]: f.tell()
Out[13]: 0

In [14]: f.write("Hello")
Out[14]: 5

In [15]: f.close()

In [16]: f.tell()
---------------------------------------------------------------------------
ValueError                                Traceback (most recent call last)
<ipython-input-16-3c1a8772273a> in <module>()
----> 1 f.tell()

ValueError: I/O operation on closed file.

In [17]: f = open("a.dat", "w")

In [18]: f.tell()
Out[18]: 0

In [19]: f.write("\n\tHelloz\n")
Out[19]: 9

In [20]: f.close()

In [21]: f = open("a.dat", "a")

In [22]: f.write("\n\tHelloz\n")
Out[22]: 9

In [23]: f.tell()
Out[23]: 18

In [24]: f.close()

In [25]: f = open("a.dat")

In [26]: f.tell()
Out[26]: 0

In [27]: f.readline()
Out[27]: '\n'

In [28]: f.readlines()
Out[28]: ['\tHelloz\n', '\n', '\tHelloz\n']

In [29]: f.tell()
Out[29]: 18

In [30]: f.readline()
Out[30]: ''

In [31]: f
Out[31]: <_io.TextIOWrapper name='a.dat' mode='r' encoding='UTF-8'>

In [32]: f.readline()
Out[32]: ''

In [33]: f.readline()
Out[33]: ''

In [34]: f
Out[34]: <_io.TextIOWrapper name='a.dat' mode='r' encoding='UTF-8'>

In [35]: f.write("\n\tHelloz\n")
---------------------------------------------------------------------------
UnsupportedOperation                      Traceback (most recent call last)
<ipython-input-35-c796ca1b52c7> in <module>()
----> 1 f.write("\n\tHelloz\n")

UnsupportedOperation: not writable

In [36]: f.tell()
Out[36]: 18

In [37]: f.seek(0)
Out[37]: 0

In [38]: f.readline()
Out[38]: '\n'

In [39]: f.readline()
Out[39]: '\tHelloz\n'

In [40]: f.readline()
Out[40]: '\n'

In [41]: f.readline()
Out[41]: '\tHelloz\n'

In [42]: f.readline()
Out[42]: ''

In [43]: f.seek(0)
Out[43]: 0

In [44]: f.readline()
Out[44]: '\n'

In [45]: f.close()

In [46]: f = open("a.dat")

In [47]: f.close()

In [48]: f = open("a.dat", "a")

In [49]: f.write("123")
Out[49]: 3

In [50]: f.tell()
Out[50]: 21

In [51]: f.close()

^(BASH) > $ cat a.dat

	Helloz
$ cat a.dat

	Helloz

	Helloz
$ cat a.dat

	Helloz

	Helloz
$ cat a.dat

	Helloz

[WEB](https://www.tutorialspoint.com/web_developers_guide/web_hosting_concepts.htm)

<<<<<<< HEAD
[How it works](https://www.tutorialspoint.com/web_developers_guide/web_how_it_works.htm)
=======
WEB!

***How it works!***

In Short

We have seen how a Web client - server interaction happens. We can summarize these steps as follows −

A user enters a URL into a browser (for example, Google.com. This request is passed to a domain name server.

The domain name server returns an IP address for the server that hosts the Website (for example, 68.178.157.132).

The browser requests the page from the Web server using the IP address specified by the domain name server.

The Web server returns the page to the IP address specified by the browser requesting the page. The page may also contain links to other files on the same server, such as images, which the browser will also request.

The browser collects all the information and displays to your computer in the form of Web page.

>>>>>>> d763a514596ab39744162dc347c2b9605b1c0d4a

[Basic concepts](https://www.tutorialspoint.com/web_developers_guide/web_basic_concepts.htm)

[Making graphs using JS](https://canvasjs.com/javascript-charts/multi-series-chart/)

2020.07.14

Entering github using terminal:

git clone http://github.com/username/EDIBO

To upload from terminal to github.com

./git-upload

./git-upload 20200713_18_10

usr:
psw:

export NVM_DIR="$HOME/.nvm" && (
  git clone https://github.com/nvm-sh/nvm.git "$NVM_DIR"
  cd "$NVM_DIR"
  git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)`
) && \. "$NVM_DIR/nvm.sh"



Visual studios:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=>, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <today-date>Yes</today-date>

    <script>   
        
        class TodayDateComponent extends HTMLElement {
            constructor(){
                super();
                
                this.innerText=new Date();
                
            }
        }
        const comp = customElements.define('today-date', TodayDateComponent);

    </script>
</body>
</html>


a.js:

class TodayDateComponent extends HTMLElement {
    constructor(){
        super();
        
        this.innerText=new Date();
        
    }
}
const comp = customElements.define('today-date', TodayDateComponent);

index.html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=>, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <today-date>Yes</today-date>

 <script src="a.js"></script> 
 
 ***
 
        
        

</body>
</html>


class TodayDateComponent extends HTMLElement {
    constructor(){
        super();
        setInterval(() => {
            this.innerText = new Date();
        }, 1000);
    }
        
        
        
    
}
const comp = customElements.define('today-date', TodayDateComponent);

***


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MyFirstWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyValuesController : ControllerBase
    {
        // HttpGetAttribute api/Myvalues
        [HttpGet]

        public ActionResult<IEnumerable<string>> GetAction()
        {
            return new string[] {"Kristaps", "July", "2020", "EDIBO", "RTU"};
        }
    }
}

WED. 22nd July

ng g c profile , gallery

Lazy loading, eager loading

loading="lazy"

MicroFrontend - piemērs (Spotify)

1. Routing module

2. <Routing-outlet>

Tatjana:

Mainīgais (kur tas ir deklarēts --> id_name -> RAM => atmiņas apgabals tiek piešķirts mainīgajam!
 vai definēt?)

mainīgo masīvs <element data type> - id_name[]  | if (else)		| switch	
^				             ^0 |----------------------	|
(...) tuple size =/ var []			|    (elif)	        |
[...] list size = var []			|----------------------	|		
{:,...,:,...:} dictionary size = var [X]	|for /while/do   while	|
						| (break,Continue)	|
                     				-------------------------
						user_function(angular apraksts)	
						return |_| 



2020.07.29

(SQL)

>sqlite3

.quit - lai izietu

.help - palīdzība

.databases - lai noskaidrotu visas datubāzes

.open test.db

.databases

create table tbl1(one varchar(10), two smallint); - izveido tabulu

PIEMĒRS - create table mana_tabula(lauks1 smallint, lauks2 varchar(5));


