pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/farzot/Jenkins.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    def remote = [:]
                    remote.name = 'Jenkin'
                    remote.host = '185.217.131.146'
                    remote.user = 'root'
                    remote.identityFile = '/root/.ssh/id_rsa'
                    remote.allowAnyHosts = true

                    sshCommand remote: remote, command: "rm -rf /root/jenkin/*"
                    sshPut remote: remote, from: 'dist/', into: '/root/jenkin/'

                    sshCommand remote: remote, command: """
                        cd /root/jenkin &&
                        npm install --production &&
                        if ! command -v pm2 &> /dev/null; then
                            npm install -g pm2
                        fi &&
                        pm2 start dist/main.js --name jenkin_ci_cd
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
