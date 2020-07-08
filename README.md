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

