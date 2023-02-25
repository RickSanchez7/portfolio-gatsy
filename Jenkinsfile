pipeline {
	environment {
    IP = credentials('lightsail_ip')
  }
    agent any
    stages {
        stage('install') {
            steps {
                sh "npm install"
            }
        }
        stage('build') {
            steps {
                sh "npm run build"
            }
        }
       	stage('Deploy') {
            steps {
                withCredentials([file(credentialsId: 'lightsail-pem', variable: 'PEM_FILE')]) {
										sh 'tar -czvf app.tar.gz ./public'
										sh "scp -o StrictHostKeyChecking=no -i ${PEM_FILE} app.tar.gz ${IP}:~/app.tar.gz"
                    sh "ssh -o StrictHostKeyChecking=no -i ${PEM_FILE} ${IP} 'tar -xzvf app.tar.gz -C portfolio && rm app.tar.gz'"
                }
            }
        }
    }
}