'''
page:  https://archive.org/details/BeethovenPianoSonataNo.1

https://archive.org/details/Partita3_prelude      
https://archive.org/details/Bach-stokowskiChaconne
https://archive.org/details/


  id   | source |                        sourceid                         |     composerkey      |                                 title                                  |   genre   |      form       |                              sourcetitle                               |               performer               
-------+--------+---------------------------------------------------------+----------------------+------------------------------------------------------------------------+-----------+-----------------+------------------------------------------------------------------------+---------------------------------------
 10152 | 78rpm  | Partita3_prelude                                        | BACHJOHANNSEBASTIAN  | Partita No. 3 Prelude                                                  | classical | partita         | Partita #3_Prelude                                                     | 
  3668 | 78rpm  | Bach-stokowskiChaconne                                  | BACHJOHANNSEBASTIAN  | Chaconne                                                               | classical | chaconne        | BACH-STOKOWSKI: Chaconne                                               | 
'''

import csv
import urllib.request as req
import re
import sys

inputfile = 'track.csv'
outputfile = 'newmedia.csv'
maxread = 1000
cnt = 0
failed = 0
pagesuccess = 0
mediasuccess = 0
pagebaseurl = 'https://archive.org/details/'

def main():
	global cnt, failed, pagesuccess, mediasuccess

	headings = ['id', 'composerkey', 'title', 'genre', 'form', 'performer', 'pageurl', 'mediaurl']
	fout = open(outputfile, 'w') 
	wtr = csv.writer(fout) 
	wtr.writerow(headings) 
        
	with open(inputfile, newline='') as csvfile:
		rdr = csv.DictReader(csvfile, delimiter='|')
		for row in rdr:
			cnt += 1
			if cnt > maxread: break

			id = row['id'].strip()
			composerkey = row['composerkey'].strip()
			sourceid = row['sourceid'].strip()
			title = row['title'].strip()
			genre = row['genre'].strip()
			form = row['form'].strip()
			performer = row['performer'].strip()
			mediaurl = ''
			pageurl = pagebaseurl + sourceid
			print('try: ' + pageurl)
			f = ''
			try:
				f = req.urlopen(pageurl)
			except:
				print('page not found')
				failed += 1
				continue

			print('page found')
			pagesuccess += 1
			contents = str(f.read())
			m = re.search(r'https://\S*?mp3', contents)
			if m:
				mediaurl = m.group()
				print('media found')
				mediasuccess += 1

			fields = [id, composerkey, title, genre, form, performer, pageurl, mediaurl]
			wtr.writerow(fields)

	print('failed: ' + str(failed))
	print('pagesuccess: ' + str(pagesuccess))
	print('mediasuccess: ' + str(mediasuccess))

if __name__ == '__main__':
	main()

