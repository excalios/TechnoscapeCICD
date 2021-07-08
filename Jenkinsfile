pipeline {
    agent any
    stages {
        stage ('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 14') {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 14') {
                    sh 'npm run test'
                }
            }
        }
    }
}
