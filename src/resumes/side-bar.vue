<template>
  <div id="resume2" class="resume">
      <div class="top-row">
          <span class="person-name">
            {{person.name.first}} {{person.name.middle}} {{person.name.last}}
          </span>
          <span class="person-position">
            {{person.position}}
          </span>
      </div>
      <div class="left-col">
          <div class="person-image">
              <div class="image-centerer">
                  <div class="img"></div>
              </div>
          </div>
          <div class="summary">
            <h3>{{lang.summary}}</h3>
            <div class="summary-description">
              {{person.summary}}
            </div>
          </div>
          <div class="contact">
              <h3>{{ lang.contact }}</h3>
              <div class="contact-row">
                  <a :href="contactLinks.email">{{person.contact.email}}</a>
              </div>
              <div class="contact-row">
                  <a :href="contactLinks.phone">{{person.contact.phone}}</a>
              </div>
              <div class="contact-row">
                  {{person.contact.city}}
              </div>
              <div v-if="person.contact.github" class="contact-row">
                  <span :href="person.contact.github">{{person.contact.github}}</span>
              </div>
              <div class="contact-row">
                <span :href="person.contact.linkedin">{{person.contact.linkedin}}</span>
              </div>
              <div class="contact-row">
                  <span :href="person.contact.website">{{person.contact.website}}</span>
              </div>
          </div>
          <div class="education">
              <h3>{{ lang.education }}</h3>
                  <div class="education-block" v-for="education in person.education" :key="education.degree">
                      <div class="row">
                          <span class="degree">{{education.degree}}</span>
                      </div>
                      <div class="row">
                          <span class="degree-description">{{education.description}}</span>
                      </div>
                  </div>
          </div>
          <div class="skills-block">
              <h3>{{ lang.skills }}</h3>
              <div class="skills">
                <ul>
                  <li class="skill" v-for="(skill, index) in person.skills" :key="index">
                    {{skill}}
                  </li>
                </ul>
              </div>
              <!-- <span class="skills-other"> {{person.knowledge}} </span> -->
          </div>
      </div>
      <div class="right-col">
          <div class="experience">
              <h3>{{ lang.experience }}</h3>
                  <div class="experience-block" v-for="experience in person.experience" :key="experience.company">
                      <div class="row">
                          <span class="company"> {{experience.company}} -</span>
                          <span class="job-title"> {{experience.position}} </span>
                      </div>
                      <div class="row">
                          <span class="time-period"> {{experience.timeperiod}}</span>
                      </div>
                      <div class="row">
                          <span class="job-description" v-if="Array.isArray(experience.description)"> 
                            <ul>
                              <li v-for="(description, index) in experience.description" :key="index">
                                {{description}}
                              </li>
                            </ul>
                          </span>
                          <span class="job-description" v-else>
                            {{experience.description}}
                          </span>
                      </div>
                  </div>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'side-bar';
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#resume2 {
  font-family:'Raleway', sans-serif;
  padding-bottom:50px;
  a, a:focus, a:hover, a:visited {
    text-decoration:none;
  }
  h3 {
    text-transform:uppercase;
    padding-top:0;
    margin-top:0;
    letter-spacing:5px;
    font-weight:400;
    font-size: 0.8em;
  }
  .top-row {
    width:100%;
    padding-top:40px;
    padding-bottom:40px;
    span {
      width:100%;
      display:block;
      text-align:center;
      font-weight:normal;
    }
    span.person-name {
      text-transform:uppercase;
      font-size:35px;
      letter-spacing:10px;
    }
    span.person-position {
      letter-spacing:5px;
    }
  }
  .left-col {
    width:26%;
    float:left;
    padding-left:8%;
    padding-right:4%;
    .person-image .image-centerer {
      display:flex;
      justify-content:center;
      height:auto;
      overflow:hidden;
      .img {
        flex:none;
        background:url('../../resume/id.jpg');
        background-position:center;
        background-size:cover;
        height:250px;
        width:100%;
      }
    }
    .summary {
      margin-top:10px;
      margin-bottom:20px;
      .summary-description {
        font-size: 13px;
      }
    }
    .contact {
      display: inline-block;
      h3 {
        text-align:left;
        margin-top:5px;
      }
      .contact-row {
        font-size: 13px;
        text-align:left;
        margin-bottom:2px;
        a {
          color:black;
        }
      }
    }
    .education {
      margin-top:30px;
      h3 {
        text-align: left;
      }
      .education-block {
        margin-bottom:10px;
        font-size:13px;
      }
    }
    .skills-block {
      margin-top:20px;
      h3 {
        margin-bottom: 2px;
      }
      .skills {
        height: 100%;
        margin-bottom:10px;
        display:inline-block;
        font-size:12px;
        ul {
          padding: 0;
        }
        .skill {
          margin-bottom: 1px;
        }
      }
    }
  }
  .right-col {
    width:50%;
    float:right;
    padding-left:4%;
    padding-right:8%;
    .experience-block {
      margin-bottom:10px;
      .row:first-child {
        margin-bottom:1.5px;
      }
      .row {
        .company {
          text-transform:uppercase;
          font-size:14px;
        }
        .job-description {
          font-size: 13px
        }
        .job-title {
          font-size:14px;
        }
        .time-period {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
