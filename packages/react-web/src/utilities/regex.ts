const spaceOrSepecialCharacterRegex = /[\s`!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/;

export const spaceOrSepecialCharacter = (str: string) => spaceOrSepecialCharacterRegex.test(str);
