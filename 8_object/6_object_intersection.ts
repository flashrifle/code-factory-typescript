/*
    Object intersection
 */
type PrimitiveIntersection = string & number;

type PersonType = {
    name: string;
    age: number;
}

type CompanyType = {
    company: string;
    companyRegistrationNumber: string;
}

type PersonAndCompany = PersonType & CompanyType;

const jisoo: PersonAndCompany = {
    name: '지수',
    age: 32,
    company: 'YG',
    companyRegistrationNumber: 'xxxxyyyyzzzz'
}

type PetType = {
    petName: string;
    petAge: number;
}

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
    name: '코드팩토리',
    age: 32,

    // company
    company: '주식회사',
    companyRegistrationNumber: 'xxxxyyyyyyyyyyyyyyyyyyyyyyyyyyy',

    // pet
    petName: '오리',
    petAge: 12,
}