---
author: admin
comments: true
date: 2012-03-03 19:17:21+00:00
layout: post
link: http://stephen.yearl.us/installing-postfix-and-dovecot-on-debian-6-squeeze/
slug: installing-postfix-and-dovecot-on-debian-6-squeeze
title: Installing Postfix and Dovecot on Debian 6 (Squeeze)
wordpress_id: 216
categories:
- tech
tags:
- Linux
- VPS
---

Add MX records (A and AAAA) to zone file for vps.yearl.us at HE
Primary files involved:



	
  * /etc/postfix/main.cf

	
  * /etc/postfix/sasl/smtpd.conf

	
  * /etc/postfix/sasl/smtpd.conf


start/stop

	
  * /etc/init.d/postfix restart

	
  * /etc/init.d/saslauthd start

	
  * /etc/init.d/dovecot restart


POSTFIX (send)
```bash
$ sudo apt-get update
$ sudoapt-get install postfix
$dpkg-reconfigure postfix
$ sudo sudo apt-get install mailutils
$ sudo mkdir /etc/skel/mail/
$ mkdir ~/mail/
$ su
# mkdir ~/mail/
```

test send:
```bash
$ mail -s Subject_Line mail_addr@yearl.us
testing new mail. This is the body .
$$mail -s "log file" mail_addr@yearl.us < /etc/nginx/nginx.conf
[CTRL+D to send]
```

Boomshaka!

DOVECOT (receive)
config at: `/etc/dovecot/dovecot.conf[/cci] (do the usual back-up, re-create); mail folders in [cci]/var/mail/$USER`

```bash
$ sudo apt-get install dovecot-imapd dovecot-pop3d
$cp /etc/dovecot/dovecot.conf /etc/dovecot/dovecot.conf-backup
$rm /etc/dovecot/dovecot.conf
$nano /etc/dovecot/dovecot.conf
```

Backup `/etc/dovecot/dovecot.conf`, recreate it as below:
```bash
#sjy2 2012-03-01
protocols = imap imaps pop3 pop3s
listen = *, [::]
disable_plaintext_auth = no
log_timestamp = "%Y-%m-%d %H:%M:%S "
mail_privileged_group = mail
ssl_cert_file = /etc/ssl/certs/postfix.pem
ssl_key_file = /etc/ssl/private/postfix.key
mail_location = maildir:~/mail:LAYOUT=fs:INBOX=~/mail/
protocol imap {}
protocol pop3 {
pop3_uidl_format = %08Xu%08Xv
}
protocol managesieve {}
auth default {
mechanisms = plain login
passdb pam {}
userdb passwd {}
socket listen {
client {
path = /var/spool/postfix/private/auth
mode = 0660
user = postfix
group = postfix
}
}
dict {}
plugin {}
```
<!-- more -->


Restart dovecot:
```bash
/etc/init.d/dovecot restart
```

At this point mail can be sent, but no external replies back to the address are not being received... or if they are I do not know where they are. Certainly a gmail reply to root@vps.yearl.us does not throw any kind of "addressee unknown" exception. Internally mail is being sent and received:
```bash
$cat /var/mail/syj2
From root@vps.yearl.us Thu Mar 1 03:07:25 2012
```

Editing `/etc/postfix/main.cf` to:

```
smtp_use_tls = yes
smtpd_use_tls = yes
smtp_tls_note_starttls_offer = yes
smtpd_tls_loglevel = 1
smtpd_tls_received_header = yes
smtpd_sasl_type = dovecot
smtpd_sasl_path = private/auth
smtpd_sasl_auth_enable = yes
broken_sasl_auth_clients = yes
smtpd_recipient_restrictions = reject_unknown_sender_domain, reject_unknown_recipient_domain, reject_unauth_pipelining, permit_mynetworks, permit_sasl_authen$
smtpd_sasl_local_domain = vps.yearl.us
smtpd_sasl_security_options = noanonymous

virtual_alias_maps = hash:/etc/postfix/virtual
alias_maps = hash:/etc/aliases
home_mailbox = mail/
```

Restart postfix:
```bash
/etc/init.d/postfix restart
```

install and configure SASL:
```bash
apt-get install libsasl2-2 libsasl2-modules sasl2-bin
update-rc.d: warning: saslauthd stop runlevel arguments (0 1 6) do not match LSB Default-Stop values (1) To enable saslauthd, edit /etc/default/saslauthd and set START=yes ... (warning).
```

create `/etc/postfix/sasl/smtpd.conf` and add:
[ccW]pwcheck_method: saslauthd[/ccW]
```bash
/etc/init.d/saslauthd start
```

Generate a self-signed SSL certificate:
```bash
openssl req -new -x509 -days 365 -nodes -out /etc/ssl/certs/postfix.pem -keyout /etc/ssl/private/postfix.key
Country Name (2 letter code) [AU]:US
State or Province Name (full name) [Some-State]:MA
Locality Name (eg, city) []:Newton
Organization Name (eg, company) [Internet Widgits Pty Ltd]:US.Yearl
Organizational Unit Name (eg, section) []:. Common Name (eg, YOUR name) []:mail.vps.yearl.us
Email Address []:xxxxx@gmail.com
```

Every new user account should have a ~/mail directory:
```bash
mkdir /etc/skel/mail/
```

Create `/etc/postfix/` virtual to map incoming emails to their destinations

```
#2012-03-02
#set-up of routing inbound emails

sjy2@vps.yearl.us sjy2
stephen@vps.yearl.us sjy2
admin@vps.yearl.us sjy2

wanker@vps.yearl.us sjy2@vps.yearl.us
mail@vps.yearl.us sjy2@vps.yearl.us
```

modify `/etc/aliases`, e.g.:

```
postmaster: root root: sjy2 admin: sjy2
```

Recreate aliases database &c, restart postfix

```
postalias /etc/aliases
postmap /etc/postfix/virtual
/etc/init.d/postfix restart
```

Gen an MUA-- Ah, the memories I have of PINE!!
```bash
apt-get install alpine
```

Alpine can send mail, and mail is being received in ~/mail, but Alpine is presumably reading `/var/mail` as upon starting apline:
[ccW]mailbox vulnerable - directory /var/mail must have 1777 protection[/ccW]

so...
```bash
chmod 1777 /var/mail/
```

xxxxxxxx
```bash
$mkdir -p /var/spool/postfix/var/run/saslauthd
$cp -a /etc/default/saslauthd /etc/default/saslauthd.bak
$adduser postfix sasl
```

Specify Dovecot authentication daemon socket. Here an abs. path. See postfix manual
`etc/dovecot/dovecot.conf`

test receive:
....

SSL& SASL...
