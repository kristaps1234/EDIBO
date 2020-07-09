# EDIBO
EDIBO projekta elektroniskā klade

mans pirmais ieraksts!
[GitHub pages](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)

![terminal common commands](https://user-images.githubusercontent.com/67696837/86453406-6474bb00-bd26-11ea-918a-6f0c8a7e1434.png)

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

df -h/dev/sda2 - apskata izmantošanu

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
