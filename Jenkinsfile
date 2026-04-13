pipeline {
    agent any

    stages {

        stage('Build Node App') {
            steps {
                bat 'docker build -t node-app ./node-app'
            }
        }

        stage('Run Node App') {
            steps {
                bat 'docker rm -f node-container || exit 0'
                bat 'docker run -d -p 3001:3000 --name node-container node-app'
            }
        }

        stage('Build HTML App') {
            steps {
                bat 'docker build -t html-app ./html-app'
            }
        }

        stage('Run HTML App') {
            steps {
                bat 'docker rm -f html-container || exit 0'
                bat 'docker run -d -p 8085:80 --name html-container html-app'
            }
        }
    }
}
