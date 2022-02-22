---
title: "Neomutt keybindings"
date: 2022-02-22T07:39:02+00:00
lastMod:
slug: neomutt-keybindings
layout: post
author: yearluk
origin: hugo
draft: false
toc: false
noLicense: false
weight: 1001
images: null
categories:
- Tech
- Linux
- Reference
tags:
- email
- CLI
- MUA
- "command line"
---

# Neomutt keybindings

One would think that a websearch for "neomutt keybindings" would turn up such a simple listing, but it does not. (Maybe that is *did not* by the time you are reading this). Anyway, here we go.

Yes, it can be called up at any time using `?` in Neomutt (vid. inf.   🤡), but, in many ways, this is just easier. For xample, you are editng your `muttrc`, you've borked it somehow, and you can't get into the program to get to the help screen.

Neomutt is great. Check it out: <https://neomutt.org/>

## Default Bound Functions

| KEY-BIND                  | MUTT FUNCTION                        | DESCRIPTION |
| ---|---|--- |
| ^B                        | M \<enter-command> set my_pipe_dec... | call urlview to extract URLs out of a message |
| ^D                        | delete-thread                        | delete all messages in thread |
| ^E                        | edit-type                            | edit attachment content type |
| ^F                        | forget-passphrase                    | wipe passphrases from memory |
| \<Tab>                     | next-new-then-unread                 | jump to the next new or unread message |
| \<Enter>                   | sidebar-next                         | move the highlight to next mailbox |
| ^K                        | sidebar-prev                         | move the highlight to previous mailbox |
| ^L                        | redraw-screen                        | clear and redraw the screen |
| \<Return>                  | next-line                            | scroll down one line |
| ^N                        | sidebar-next-new                     | move the highlight to next mailbox with new mail |
| ^O                        | sidebar-open                         | open highlighted mailbox |
| ^P                        | sidebar-prev-new                     | move the highlight to previous mailbox with new mail |
| ^R                        | read-thread                          | mark the current thread as read |
| ^U                        | undelete-thread                      | undelete all messages in thread |
| \<Esc>                    | search-reverse                       | search backwards for a regular expression |
| \<Esc>C                    | decode-copy                          | make decoded (text/plain) copy |
| \<Esc>P                    | check-traditional-pgp                | check for classic PGP |
| \<Esc>c                    | change-folder-readonly               | open a different folder in read only mode |
| \<Esc>d                    | delete-subthread                     | delete all messages in subthread |
| \<Esc>e                    | resend-message                       | use the current message as a template for a new one |
| \<Esc>i                    | change-newsgroup-readonly            | open a different newsgroup in read only mode |
| \<Esc>k                    | mail-key                             | mail a PGP public key |
| \<Esc>n                    | next-subthread                       | jump to the next subthread |
| \<Esc>p                    | previous-subthread                   | jump to previous subthread |
| \<Esc>r                    | read-subthread                       | mark the current subthread as read |
| \<Esc>s                    | decode-save                          | make decoded copy (text/plain) and delete |
| \<Esc>u                    | undelete-subthread                   | undelete all messages in subthread |
| \<Space>                   | next-page                            | move to the next page |
| !                         | shell-escape                         | invoke a command in a subshell |
| #                         | break-thread                         | break the thread in two |
| $                         | sync-mailbox                         | save changes to mailbox |
| %                         | toggle-write                         | toggle whether the mailbox will be rewritten |
| &                         | link-threads                         | link tagged message to the current one |
| -                         | previous-page                        | move to the previous page |
| .                         | mailbox-list                         | list mailboxes with new mail |
| /                         | search                               | search for a regular expression |
| 1                         | jump                                 | jump to an index number |
| 2                         | jump                                 | jump to an index number |
| 3                         | jump                                 | jump to an index number |
| 4                         | jump                                 | jump to an index number |
| 5                         | jump                                 | jump to an index number |
| 6                         | jump                                 | jump to an index number |
| 7                         | jump                                 | jump to an index number |
| 8                         | jump                                 | jump to an index number |
| 9                         | jump                                 | jump to an index number |
| :                         | enter-command                        | enter a neomuttrc command |
| ?                         | help                                 | this screen |
| @                         | display-address                      | display full address of sender |
| B                         | sidebar-toggle-visible               | make the sidebar (in)visible |
| C                         | copy-message                         | copy a message to a file/mailbox |
| F                         | flag-message                         | toggle a message's 'important' flag |
| G                         | bottom                               | jump to the bottom of the message |
| J                         | next-entry                           | move to the next entry |
| K                         | previous-entry                       | move to the previous entry |
| L                         | list-reply                           | reply to specified mailing list |
| N                         | mark-as-new                          | toggle a message's 'new' flag |
| O                         | sort-reverse                         | sort messages in reverse order |
| P                         | parent-message                       | jump to parent message in thread |
| Q                         | quit                                 | save changes to mailbox and quit |
| R                         | recall-message                       | recall a postponed message |
| S                         | skip-quoted                          | skip beyond quoted text |
| T                         | toggle-quoted                        | toggle display of quoted text |
| V                         | show-version                         | show the NeoMutt version number and date |
| W                         | clear-flag                           | clear a status flag from a message |
| Y                         | edit-label                           | add, change, or delete a message's label |
| \                         | search-toggle                        | toggle search pattern coloring |
| ^                         | top                                  | jump to the top of the message |
| a                         | create-alias                         | create an alias from a message sender |
| b                         | bounce-message                       | remail a message to another user |
| c                         | change-folder                        | open a different folder |
| d                         | delete-message                       | delete the current entry |
| e                         | edit-or-view-raw-message             | edit the raw message if the mailbox is not read-only, otherwise view it |
| f                         | forward-message                      | forward a message with comments |
| g                         | top                                  | jump to the top of the message |
| h                         | display-toggle-weed                  | display message and toggle header weeding |
| i                         | exit                                 | exit this menu |
| j                         | next-line                            | scroll down one line |
| k                         | previous-line                        | scroll up one line |
| m                         | mail                                 | compose a new mail message |
| n                         | search-next                          | search for next match |
| o                         | sort-mailbox                         | sort messages |
| p                         | print-message                        | print the current entry |
| r                         | reply                                | reply to a message |
| s                         | save-message                         | save message/attachment to a mailbox/file |
| t                         | tag-message                          | tag the current entry |
| u                         | undelete-message                     | undelete the current entry |
| v                         | view-attachments                     | show MIME attachments |
| w                         | set-flag                             | set a status flag on a message |
| x                         | exit                                 | exit this menu |
| y                         | M \<exit>\<change-folder>?             | show incoming mailboxes list |
| \|                         | pipe-message                         | pipe message/attachment to a shell command |
| \<Down>                    | next-line                            | scroll down one line |
| \<Up>                      | previous-line                        | scroll up one line |
| \<Left>                    | previous-undeleted                   | move to the previous undeleted message |
| \<Right>                   | next-undeleted                       | move to the next undeleted message |
| \<Home>                    | top                                  | jump to the top of the message |
| \<BackSpace>               | previous-line                        | scroll up one line |
| \<F1>                      | M \<shell-escape> zcat /usr/share/... | show NeoMutt documentation |
| \<PageDown>                | next-page                            | move to the next page |
| \<PageUp>                  | previous-page                        | move to the previous page |
| \<End>                     | bottom                               | jump to the bottom of the message |

## Default Unbound Functions

| KEY-BIND                  | MUTT FUNCTION                        | DESCRIPTION |
| ---|---|--- |
| -- | change-newsgroup                                               | open a different newsgroup |
| -- | change-vfolder                                                 | open a different virtual folder |
| -- | check-stats                                                    | calculate message statistics for all mailboxes |
| -- | compose-to-sender                                              | compose new message to the current message sender |
| -- | decrypt-copy                                                   | make decrypted copy |
| -- | decrypt-save                                                   | make decrypted copy and delete |
| -- | edit                                                           | edit the raw message (edit and edit-raw-message are synonyms) |
| -- | edit-raw-message                                               | edit the raw message (edit and edit-raw-message are synonyms) |
| -- | entire-thread                                                  | read entire thread of the current message |
| -- | extract-keys                                                   | extract supported public keys |
| -- | followup-message                                               | followup to newsgroup |
| -- | forward-to-group                                               | forward to newsgroup |
| -- | group-chat-reply                                               | reply to all recipients preserving To/Cc |
| -- | group-reply                                                    | reply to all recipients |
| -- | half-down                                                      | scroll down 1/2 page |
| -- | half-up                                                        | scroll up 1/2 page |
| -- | imap-fetch-mail                                                | force retrieval of mail from IMAP server |
| -- | imap-logout-all                                                | logout from all IMAP servers |
| -- | modify-labels                                                  | modify (notmuch/imap) tags |
| -- | modify-labels-then-hide                                        | modify (notmuch/imap) tags and then hide message |
| -- | modify-tags                                                    | modify (notmuch/imap) tags |
| -- | modify-tags-then-hide                                          | modify (notmuch/imap) tags and then hide message |
| -- | next-new                                                       | jump to the next new message |
| -- | next-thread                                                    | jump to the next thread |
| -- | next-unread                                                    | jump to the next unread message |
| -- | next-unread-mailbox                                            | open next mailbox with new mail |
| -- | post-message                                                   | post message to newsgroup |
| -- | previous-new                                                   | jump to the previous new message |
| -- | previous-new-then-unread                                       | jump to the previous new or unread message |
| -- | previous-thread                                                | jump to previous thread |
| -- | previous-unread                                                | jump to the previous unread message |
| -- | purge-message                                                  | delete the current entry, bypassing the trash folder |
| -- | purge-thread                                                   | delete the current thread, bypassing the trash folder |
| -- | quasi-delete                                                   | delete from NeoMutt, don't touch on disk |
| -- | reconstruct-thread                                             | reconstruct thread containing current message |
| -- | root-message                                                   | jump to root message in thread |
| -- | search-opposite                                                | search for next match in opposite direction |
| -- | sidebar-first                                                  | move the highlight to the first mailbox |
| -- | sidebar-last                                                   | move the highlight to the last mailbox |
| -- | sidebar-page-down                                              | scroll the sidebar down 1 page |
| -- | sidebar-page-up                                                | scroll the sidebar up 1 page |
| -- | sidebar-toggle-virtual                                         | toggle between mailboxes and virtual mailboxes |
| -- | vfolder-from-query                                             | generate virtual folder from query |
| -- | vfolder-from-query-readonly                                    | generate a read-only virtual folder from query |
| -- | view-raw-message                                               | show the raw message |
| -- | what-key                                                       | display the keycode for a key press |
