import yaml from 'js-yaml';
import {
    PERSON
} from '../../resume/data.yml';
import {
    terms
} from '../terms';

// Called by templates to decrease redundancy
function parseSkill(skill) {
    const parsedSkill = skill.split('-');
    return {
        title: parsedSkill[0],
        skills: parsedSkill[1]
    };
}

function getVueOptions (name) {
    const opt = {
        name: name,
        data () {
            const person = yaml.load(PERSON);
            return {
                person: Object.assign(
                    {},
                    person,
                    { skills: person.skills.map(skill => parseSkill(skill)) }
                ),
                terms: terms,
            };
        },
        computed: {
            lang () {
                const defaultLang = this.terms.en;
                const useLang = this.terms[this.person.lang];

                // overwrite non-set fields with default lang
                Object.keys(defaultLang)
                    .filter(k => !useLang[k])
                    .forEach(k => {
                        console.log(k);
                        useLang[k] = defaultLang[k];
                    });

                return useLang;
            },

            contactLinks() {
                const links = {};

                if(this.person.contact.github) {
                    links.github = `https://github.com/${this.person.contact.github}`;
                }

                if(this.person.contact.codefights) {
                    links.codefights = `https://codefights.com/profile/${this.person.contact.codefights}`;
                }

                if(this.person.contact.medium) {
                    links.medium = `https://medium.com/@${this.person.contact.medium}`;
                }

                if(this.person.contact.email) {
                    links.email = `mailto:${this.person.contact.email}`;
                }

                if(this.person.contact.linkedin) {
                    links.linkedin = `https://linkedin.com/in/${this.person.contact.linkedin}`;
                }

                if(this.person.contact.phone) {
                    links.phone = `tel:${this.person.contact.phone}`;
                }

                return links;
            },
        }
    };
    return opt;
}

export {
    getVueOptions
};
