// Command data for search functionality
const commandData = [
    // Docker commands
    { title: "Docker Version", command: "docker --version", category: "docker", description: "Display Docker version" },
    { title: "List Containers", command: "docker ps -a", category: "docker", description: "Show all containers" },
    { title: "List Images", command: "docker images", category: "docker", description: "Show all Docker images" },
    { title: "Run Container", command: "docker run -d nginx", category: "docker", description: "Run nginx in detached mode" },
    { title: "Stop Container", command: "docker stop container_id", category: "docker", description: "Stop a running container" },
    { title: "Remove Container", command: "docker rm container_id", category: "docker", description: "Remove a stopped container" },
    { title: "Pull Image", command: "docker pull ubuntu:latest", category: "docker", description: "Download image from Docker Hub" },
    { title: "Build Image", command: "docker build -t myapp .", category: "docker", description: "Build image from Dockerfile" },
    { title: "Map Ports", command: "docker run -p 8080:80 nginx", category: "docker", description: "Map container port to host" },
    { title: "Mount Volume", command: "docker run -v /data:/data nginx", category: "docker", description: "Mount host directory to container" },
    { title: "View Logs", command: "docker logs container_id", category: "docker", description: "View container logs" },
    { title: "Docker Compose Up", command: "docker-compose up -d", category: "docker", description: "Start all services" },
    { title: "Docker Compose Down", command: "docker-compose down", category: "docker", description: "Stop all services" },
    { title: "List Networks", command: "docker network ls", category: "docker", description: "List Docker networks" },
    
    // Linux commands
    { title: "List Files", command: "ls", category: "linux", description: "List directory contents" },
    { title: "List All Files", command: "ls -la", category: "linux", description: "List all files with details" },
    { title: "Change Directory", command: "cd [dir]", category: "linux", description: "Change directory" },
    { title: "Print Working Dir", command: "pwd", category: "linux", description: "Print working directory" },
    { title: "Make Directory", command: "mkdir [name]", category: "linux", description: "Create new directory" },
    { title: "Remove Directory", command: "rmdir [name]", category: "linux", description: "Remove empty directory" },
    { title: "Copy File", command: "cp [src] [dest]", category: "linux", description: "Copy files" },
    { title: "Copy Directory", command: "cp -r [src] [dest]", category: "linux", description: "Copy directories recursively" },
    { title: "Move/Rename", command: "mv [src] [dest]", category: "linux", description: "Move or rename files" },
    { title: "Remove File", command: "rm [file]", category: "linux", description: "Remove a file" },
    { title: "Force Remove", command: "rm -rf [dir]", category: "linux", description: "Force remove directory" },
    { title: "Create File", command: "touch [file]", category: "linux", description: "Create empty file" },
    { title: "View File", command: "cat [file]", category: "linux", description: "Display file contents" },
    { title: "Who Am I", command: "whoami", category: "linux", description: "Display current user" },
    { title: "Run as Root", command: "sudo [cmd]", category: "linux", description: "Run command as root" },
    { title: "Add User", command: "adduser [name]", category: "linux", description: "Add new user" },
    { title: "Change Permissions", command: "chmod 755 [file]", category: "linux", description: "Change file permissions" },
    { title: "Change Owner", command: "chown user:group [file]", category: "linux", description: "Change file owner" },
    { title: "Process List", command: "ps aux", category: "linux", description: "List all processes" },
    { title: "Kill Process", command: "kill [pid]", category: "linux", description: "Kill process by ID" },
    { title: "Disk Usage", command: "df -h", category: "linux", description: "Show disk usage" },
    { title: "Memory Usage", command: "free -h", category: "linux", description: "Show memory usage" },
    { title: "IP Address", command: "ip addr", category: "linux", description: "Show IP addresses" },
    { title: "Ping", command: "ping [host]", category: "linux", description: "Ping a host" },
    { title: "List Ports", command: "netstat -tulpn", category: "linux", description: "Show listening ports" },
    { title: "APT Update", command: "sudo apt update", category: "linux", description: "Update package list" },
    { title: "APT Install", command: "sudo apt install [pkg]", category: "linux", description: "Install package" },
    { title: "Systemctl Start", command: "sudo systemctl start [service]", category: "linux", description: "Start service" },
    { title: "Systemctl Stop", command: "sudo systemctl stop [service]", category: "linux", description: "Stop service" },
    { title: "Systemctl Status", command: "sudo systemctl status [service]", category: "linux", description: "Check service status" },
    { title: "SSH Connect", command: "ssh user@hostname", category: "linux", description: "Connect to remote server" },
    { title: "SSH Key Gen", command: "ssh-keygen -t rsa", category: "linux", description: "Generate SSH key" },
    
    // Virtualisation commands
    { title: "Proxmox Status", command: "pvesm status", category: "virtualisation", description: "Show storage status" },
    { title: "List VMs", command: "qm list", category: "virtualisation", description: "List virtual machines" },
    { title: "Start VM", command: "qm start [vmid]", category: "virtualisation", description: "Start virtual machine" },
    { title: "Stop VM", command: "qm stop [vmid]", category: "virtualisation", description: "Stop virtual machine" },
    
    // Networking commands
    { title: "Show Routes", command: "ip route", category: "networking", description: "Show routing table" },
    { title: "Traceroute", command: "traceroute [host]", category: "networking", description: "Trace route to host" },
    { title: "DNS Lookup", command: "nslookup [domain]", category: "networking", description: "DNS lookup" },
    { title: "UFW Enable", command: "sudo ufw enable", category: "networking", description: "Enable firewall" },
    { title: "UFW Allow", command: "sudo ufw allow [port]", category: "networking", description: "Allow port through firewall" },
    { title: "UFW Status", command: "sudo ufw status", category: "networking", description: "Show firewall status" },
    { title: "Certbot SSL", command: "sudo certbot --nginx -d example.com", category: "networking", description: "Get SSL certificate" }
];

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchBtn = document.getElementById('searchBtn');

if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }
        
        const filtered = commandData.filter(item => 
            item.command.toLowerCase().includes(query) ||
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
        
        displaySearchResults(filtered);
    });
    
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase();
            if (query.length >= 2) {
                const filtered = commandData.filter(item => 
                    item.command.toLowerCase().includes(query) ||
                    item.title.toLowerCase().includes(query) ||
                    item.description.toLowerCase().includes(query)
                );
                displaySearchResults(filtered);
            }
        });
    }
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchResults.contains(e.target) && e.target !== searchInput) {
            searchResults.classList.remove('active');
        }
    });
}

function displaySearchResults(results) {
    if (!searchResults) return;
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p style="padding: 1rem; color: var(--text-muted);">No commands found</p>';
    } else {
        searchResults.innerHTML = results.map(item => `
            <div class="search-result-item" onclick="copyToClipboard('${item.command.replace(/'/g, "\\'")}')">
                <code>${item.command}</code>
                <p>${item.description} (${item.category})</p>
            </div>
        `).join('');
    }
    searchResults.classList.add('active');
}

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showCopyNotification();
    });
}

function showCopyNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = '✓ Copied to clipboard!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Add copy buttons to all code blocks
document.querySelectorAll('.code-block').forEach(block => {
    if (!block.querySelector('.copy-btn')) {
        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.textContent = 'Copy';
        button.onclick = () => {
            const code = block.querySelector('code');
            if (code) {
                const text = code.textContent;
                navigator.clipboard.writeText(text).then(() => {
                    button.textContent = 'Copied!';
                    button.classList.add('copied');
                    setTimeout(() => {
                        button.textContent = 'Copy';
                        button.classList.remove('copied');
                    }, 2000);
                });
            }
        };
        block.appendChild(button);
    }
});

// Make inline code elements clickable to copy
document.querySelectorAll('.command-card code').forEach(code => {
    code.style.position = 'relative';
    code.style.cursor = 'pointer';
    code.onclick = () => {
        const text = code.textContent;
        navigator.clipboard.writeText(text).then(() => {
            showCopyNotification();
        });
    };
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 26, 46, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(26, 26, 46, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Console message
console.log('%c🚀 Welcome to Self-Hosted Hub!', 'font-size: 20px; color: #2496ed; font-weight: bold;');
console.log('%cStart your journey to self-hosting!', 'font-size: 14px; color: #ffc107;');
