pipeline {
    agent any
    tools {
        maven 'maven'
        nodejs 'NodeJS'
    }
    stages {
        stage("Clean up") {
            steps {
                deleteDir()
            }
        }
        stage("Clone repo") {
            steps {
                sh "git clone https://github.com/dalibm98/PDS-Projet.git"
            }
        }
        stage("Generate frontend image") {
            steps {
                dir("PDS-Projet/PdsFront") {
                    sh "docker build -t dalibm98/frontend-app ."
                }
            }
        }
        stage("Generate backend image") {
            steps {
                dir("PDS-Projet/PdsBackend") {
                    sh "mvn clean install"
                    sh "docker build -t dalibm98/gestion_freelances ."
                }
            }
        }
        stage('Push image to hub') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'dockerhub', variable: 'dockerhubpwd')]) {
                        sh 'docker login -u dalibm98 -p ${dockerhubpwd}'
                    }
                    sh 'docker push dalibm98/frontend-app'
                    sh 'docker push dalibm98/gestion_freelances'
                }
            }
        }

         stage('Deploy to k8s') {
            steps {
                script {

                    kubernetesDeploy(configs:  'manifest.yaml',kubeconfigId: 'kubeconfig') {
                        
                    }
                }
            }
        }
    }
}
