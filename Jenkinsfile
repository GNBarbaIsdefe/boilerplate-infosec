pipeline {
  agent {
    node {
      label 'linux'
    }

  }
  stages {
    stage('CodeCheck') {
      steps {
        git(url: 'https://github.com/GNBarbaIsdefe/boilerplate-infosec', branch: 'dev')
      }
    }

    stage('ServerAPP') {
      steps {
        sshagent(credentials: ['APPServerPriv']) {
            sh'''
            cd ~/jenkins-agent/workspace/
            scp -ro StrictHostKeyChecking=no boilerplate-infosec_main userapp@10.67.33.250:/home/userapp/workspace
            '''
        }
        }
      }

    }
  }
