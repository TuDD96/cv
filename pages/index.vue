<template>
  <div class="page-content">
    <div class="container">
      <div class="cover shadow-lg bg-white">
        <div class="cover-bg p-3 p-lg-4 text-white">
          <div class="row">
            <div class="col-lg-4 col-md-5">
              <div class="avatar hover-effect bg-white shadow-sm p-1">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/mycv-b785a.appspot.com/o/users%2F1%2Favatar.jpg?alt=media"
                  width="200"
                  height="200"
                />
              </div>
            </div>
            <div class="col-lg-8 col-md-7 text-center text-md-start">
              <h2 class="h1 mt-2" data-aos="fade-left" data-aos-delay="0">
                {{ user.firstname }} {{ user.lastname }}
              </h2>
              <p data-aos="fade-left" data-aos-delay="100">
                Full-Stack Developer
              </p>
              <div
                class="d-print-none"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <a
                  class="btn btn-light text-dark shadow-sm mt-1 me-1"
                  href="cv.pdf"
                  target="_blank"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="about-section pt-4 px-3 px-lg-4 mt-1">
          <div class="row">
            <div class="col-md-6">
              <h2 class="h3 mb-3">About Me</h2>
              <p>
                {{ user.description }}
              </p>
            </div>
            <div class="col-md-5 offset-md-1">
              <div class="row mt-2">
                <div class="col-sm-4">
                  <div class="pb-1">Birthday</div>
                </div>
                <div class="col-sm-8">
                  <div class="pb-1 text-secondary">{{user.dob}}</div>
                </div>
                <div class="col-sm-4">
                  <div class="pb-1">Email</div>
                </div>
                <div class="col-sm-8">
                  <div class="pb-1 text-secondary">{{ user.email }}</div>
                </div>
                <div class="col-sm-4">
                  <div class="pb-1">Phone</div>
                </div>
                <div class="col-sm-8">
                  <div class="pb-1 text-secondary">{{ user.phone }}</div>
                </div>
                <div class="col-sm-4">
                  <div class="pb-1">Address</div>
                </div>
                <div class="col-sm-8">
                  <div class="pb-1 text-secondary">{{ user.address }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="d-print-none" />
        <div class="skills-section px-3 px-lg-4">
          <h2 class="h3 mb-3">Professional Skills</h2>
          <div class="row">
            <div
              v-for="(skill, index) in skillsBefore"
              :key="index"
              class="col-md-6"
            >
              <div class="mb-2">
                <span>{{ skill.skillname }}</span>
                <div class="progress my-1">
                  <div
                    class="progress-bar"
                    :class="[index % 2 == 0 ? 'bg-primary' : 'bg-success']"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="100"
                    data-aos-anchor=".skills-section"
                    :style="{ width: skill.progress + '%' }"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="d-print-none" />
        <div class="work-experience-section px-3 px-lg-4">
          <h2 class="h3 mb-4">Work Experience</h2>
          <div class="timeline">
            <div class="timeline-card timeline-card-primary card shadow-sm">
              <div class="card-body">
                <div class="h5 mb-1">
                  Fullstask Developer
                  <span class="text-muted h6">at Fabbi Jsc Viet Nam</span>
                </div>
                <div class="text-muted text-small mb-2">
                  Mar, 2020 - Present
                </div>
                <div>
                  <div class="mb-2">
                    <i class="fas fa-hand-point-right"></i>
                    <i>Maintain law book rental project</i>
                    <div class="ps-3">
                      <span>
                        Description: Website for renting books and reading books
                        about law
                      </span>
                      <p>Framework: Laravel/VueJS</p>
                    </div>
                  </div>
                  <div class="mb-2">
                    <i class="fas fa-hand-point-right"></i>
                    <i>Learning management system</i>
                    <div class="ps-3">
                      <span>
                        Description: Manage class, make study plans and learn it
                        via video lectures
                      </span>
                      <p>Framework: Flutter/NoteJS/Firebase</p>
                    </div>
                  </div>
                  <div class="mb-2">
                    <i class="fas fa-hand-point-right"></i>
                    <i>Dating app</i>
                    <div class="ps-3">
                      <span>
                        Description: pay with in-app purchase, Video call with
                        Agora, Detect explicit content with Google Cloud,...
                        Vision
                      </span>
                      <p>Framework: Laravel/React Native</p>
                    </div>
                  </div>
                  <div class="mb-2">
                    <i class="fas fa-hand-point-right"></i>
                    <i>E-Commerce</i>
                    <div class="ps-3">
                      <span>
                        Description: the website uploads products to yahoo,
                        wowma, rakuten, amazon at the same time instead of each
                        EC upload
                      </span>
                      <p>Language: PHP</p>
                    </div>
                  </div>
                  <div class="mb-2">
                    <i class="fas fa-hand-point-right"></i>
                    <i>One Study</i>
                    <div class="ps-3">
                      <span>
                        Description: The application allows users to schedule,
                        make study plans through watching video lectures. Each
                        video will have multiple exercises to help students
                        practice. Moreover, there is a chat room where students
                        can discuss and exchange.
                      </span>
                      <p>Framework: Laravel/React Native</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="timeline-card timeline-card-primary card shadow-sm">
              <div class="card-body">
                <div class="h5 mb-1">
                  Backend Developer
                  <span class="text-muted h6">at Sun* Inc Viet Nam</span>
                </div>
                <div class="text-muted text-small mb-2">
                  Sep, 2019 - Mar, 2020
                </div>
                <div>
                  join Open Education training course on PHP and Laravel at Sun*
                  Inc Viet Nam
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="d-print-none" />
        <div class="page-break"></div>
        <div class="education-section px-3 px-lg-4">
          <h2 class="h3 mb-4">Education</h2>
          <div class="timeline">
            <div class="timeline-card timeline-card-success card shadow-sm">
              <div class="card-body">
                <div class="h5 mb-1">
                  Bachelor in Information Technology
                  <span class="text-muted h6"
                    >from Hanoi University Of Business And Technology
                  </span>
                </div>
                <div class="text-muted text-small mb-2">2016 - 2020</div>
                <!-- <div>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</div> -->
              </div>
            </div>
          </div>
        </div>
        <hr class="d-print-none" />
        <div class="page-break"></div>
        <div class="education-section px-3 px-lg-4 pb-4">
          <h2 class="h3 mb-4">Additional Information</h2>
          <div class="timeline">
            <div class="timeline-card timeline-card-info card shadow-sm">
              <div class="card-body">
                <i class="fas fa-hand-point-right"></i> Can use github fluently
                <br />
                <i class="fas fa-hand-point-right"></i> Can config and deploy
                project to linux server (EC2, Ubuntu,...)
                <br />
                <i class="fas fa-hand-point-right"></i> Can build and use Docker
              </div>
            </div>
          </div>
        </div>
        <hr class="d-print-none" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FirestoreService from '~/services/firebase'
import { Skill, User } from '~/@type/index'

export default Vue.extend({
  name: 'IndexPage',
  async asyncData() {
    const user: User = await FirestoreService.get('users', '1')
    const skills: Skill[] = await FirestoreService.getWhere('skills', [
      {
        field: 'user_id',
        symbol: '==',
        value: 1,
      },
    ])

    const birthday: any = new Date(
      user?.birthday!.seconds * 1000 + user?.birthday!.nanoseconds / 1000000
    )

    user.dob = `${birthday.getDate()}/${birthday.getMonth()}/${birthday.getFullYear()}`
  

    const skillsBefore: Skill[] = skills.map((skill) => {
      return { ...skill, progress: 0 }
    })

    return { user, skillsBefore, skills }
  },
  head: {
    script: [
      {
        type: 'module',
        src: '~/assets/scripts/bootstrap.bundle.min.js',
      },
      {
        type: 'module',
        src: '~/assets/scripts/aos.js',
      },
      {
        type: 'module',
        src: '~/assets/scripts/main.js',
      },
    ],
  },
  created() {
    setTimeout(() => {
      this.skillsBefore = this.skills
    }, 300)
  },
  methods: {
    async getInfoUser() {
      return await FirestoreService.get('users', '1')
    },
    calculateAge(birthday: any) {
      // birthday is a date
      const ageDifMs = Date.now() - birthday
      const ageDate = new Date(ageDifMs) // miliseconds from epoch

      return Math.abs(ageDate.getUTCFullYear() - 1970)
    },
  },
})
</script>

<style scoped>
@import '~/assets/css/font-awesome/css/all.min.css';
@import '~/assets/css/bootstrap.min.css';
@import '~/assets/css/main.css';
</style>
