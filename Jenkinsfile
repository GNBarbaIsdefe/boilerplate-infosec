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

  }
}