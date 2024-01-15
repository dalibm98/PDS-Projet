pipeline {
    agent any 
    tools { 
        maven 'maven'
        nodejs 'NodeJS'
    }
    stages {
        stage ("Clean up"){
            steps {
                deleteDir()
            }
        }
        stage ("Clone repo"){
            steps {
                sh "git clone https://github.com/dalibm98/PDS-Projet.git"
            }
        }
           stage ("Generate frontend image") {
            steps {
                 dir("PDS-Projet/PdsFront"){
                    sh "docker build -t dalibm98/frontend-app ."
                }                
            }
        }
             stage ("Generate backend image") {
            steps {
                 dir("PDS-Projet/PdsFront"){
                     sh "mvn  clean install"
                    sh "docker build -t dalibm98/gestion_freelances ."
                }                
            }
        }
  
        stage ("Run docker compose") {
            steps {
                 dir("PDS-Projet"){
                    sh " docker compose up -d"
                }                
            }
        }
    }
}
