export interface QueryTemplate {
  title: string;
  description: string;
  query: string;
}

export const queryTemplates: QueryTemplate[] = [
  {
    title: "Find Open Directories",
    description: "Search for exposed directory listings.",
    query: 'intext:"index of /"',
  },
  {
    title: "Music Search",
    description: "Find audio files for a specific artist.",
    query: 'Nina Simone intitle:"index of" "parent directory" "size" "last modified" "description" I Put A Spell On You (mp4|mp3|avi|flac|aac|ape|ogg) -inurl:(jsp|php|html|aspx|htm|cf|shtml|lyrics-realm|mp3-collection) -site:.info',
  },
  {
    title: "Document Search",
    description: "Find documents related to a specific topic or person.",
    query: 'Bill Gates intitle:"index of" "parent directory" "size" "last modified" "description" Microsoft (pdf|txt|epub|doc|docx) -inurl:(jsp|php|html|aspx|htm|cf|shtml|ebooks|ebook) -site:.info',
  },
  {
    title: "Video Rips",
    description: "Search for DVDRip files in open directories.",
    query: 'parent directory DVDRip -xxx -html -htm -php -shtml -opendivx -md5 -md5sums',
  },
  {
    title: "MP3 Audio by Singer/Album",
    description: "Look for MP3 files for a singer or album in open directories.",
    query: 'parent directory "ARTIST_OR_ALBUM_NAME" -xxx -html -htm -php -shtml -opendivx -md5 -md5sums',
  },
  {
    title: "FTP Config Files",
    description: "Find configuration files on FTP servers.",
    query: 'filetype:config inurl:web.config inurl:ftp',
  },
  {
    title: "Windows XP Keys",
    description: "A classic example of finding sensitive information.",
    query: '"Windows XP Professional" 94FBR',
  },
  {
    title: "Confidential Documents",
    description: "Search for various document types containing confidential information.",
    query: 'ext:(doc | pdf | xls | txt | ps | rtf | odt | sxw | psw | ppt | pps | xml) (intext:confidential salary | intext:"budget approved") inurl:confidential',
  },
];
