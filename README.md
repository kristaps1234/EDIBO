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

df /home | awk '{ print $5 }' | sed 's/|//' - **dod precīzus procentus!!!!!!!!!!**

df -h |egrep sda2 | awk '{print ($3)/$2*100 "%"}' 

df -k /home | awk '{ print $5 }'|grep %|cut -d% -f 1

