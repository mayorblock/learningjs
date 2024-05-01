# learningjs

# How to: Run simple server

##  Using python 

```bash
# host files from local folder 
# 8000 is default
> python3 -m http.server 8000
```


## Expose port in local network
Assuming that firewall has been set up
```bash
# expose port (typical HTTP ports are 80 and 8080)
> sudo ufw allow 8000

# Find server IP address
> hostname -I
```