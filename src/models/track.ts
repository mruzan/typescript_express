import { readFile, writeFile } from 'fs/promises';

const track = {
    read: async () => {
      const data = await readFile('./db/db.json', 'utf8');
      const content = JSON.parse(data);
      if (content?.tracks.length > 0) {
        const trackArr = content?.tracks;
        const response = trackArr.length > 10 ? trackArr.slice(-10) : trackArr;
        return response.reverse();
      }
      return null;
    },

    write: async (val:string) => {
        const fileContent = await readFile('./db/db.json', 'utf8');
        const jsonObject = JSON.parse(fileContent);
        const output = jsonObject?.tracks.length > 0 ? jsonObject.tracks[jsonObject.tracks.length -1] : null;

        jsonObject.tracks.push(val);
        let data = JSON.stringify(jsonObject, null, 2);

        await writeFile('./db/db.json', data);
        return output;
    },
}

export default track;