// Command data for search functionality
const commandData = {
    "docker": [
        {
            title: "Docker Installation (Ubuntu/Debian)",
            command: `curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh`,
            description: "Install Docker on Ubuntu/Debian systems"
        },
        {
            title: "Start Docker Service",
            command: `sudo systemctl start docker`,
            description: "Start the Docker daemon"
        },
        {
            title: "Enable Docker on Boot",
            command: `sudo systemctl enable docker`,
            description: "Enable Docker to start on system boot"
        },
        {
            title: "List Running Containers",
            command: `docker ps`,
            description: "Show all running Docker containers"
        },
        {
            title: "List All Containers",
            command: `docker ps -a`,
            description: "Show all Docker containers (running and stopped)"
        },
        {
            title: "Pull Docker Image",
            command: `docker pull nginx:latest`,
            description: "Pull the latest Nginx image from Docker Hub"
        },
        {
            title: "Run a Container",
            command: `docker run -d --name my-nginx -p 80:80 nginx:latest`,
            description: "Run Nginx container in detached mode with port mapping"
        },
        {
            title: "Stop a Container",
            command: `docker stop my-nginx`,
            description: "Stop a running container"
        },
        {
            title: "Remove a Container",
            command: `docker rm my-nginx`,
            description: "Remove a stopped container"
        },
        {
            title: "List Docker Images",
            command: `docker images`,
            description: "List all locally stored Docker images"
        },
        {
            title: "Remove Docker Image",
            command: `docker rmi nginx:latest`,
            description: "Remove a Docker image"
        },
        {
            title: "View Container Logs",
            command: `docker logs -f my-nginx`,
            description: "Follow logs of a container"
        },
        {
            title: "Execute Command in Container",
            command: `docker exec -it my-nginx bash`,
            description: "Open interactive bash shell in container"
        },
        {
            title: "Docker Compose Up",
            command: `docker-compose up -d`,
            description: "Start containers defined in docker-compose.yml"
        },
        {
            title: "Docker Compose Down",
            command: `docker-compose down`,
            description: "Stop and remove containers defined in docker-compose.yml"
        },
        {
            title: "Build Docker Image",
            command: `docker build -t my-app:latest .`,
            description: "Build an image from Dockerfile in current directory"
        },
        {
            title: "Container Resource Stats",
            command: `docker stats`,
            description: "Display live resource usage for containers"
        },
        {
            title: "Docker System Prune",
            command: `docker system prune -a`,
            description: "Remove all unused containers, networks, and images"
        }
    ],
    "linux": [
        {
            title: "Update Package List",
            command: `sudo apt update`,
            description: "Update the list of available packages"
        },
        {
            title: "Upgrade Packages",
            command: `sudo apt upgrade`,
            description: "Upgrade all installed packages to latest versions"
        },
        {
            title: "Install Package",
            command: `sudo apt install nginx`,
            description: "Install Nginx web server"
        },
        {
            title: "Remove Package",
            command: `sudo apt remove nginx`,
            description: "Remove Nginx package"
        },
        {
            title: "Check System Info",
            command: `uname -a`,
            description: "Display system information"
        },
        {
            title: "Check Disk Usage",
            command: `df -h`,
            description: "Show disk space usage in human-readable format"
        },
        {
            title: "Check Memory Usage",
            command: `free -h`,
            description: "Display memory usage"
        },
        {
            title: "List Files in Directory",
            command: `ls -lah`,
            description: "List all files with details"
        },
        {
            title: "Change Directory",
            command: `cd /var/www/html`,
            description: "Change to specified directory"
        },
        {
            title: "Create Directory",
            command: `mkdir myproject`,
            description: "Create a new directory"
        },
        {
            title: "Copy File",
            command: `cp source.txt destination.txt`,
            description: "Copy file from source to destination"
        },
        {
            title: "Move/Rename File",
            command: `mv oldname.txt newname.txt`,
            description: "Move or rename a file"
        },
        {
            title: "Remove File",
            command: `rm file.txt`,
            description: "Delete a file"
        },
        {
            title: "Remove Directory",
            command: `rm -rf myfolder`,
            description: "Force remove a directory and its contents"
        },
        {
            title: "View File Content",
            command: `cat file.txt`,
            description: "Display contents of a file"
        },
        {
            title: "Edit File with Nano",
            command: `sudo nano /etc/nginx/nginx.conf`,
            description: "Edit file using nano text editor"
        },
        {
            title: "Find Files",
            command: `find /home -name "*.txt"`,
            description: "Find all .txt files in /home directory"
        },
        {
            title: "Grep Search",
            command: `grep "search term" file.txt`,
            description: "Search for pattern in file"
        },
        {
            title: "Check Running Processes",
            command: `ps aux`,
            description: "List all running processes"
        },
        {
            title: "Kill Process",
            command: `kill -9 [PID]`,
            description: "Force kill a process by PID"
        },
        {
            title: "Check Service Status",
            command: `sudo systemctl status nginx`,
            description: "Check if Nginx service is running"
        },
        {
            title: "Start Service",
            command: `sudo systemctl start nginx`,
            description: "Start Nginx service"
        },
        {
            title: "Stop Service",
            command: `sudo systemctl stop nginx`,
            description: "Stop Nginx service"
        },
        {
            title: "Restart Service",
            command: `sudo systemctl restart nginx`,
            description: "Restart Nginx service"
        },
        {
            title: "Enable Service on Boot",
            command: `sudo systemctl enable nginx`,
            description: "Enable Nginx to start on boot"
        },
        {
            title: "Check Open Ports",
            command: `sudo netstat -tulpn`,
            description: "List all listening ports"
        },
        {
            title: "Check IP Address",
            command: `ip addr`,
            description: "Display network interface IP addresses"
        },
        {
            title: "Ping Test",
            command: `ping -c 4 google.com`,
            description: "Test network connectivity"
        },
        {
            title: "Trace Route",
            command: `traceroute google.com`,
            description: "Show the route packets take to reach a host"
        },
        {
            title: "Test Port Connectivity",
            command: `nc -zv example.com 80`,
            description: "Test if port 80 is open on a host"
        },
        {
            title: "Change File Permissions",
            command: `chmod 755 script.sh`,
            description: "Set read/write/execute for owner, read for others"
        },
        {
            title: "Change File Owner",
            command: `sudo chown www-data:www-data /var/www`,
            description: "Change ownership of directory"
        },
        {
            title: "Create User",
            command: `sudo adduser username`,
            description: "Create a new user"
        },
        {
            title: "Add User to Sudo",
            command: `sudo usermod -aG sudo username`,
            description: "Add user to sudo group"
        },
        {
            title: "View System Logs",
            command: `sudo tail -f /var/log/syslog`,
            description: "Follow system log in real-time"
        },
        {
            title: "Check CPU Usage",
            command: `top`,
            description: "Display real-time system processes and CPU usage"
        },
        {
            title: "Tar Archive",
            command: `tar -czvf archive.tar.gz /folder`,
            description: "Create compressed archive"
        },
        {
            title: "Extract Tar",
            command: `tar -xzvf archive.tar.gz`,
            description: "Extract compressed archive"
        },
        {
            title: "Download File with Wget",
            command: `wget https://example.com/file.zip`,
            description: "Download file from URL"
        },
        {
            title: "Download File with Curl",
            command: `curl -O https://example.com/file.zip`,
            description: "Download file using curl"
        }
    ],
    "proxmox": [
        {
            title: "Update Proxmox",
            command: `apt update && apt upgrade -y`,
            description: "Update Proxmox VE packages"
        },
        {
            title: "List VMs",
            command: `qm list`,
            description: "List all QEMU/KVM virtual machines"
        },
        {
            title: "Start VM",
            command: `qm start [vmid]`,
            description: "Start a virtual machine by ID"
        },
        {
            title: "Stop VM",
            command: `qm stop [vmid]`,
            description: "Stop a virtual machine"
        },
        {
            title: "Restart VM",
            command: `qm reset [vmid]`,
            description: "Restart a virtual machine"
        },
        {
            title: "Delete VM",
            command: `qm destroy [vmid]`,
            description: "Delete a virtual machine"
        },
        {
            title: "Create VM",
            command: `qm create [vmid] --name "vm-name" --memory 2048 --cores 2 --net0 virtio,bridge=vmbr0`,
            description: "Create a new virtual machine"
        },
        {
            title: "Show VM Config",
            command: `qm config [vmid]`,
            description: "Display VM configuration"
        },
        {
            title: "List Containers",
            command: `pct list`,
            description: "List all LXC containers"
        },
        {
            title: "Start Container",
            command: `pct start [ctid]`,
            description: "Start an LXC container"
        },
        {
            title: "Stop Container",
            command: `pct stop [ctid]`,
            description: "Stop an LXC container"
        },
        {
            title: "Container Console",
            command: `pct enter [ctid]`,
            description: "Enter container console"
        },
        {
            title: "Show Storage",
            command: `pvesm status`,
            description: "Show storage status"
        },
        {
            title: "Show Cluster Status",
            command: `pvecm status`,
            description: "Show Proxmox cluster status"
        },
        {
            title: "Node Status",
            command: `pvesh get /nodes`,
            description: "Show all nodes in cluster"
        }
    ],
    "networking": [
        {
            title: "Check IP Address",
            command: `ip addr show`,
            description: "Display network interface information"
        },
        {
            title: "Show Routing Table",
            command: `ip route`,
            description: "Display kernel routing table"
        },
        {
            title: "Add Static Route",
            command: `ip route add 192.168.50.0/24 via 192.168.1.1`,
            description: "Add a static route"
        },
        {
            title: "Configure Network Interface",
            command: `ip addr add 192.168.1.100/24 dev eth0`,
            description: "Add IP address to interface"
        },
        {
            title: "Enable Interface",
            command: `ip link set eth0 up`,
            description: "Bring network interface up"
        },
        {
            title: "Disable Interface",
            command: `ip link set eth0 down`,
            description: "Bring network interface down"
        },
        {
            title: "Check DNS Resolution",
            command: `nslookup google.com`,
            description: "Query DNS for domain resolution"
        },
        {
            title: "Test Connection",
            command: `ping -c 4 8.8.8.8`,
            description: "Test connectivity to IP address"
        },
        {
            title: "Trace Route",
            command: `traceroute google.com`,
            description: "Trace packet route to destination"
        },
        {
            title: "Show ARP Table",
            command: `ip neigh`,
            description: "Display ARP cache"
        },
        {
            title: "Flush DNS Cache",
            command: `sudo systemd-resolve --flush-caches`,
            description: "Clear DNS resolver cache"
        },
        {
            title: "Check Open Ports",
            command: `ss -tulpn`,
            description: "List listening ports and applications"
        },
        {
            title: "Configure Firewall (UFW)",
            command: `sudo ufw allow 80/tcp`,
            description: "Allow traffic on port 80"
        },
        {
            title: "Enable Firewall",
            command: `sudo ufw enable`,
            description: "Enable UFW firewall"
        },
        {
            title: "Show Firewall Rules",
            command: `sudo ufw status`,
            description: "List all firewall rules"
        }
    ]
};

// Copy button functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add copy buttons to all code blocks
    const codeBlocks = document.querySelectorAll('.code-block pre');
    
    codeBlocks.forEach((block, index) => {
        const wrapper = block.parentElement;
        const header = wrapper.querySelector('.code-header') || document.createElement('div');
        header.className = 'code-header';
        
        if (!wrapper.querySelector('.code-header')) {
            const titleSpan = document.createElement('span');
            titleSpan.textContent = 'Terminal';
            header.appendChild(titleSpan);
            
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.textContent = 'Copy';
            copyBtn.onclick = function() {
                const text = block.textContent;
                navigator.clipboard.writeText(text).then(() => {
                    copyBtn.textContent = 'Copied!';
                    copyBtn.classList.add('copied');
                    setTimeout(() => {
                        copyBtn.textContent = 'Copy';
                        copyBtn.classList.remove('copied');
                    }, 2000);
                });
            };
            header.appendChild(copyBtn);
            wrapper.insertBefore(header, block);
        }
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (!query) {
            alert('Please enter a search term');
            return;
        }

        // Search through all command data
        let results = [];
        
        for (const [category, commands] of Object.entries(commandData)) {
            commands.forEach(cmd => {
                if (cmd.title.toLowerCase().includes(query) || 
                    cmd.command.toLowerCase().includes(query) ||
                    cmd.description.toLowerCase().includes(query)) {
                    results.push({
                        ...cmd,
                        category: category
                    });
                }
            });
        }

        displaySearchResults(results, query);
    }

    function displaySearchResults(results, query) {
        let resultsContainer = document.querySelector('.search-results');
        
        if (!resultsContainer) {
            resultsContainer = document.createElement('div');
            resultsContainer.className = 'search-results';
            
            const main = document.querySelector('main');
            const hero = main.querySelector('.hero');
            if (hero) {
                main.insertBefore(resultsContainer, hero.nextSibling);
            } else {
                main.appendChild(resultsContainer);
            }
        }

        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <h2>Search Results for "${query}"</h2>
                <p>No results found. Try different keywords.</p>
            `;
            return;
        }

        let html = `<h2>Search Results for "${query}"</h2>`;
        
        results.forEach(result => {
            html += `
                <div class="search-result-item" onclick="scrollToCommand('${result.category}', '${result.title}')">
                    <h4>${result.title}</h4>
                    <p><strong>Category:</strong> ${result.category.charAt(0).toUpperCase() + result.category.slice(1)}</p>
                    <p>${result.description}</p>
                </div>
            `;
        });

        resultsContainer.innerHTML = html;
    }

    // Make function global for onclick
    window.scrollToCommand = function(category, title) {
        // Store search results visibility
        sessionStorage.setItem('searchQuery', title);
        
        // Navigate to the appropriate page if not already there
        const currentPage = window.location.pathname.split('/').pop();
        const pageMap = {
            'docker': 'docker.html',
            'linux': 'linux.html',
            'proxmox': 'proxmox.html',
            'networking': 'networking.html'
        };
        
        if (pageMap[category] && currentPage !== pageMap[category]) {
            window.location.href = pageMap[category] + '#' + encodeURIComponent(title);
        }
    };

    // Check for stored search query on page load
    const storedQuery = sessionStorage.getItem('searchQuery');
    if (storedQuery && !document.querySelector('.search-results')) {
        searchInput.value = storedQuery;
        performSearch();
    }
});
