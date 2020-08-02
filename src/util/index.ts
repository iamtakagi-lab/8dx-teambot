export const shuffle =  function<T> (array: T[]) {
    const out = Array.from(array);
    for (let i = out.length - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      const tmp = out[i];
      out[i] = out[r];
      out[r] = tmp;
    }
    return out;
}

export const replaceAll = (str: string, beforeStr: string, afterStr: string) : string => {
    var reg = new RegExp(beforeStr, "g");
    return str.replace(reg, afterStr);
}

export const composeTeam = (players: Array<string>, makeTeamSize: number): Array<Array<string>> => {
    const teams: Array<Array<string>> = new Array(makeTeamSize)
 
    for (let i = 0; i < makeTeamSize; i++) {
        teams[i] = new Array()
    }

    let n = 0

    shuffle(players)

    players.forEach(player =>
        teams[n++ % makeTeamSize].push(player)
    )

    return teams
}

const alphabets = "abcdefghijklmnopqrstuvwxyz";

export const getAlphabet = (i: number) => {
    return alphabets[i]
}

export const randomTag = (length: number): string => {
    var tag = "";
    for (var i = 0; i < length; i++) {
        tag += alphabets[Math.floor(Math.random() * alphabets.length)];
    }

    return tag
}