---
title: From Root-Me to SaaS builder - My journey into code, security and autonomy
description: At 16, I wanted to break into systems. Today, I build them. This is how a hacker mindset, a frustrating job, and a Python minesweeper led me to be self-employed.
date: 2025-05-03
image: https://images.pexels.com/photos/7988745/pexels-photo-7988745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
minRead: 5
author:
  name: Valentin Chmara
  avatar:
    src: https://valentinchmara.com/avatar.png
    alt: Valentin Chmara
---

## It all started with Root-Me

Back in December 2014, I completed my first CTF challenge on [Root-Me.org](https://www.root-me.org/). I was 16, curious, and fascinated by the idea of being a “hacker”. I didn’t even know what software engineering really was, just that I wanted to **understand how systems worked... and how to break them**.

But it wasn’t just fun. Root-Me lit a fire in me. It taught me logic, security, and how to think like a machine. Even now, **security is baked into how I design every system**, because I started by trying to break them first.

## My first project: DEMISN

During my final year of high school, I chose a specialty called **ISN (Informatique et Sciences du Numérique)**. That’s where I built my first “real” project: **Demisn**, a Python & Tkinter version of Minesweeper.

Was it messy? Absolutely.<br>
Did it work? Somehow.<br>
Did it teach me a ton? For sure.<br>

The code is chaotic by today’s standards, but it’s a beautiful snapshot of how every dev starts: by building something that kinda-sorta works and being ridiculously proud of it. (you can found the code in the [notes](#notes) of this post.)

## Engineering school & reality check

I passed the entry exams and joined **ISTY**, an engineering school in France. After 2 years of general studies, I picked **mechatronics** because I was curious about both software and hardware.

I landed an apprenticeship at **Stellantis**, a major automotive group. On paper, it sounded like a dream: safety engineering, big teams, real-world impact.

But I quickly learned something else: **I hated it.**

Too many meetings.<br>
Too little action.<br>
Everything moved at the speed of paperwork.<br>

But something good came out of it.

## My first "automation win"

One day, I saw a tedious process being handled by an external company. It took **weeks**. I asked if I could try automating it.

A few days later, I had a working script.

Suddenly, what took **weeks and multiple people** became a **5-minute internal task**. It saved time, saved money, and gave me a taste of what I really loved:

 > **Building useful tools that make life easier.**

## From employee to indie

After that, I knew I didn’t want a traditional career. I wanted **freedom, speed, and ownership**.

I didn’t leap into freelancing with a masterplan. It was messy. Emotional. Unstructured. But it was the beginning of something real.

Back then, I had two things:  
- **Some savings** from my apprenticeship (even if I didn’t enjoy the work, I still believe apprenticeships are the best way to start a career)  
- **A lucky investment** in $MATIC that turned into a x30 profit - unrealized it peaked at x60

At first, I naively thought I could become a trader. I genuinely believed I could make a living predicting the price of Bitcoin. I even open-sourced a project on [GitLab](https://gitlab.com/vachmara/Bitcoin-price-RNN) using an RNN to forecast BTC prices. Spoiler: it didn’t work out.

Then came the NFT wave. I started building my first dApps for minting NFTs. But I didn’t know how to price my work, how to write a proper quotation, how to **sell** or **convert**. I fell into all the classic traps:
- Working for free on vague promises
- Clients who ghosted after delivery
- Over-engineering solutions for people who didn’t need them

At the same time, I tried launching a proptech startup. One of my biggest (and most expensive) mistakes?  
> Buying a domain name worth **$8,000 in crypto**… for a project that didn’t even exist yet.

Looking back, I’m grateful for all of it. These failures weren’t signs to stop, they were exactly what I needed to grow. They taught me how to:
- Say no
- Qualify clients
- Build only what matters
- Charge what I’m worth

Today, the contrast is night and day. I can go from **idea to working MVP in just a few days**. I’ve built a system, refined my processes, and learned how to stay lean and focused. Most importantly, I’m building for the long term with autonomy, speed, and intention.

## What’s Next

Through this blog, I’ll share:
- My wins and failures
- What I build and how I build it
- My learnings from freelancing, entrepreneurship, and solo product development

Thanks for reading and if any of this resonates, feel free to reach out or follow the journey.


### Notes

You want to see the code of my first project? Here it is:

Please, don't judge me too hard!!

```python
"""
Programme principal du code du démineur. 
    Tous droits réservés Demisn © 2016

menubar.py, ainsi que score.py sont essentiels au bon fonctionnement du programme.
"""
try:
    # Python2
    #!/usr/bin/python2.7
    # -*-coding:Latin-1 -*
    from Tkinter import *
    from tkMessageBox import *
except ImportError:
    #!/usr/bin/python3.5
    # -*-coding:Latin-1 -*
    # Python3
    from tkinter import *
    from tkinter.messagebox import *


import random,math,string
from score import *
from time import *
from menubar import *
from os import path



def create_image():
    """Défini les images nécéssaire"""
    global picBomb,picFlag
    picBomb=PhotoImage(file="img/bomb.gif")
    picFlag=PhotoImage(file="img/flag1.gif")
    

def damier():
    """Crée un damier lors du lancement du jeu"""
    a=0
    
    for i in range(c):
        for j in range(h):
            labels.append(Label(can, text=v,bd=1,justify=CENTER,relief=SUNKEN,font=("Helvetica", 9),image="",width=1,height=1,padx=9,pady=5))
            labels[a].grid(column=i,row=j)
            
            b.append(Button(can,text="",image="",padx=8,pady=1)) 
            b[a].grid(column=i,row=j)
            b[a].bind("<Button-3>",lambda i,ref=a: afficheFlag(ref))
            b[a].bind("<Button-1>",lambda i,ref=a: click(ref))
            b[a].config(relief=RAISED)
            a+=1
    bombes()
    
            
def bombes(charger=False):
    """Si c'est une partie chargée cette fonction positionne les bombes à leurs emplacements sinon elle crée de nouvelles bombes"""
    create_image()
    global presentBomb
    
    if charger:
        for i in presentBomb:
            labels[i].config(text=v,image=picBomb,relief=GROOVE,bd=3,width=0,height=0)
            chiffres(i)
    else: 
        presentBomb=[]
        for i in range(nbBombs):
            a=random.randint(0,maxi)
            while a in presentBomb:
                a=random.randint(0,maxi)
            labels[a].config(text=v,image=picBomb,relief=GROOVE,bd=3,width=0,height=0)  
            presentBomb.append(a)
            chiffres(a)
    
    
def chiffres(ref):
    """Positionne les chiffres autour des bombes"""

    if ref in top:
        for i in [ref-h,ref-(h-1),ref+h,ref+(h+1),ref+1]:  #On parcours les positions à côter de la bombe pour mettre si possible les bombes à proximités pour le HAUT
            if i>=0 and i<=maxi:
                if labels[i].cget("text")==" ":
                    v="1"
                elif labels[i].cget("text") in maxBomb:
                    v=str(int(labels[i].cget("text"))+1)
                labels[i].config(text=v)
    elif ref in down:
        for i in [ref-h,ref-(h+1),ref+h,ref+(h-1),ref-1]:  #On parcours les positions à côter de la bombe pour mettre si possible les bombes à proximités pour le BAS
            if i>=0 and i<=maxi:
                if labels[i].cget("text")==" ":
                    v="1"
                elif labels[i].cget("text") in maxBomb:
                    v=str(int(labels[i].cget("text"))+1)
                labels[i].config(text=v)
    else:
        for i in [ref-h,ref-(h+1),ref-(h-1),ref+h,ref+(h-1),ref+(h+1),ref-1,ref+1]:  #On parcours les positions à côter de la bombe pour mettre si possible les bombes à proximités pour les autres
            if i>=0 and i<=maxi:
                if labels[i].cget("text")==" ":
                    v="1"
                elif labels[i].cget("text") in maxBomb:
                    v=str(int(labels[i].cget("text"))+1)
                labels[i].config(text=v)

def click(ref):
    """Vérifie les conditions de jeu, retourne la fonction perdu si c'est la position d'une bombe sinon on appelle la fonction 'Explore'"""
    global clique,partie_terminée
    if clique==0:
        temps()
        partie_terminée=False
    clique+=1
    b[ref].grid_forget()
    verifGagne()
    if labels[ref].cget("image")!="":
        perdu(ref)
    if labels[ref].cget("image")=="" and labels[ref].cget("text")==v:
        explore(ref)
        

    
def explore(ref):
    """Contient toutes les fonctions qui doivent être appellées quand on clique sur un bouton"""
    enlever_ranger(ref)
    enlever_colonne(ref,True)
    posForget.append(ref)
    verif()
    verifGagne()
    


def verifGagne():
    """Vérifie si la partie est gagnée"""
    global partie_terminée
    posFlag,posBou=[],[]
    nbBou=0
    
    for i in range(c*h):
        if labels[i].cget("image")!="" and b[i].grid_info()!={}:
            posBou.append(i)
        if b[i].cget("image")!="" and b[i].grid_info()!={}:
            posFlag.append(i)
        if labels[i].cget("image")=="" and b[i].grid_info()=={}:
            nbBou+=1

            
    posFlag.sort()
    posBou.sort()
    presentBomb.sort()
    
    if posFlag==presentBomb and posBou==presentBomb and nbBou==(c*h)-nbBombs:

        partie_terminée=True
        time.after_cancel(timafter)

        if pseudo!="":
            menubar.delete_save(str(pseudo))
            showwarning('Attention', "Votre sauvegarde est supprimée, vous avez terminé votre partie !")
            
        
        showinfo('Bien joué', "Vous avez réussi à ne pas exploser !\nBravo")
        
        for i in range(c*h):
            b[i].unbind("<Button-3>")
            b[i].unbind("<Button-1>")
            b[i].config(state='disabled')
            
        if connecter():
            
            if askokcancel('Score','Voulez-vous enregistrer votre score ?'):

                def on_button():
                    niveau=0
                    pseudo=entree.get()
                    chiffre=0
                    
                    if c==9 and nbBombs==10:
                        niveau=1
                    elif c==16 and nbBombs==40:
                        niveau=2
                    elif c==30 and nbBombs==99:
                        niveau=3
                    else:
                        showerror('Erreur', "C'est une partie personnalisée votre score ne peut être pris en compte")
                        t.destroy()
                        
                    bool=False
                    for i in pseudo:
                        if i not in string.printable[0:62]:
                            bool=True
                        if i in string.printable[0:10]:
                            chiffre+=1
                    if chiffre==len(pseudo):
                        bool=True
                        
                    if bool:
                        showerror('Erreur', 'Veuillez choisir un autre pseudo')
                        entree.delete(0,len(pseudo))
                    else:
                        ajoute_score(pseudo, sec, niveau)
                        showinfo('Sauvegarde', 'Votre score a été enregistré '+str(pseudo)+' !')
                        t.destroy()
                t=Toplevel()
                t.grab_set()
                t.title('Enregistre ton score')
                t.iconbitmap('img/bomb.ico')
                t.resizable(width=False, height=False)
                l = LabelFrame(t, text="Votre pseudo :", padx=12, pady=12)
                l.pack(fill="both", expand="yes")
                l.pack(side=LEFT)
                
                
                entree = Entry(l)
                entree.pack()
                bou=Button(t,text='Annuler',command=t.destroy)
                bou.pack(side=BOTTOM)
                bou=Button(t,text='Enregistre ton score !',command=on_button)
                bou.pack(side=BOTTOM)
                entree.pack()
                t.mainloop()
                
        else:
            showwarning('Erreur', "Vous n'êtes pas connecté à internet")
        

                
            
        
    

def afficheFlag(ref):
    """Afiiche ou enleve le drapeau lorsque que l'on fait un clic droit"""
    if b[ref].cget("image")=="":
        b[ref].config(image=picFlag)
        verifGagne()
        compteur_bombe()
    else:
        b[ref].config(image="")
        compteur_bombe(False)
        
def verif(bool=False):
    """Permet de verifier si toutes les cases ont bien été enlevées"""
    for ref in range(c*h):

        if ref in top and b[ref].grid_info()=={} and labels[ref].cget("text")==v and labels[ref].cget("image")=="":

            for i in [ref-h,ref-(h-1),ref+h,ref+(h+1),ref+1]:
                
                if i>=0 and i<=maxi and labels[i].cget("text") in maxBomb and labels[i].cget("image")=="":
                    b[i].grid_forget()
                elif i>=0 and i<=maxi and labels[i].cget("text")==v and labels[i].cget("image")=="" and bool and i not in posForget:
                    b[i].grid_forget()
                    enlever_ranger(ref)
                    enlever_colonne(i,True)
                    posForget.append(i)
                    verif()
                
                    

        elif ref in down and b[ref].grid_info()=={} and labels[ref].cget("text")==v and labels[ref].cget("image")=="":

            for i in [ref-h,ref-(h+1),ref+h,ref+(h-1),ref-1]:

                if i>=0 and i<=maxi and labels[i].cget("text") in maxBomb and labels[i].cget("image")=="" :
                    b[i].grid_forget()
                elif i>=0 and i<=maxi and labels[i].cget("text")==v and labels[i].cget("image")=="" and bool and i not in posForget:
                    b[i].grid_forget()
                    enlever_ranger(ref)
                    enlever_colonne(i,True)
                    posForget.append(i)
                    verif()
                
                
        elif b[ref].grid_info()=={} and labels[ref].cget("text")==v and labels[ref].cget("image")=="":

            for i in [ref-h,ref-(h+1),ref-(h-1),ref+h,ref+(h-1),ref+(h+1),ref-1,ref+1]:

                if i>=0 and i<=maxi and labels[i].cget("text") in maxBomb and labels[i].cget("image")=="":
                    b[i].grid_forget()
                elif i>=0 and i<=maxi and labels[i].cget("text")==v and labels[i].cget("image")=="" and bool and i not in posForget:
                    b[i].grid_forget()
                    enlever_ranger(ref)
                    enlever_colonne(i,True)
                    posForget.append(i)
                    verif()
               
                 
    
def enlever_ranger(pos):
    """Permet d'enlever les boutons d'une rangée de droite et de gauche jusqu'à ce qu'on rencontre un chiffe dans un label"""
    left=pos-h
    right=pos+h
  
    while left>=0 and labels[left].cget("text")==" ":
        if b[left].grid_info()!={}:
            b[left].grid_forget()
         
            enlever_colonne(left,True)
            
        
        left-=h
        
    while right<=maxi and labels[right].cget("text")==" ":
        if b[right].grid_info()!={}:
            b[right].grid_forget()
            enlever_colonne(right,True)
            
        
        
        right+=h

def enlever_colonne(pos, bool=False):
    """Permet d'enlever les boutons d'une colonne du bas et du haut jusqu'à ce qu'on rencontre un chiffre dans un label"""
    d=pos-1
    up=pos+1
    

    while d not in down and labels[d].cget("text")==" " and labels[d].cget("image")=="" and d>=0 and d<maxi:
        if b[d].grid_info()!={}:
            b[d].grid_forget()

            if bool:
                enlever_ranger(d)
        
        d-=1
        

    while up not in top and labels[up].cget("text")==" " and labels[up].cget("image")=="" and up>=0 and up<maxi:
        
        if b[up].grid_info()!={}:
            b[up].grid_forget()
            
            if bool:
                enlever_ranger(up)
        
        up+=1

    
def perdu(ref):
    """Fonction intervient lorsque l'on perd"""
    global partie_terminée
    partie_terminée=True
	
    labels[ref].config(bg="red")
    timer(True)
    if pseudo!="":
        menubar.delete_save(str(pseudo))
        showwarning('Attention', "Votre sauvagarde est supprimé, vous avez terminé votre partie !")
        
    for i in range(c*h):
        if i in presentBomb:  
            b[i].grid_forget()
            
        b[i].unbind("<Button-3>")
        b[i].unbind("<Button-1>")
        b[i].config(state='disabled')

    
    showinfo('Perdu', 'Vous avez fait exploser la mine')

def supprimer():
    """Supprime les infos de la partie précédente."""
    global b,labels
    for i in range(len(b)):
        b[i].grid_remove()
        b[i].destroy()
        labels[i].grid_remove()
        labels[i].destroy()
    b=[]
    labels=[]


def nouveau(charger=False,bombe=[],pos=[],bouton=[],flag=[],name=""):
    
    """ Permet de creer un nouveau damier avec de nouvelle bombes, de plus si le paramètre charger est True
    alors on charge la sauvegarde grâce à la fonction charge() de menubar.py"""
    global presentBomb,posForget,sec,compteur_bombes,pseudo,partie_terminée,clique,top,down

    partie_terminée=True
    clique = 0
    pseudo=name
    compteur_bombes=nbBombs
    compteur['text']='Bombes restantes : '+str(compteur_bombes)
    
    time.after_cancel(timafter)
    
    
    supprimer()
    posForget=[]
    presentBomb=[]
    
    if charger:
        presentBomb=bombe
        posForget=pos
    else:
        sec=0
    time['text'] = 'Temps : ' + strftime('%M : %S', gmtime(sec))
        
    can.pack_forget()
    
    top=[]
    down=[]
    top.append(0)
    for i in range(h):
        top.append((i+1)*h)
        down.append(((i+1)*h)-1)
    down.append(c*h)
    
    a=0
    for i in range(c):
        for j in range(h):
            labels.append(Label(can, text=v,bd=1,relief=SUNKEN,font=("Helvetica", 9),width=1,height=1,justify=CENTER,padx=9,pady=5))
            labels[a].grid(column=i,row=j)
            b.append(Button(can,text="",image="",padx=8,pady=1))
            b[a].grid(column=i,row=j)
            b[a].bind("<Button-3>",lambda i,ref=a: afficheFlag(ref))
            b[a].bind("<Button-1>",lambda i,ref=a: click(ref))
            b[a].config(text="",image="")
            a+=1
            
    if charger:
        
        for i in bouton:
            b[i].grid_forget()
        bombes(True)
    else:
        bombes()

    
    can.pack(side=TOP,expand=True)
    if charger:
        for i in flag:
            
            afficheFlag(i)
        timer()
        partie_terminée=False
        clique=1
    
def recup_info_partie():
    """Récupère les informations de la partie en cours """

    b_forget=[]
    flag=[]
    taille_interface=c
    for i in range(c*h):
        if b[i].grid_info()=={}:
            b_forget.append(i)
        if b[i].cget("image")!="":
            flag.append(i)
    return presentBomb,posForget,b_forget,flag,taille_interface,sec

def option(nbmines, taille_interface,bool=True,s=0):
    """ Permet de définir les options définis par la commande option du menu. """

    global c,maxi,nbBombs,top,down,h,sec

    sec=s
    c = taille_interface
    maxi=(c*c)-1
    h=c
    if taille_interface==30:
        h=16
        maxi=(c*16)-1
        
    nbBombs = int(nbmines)
    

    if bool:
        nouveau()

def timer(bool=False):
    """Arrête ou démarre le timer en fonction de la variable bool"""
    global timafter
    if bool:
        time.after_cancel(timafter)
    else:
        timafter = time.after(1000, temps)

def temps():
    """Affiche le temps dans la fenètre principale"""
    global sec,timafter
    sec += 1
    time['text'] = 'Temps : ' + strftime('%M : %S', gmtime(sec))
    
    timafter = time.after(1000, temps)

def compteur_bombe(bool=True):
    """Affiche dans la fenètre principale le nombres de bombes encore à trouver"""
    global compteur_bombes
    if bool:
            compteur_bombes-=1
    elif bool==False and compteur_bombes+1<=nbBombs:
        compteur_bombes+=1
    compteur['text']='Bombes restantes : '+str(compteur_bombes)
    
    if compteur_bombes<=0:
        compteur['text']='Bombes restantes : 0'

def pseudo_partie():
    """Retourne la valeur pseudo pour menubar.py"""	
    return pseudo
    

def etat_partie():
    """Retourne l'état de la partie, 
    terminée = True 
    non terminée = False 
    fonction créée pour menubar.py"""
    return partie_terminée
    
######Programme ######



c=9 
nbBombs=10 
w=200
h=200          

compteur_bombes=nbBombs

h=c
posForget=[]
maxBomb=["1","2","3","4","5","6","7","8"]
presentBomb=[]
maxi=(c*h)-1
labels=[]
b = []
v = " "



pseudo=""
partie_terminée=True
clique=0

top=[]
down=[]
top.append(0)
for i in range(h):
    top.append((i+1)*c)
    down.append(((i+1)*c)-1)
down.append(c*h)


sec=0

fen = Tk()
menubar = MenuBar(fen,nouveau,recup_info_partie,option,timer,etat_partie,pseudo_partie)
fen.title('Démineur')
fen.resizable(width=False, height=False)
fen.config(menu=menubar)

frame= LabelFrame(fen,bd=2)
frame.pack(side=TOP,fill=X)
can = Canvas(fen, width=w, height=h, background='white')

time = Label(frame, fg='Black')
time.pack(side=LEFT)
time['text'] = 'Temps : ' + strftime('%M : %S', gmtime(sec))
timafter = time.after(1000, temps)
time.after_cancel(timafter)
compteur = Label(frame, fg='Black')
compteur.pack(side=RIGHT)
compteur['text']='Bombes restantes : '+str(compteur_bombes)

create_image()
damier()


fen.iconbitmap('img/bomb.ico')

         
can.pack(side=BOTTOM,expand=True)

fen.mainloop()
```
