type User = {
    name: string;
    lastName: string;
    birthday?: string;
    age: number;
}

const Tiago: User = {
    name: 'gabriel',
    lastName: 'ramos',
    age: 14
}

//union types
// (how to write o ||)

type LogLevel = 'info' | 'error' | 'debug';
function logMessage(message: string, level: LogLevel) {
    console.log(`[ ${level}] - ${message}`)
}


type About = {
    bio: String;
    interests: string[];
}

type Profile = User & About;
const userWithProfile: Profile = {
    name: 'Tiago',
    lastName: 'Paz',
    birthday: '22/06/1998',
    age: 23,
    bio: 'Hi, my plasuer',
    interests: ['gym', 'music', 'movies']
}