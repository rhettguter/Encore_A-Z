# Phase Overviews

*A by-phase, by-role orientation reference. For each of the eight production phases, each active role gets a short paragraph answering what the phase is for, what the role's work in it looks like, and who they collaborate with. This MD is one of two sources behind the combined `Portal Content.xlsx` workbook (the other is [[Event Prep Notes]]) — edit here, then run the converter to refresh the workbook.*

> [!info] How to edit
> Each **phase** is an H2 (`## Phase Name`). Each **role** under a phase is an H3 (`### Role Name`). Below each role, the **phase overview** is one or more paragraphs of plain prose. Wikilinks are fine — the converter strips the brackets when writing the xlsx cell.

> [!note] Regenerating the xlsx
> The combined converter lives at `_Vault Guide/Portal/Scripts/portal-content-md-to-xlsx.py`. Run it with `python3 "_Vault Guide/Portal/Scripts/portal-content-md-to-xlsx.py"` from the vault root, and it will rewrite `_Vault Guide/Portal/Generated/Portal Content.xlsx` (two tabs: Phase Overviews + Event Prep Notes). Or ask Claude to regenerate it. See [[Portal Architecture]] for the full system map.

> [!tip] Source of truth
> Drawn from [[1 - Inception]] through [[8 - Post-Production]] and the standardized role × phase content. Each entry is intentionally short — this is the "what is this phase and where do I sit in the arc" view, not the task list. For tasks, see the role's own doc; for events, see [[Event Prep Notes]].

## Inception

*The foundational phase — show selection, rights, mission, budget, calendar, and the first wave of hires. Less visible than tech or opening night, but every later decision ripples out from here. Begin with the end in mind.*

### Producer

Inception is when the show's reason for being comes into focus. The Producer's work in this phase is to choose a title that serves Encore's educational mission, secure the rights, articulate the production's mission statement, and shape the budget framework the rest of the season will rest on. These decisions establish the foundation the entire production will stand on. Close collaborators in this phase are the Executive Director, the Artistic Director, and the Production Manager.

### Production Manager

In Inception, the Production Manager builds the chassis the production will ride on: the master calendar, the budget framework, and the first wave of hires. Working backward from opening night, the PM identifies fixed dates and milestones and brings on the Director and Stage Manager early so the rest of the team can be assembled around them. The PM is in close conversation with the Producer, the Executive Director, and the Director throughout this phase.

### Technical Director

Inception is light for the Technical Director, but it is where the show choice gets pressure-tested against what is actually buildable. A first read of the script, an honest look at the technical demands, and an early flag on any load-bearing risks — a flying effect, a turntable, an unusual rigging need — protect the production before the budget is locked. Conversations are with the Production Manager and, once the Director is on board, with them.

### Director

Inception is when the Director's vision begins to take shape as a real production. The work is to come in with a clear artistic concept, identify the educational opportunities this show will deliver, and start thinking about which collaborators (Music Director, Choreographer, designers) belong on the team. The Director reads the script with three lenses at once — story, ensemble, and educational arc — and works closely with the Producer and the Production Manager.

### Stage Manager

Inception is light for the Stage Manager, but early involvement pays off across the whole production. The work here is to read the script, get oriented to Encore's systems, set up the production's Google Drive structure, and begin shaping the templates that will live with the show through closing night. The Stage Manager stays close to the Production Manager (calendar, Drive, templates) and the Director (vision).

## Pre-Production

*The architectural blueprint phase — where abstract vision becomes concrete design. Every designer collaborates with the Director to build a design package; those packages become the foundation of the Stage Manager's Show Bible. Communication, integration, and version control are the watchwords.*

### Producer

In Pre-Production, the Producer protects the vision from drift. The work is to stay close enough to know if budget reality is forcing creative compromises, but far enough away that the Director and Production Manager can run the room. The Producer stewards both mission and money — keeping educational and artistic goals visible while design packages get built — checking in primarily with the Production Manager and the Director.

### Production Manager

In Pre-Production, the Production Manager becomes the connective tissue between every department. The work is to run the Onboarding Meeting, schedule and chair the bi-weekly production meetings, enforce design package deadlines, and watch for ripple effects when one designer's choice forces another's. The PM talks to the Director constantly, the Stage Manager daily, and each designer at least weekly.

### Director

In Pre-Production, the Director serves as the creative catalyst for every department. The work is to articulate the vision clearly enough that each designer can build a coherent package around it, hold integration meetings so those packages talk to one another, and approve final designs without becoming a bottleneck. The Director spends dedicated one-on-one time with each designer, and loops in the Production Manager whenever a design choice carries budget or timeline implications.

### Music Supervisor Director

In Pre-Production, the Music Director prepares the show's musical foundation before a single rehearsal. The work is to build (or learn) the vocal arrangements deeply, prepare audition material and tracks, plan the rehearsal sequence for music, and coordinate microphone needs with the Sound Designer. Conversations are with the Director (vision), the Sound Designer (mic plot and balance), and the Choreographer (combined numbers).

### Choreographer

In Pre-Production, the Choreographer imagines the production in motion. The work is to sketch a choreographic concept by number, plan the dance audition combination, anticipate the skill-development needs of the likely audition pool, and confirm what rehearsal floor and special equipment will be required. The Choreographer collaborates with the Director (vision), the Music Director (combined numbers), and the Production Manager (rehearsal space).

### Stage Manager

In Pre-Production, the Show Bible is born. As each designer delivers a design package — floor plans, costume plots, prop lists, cue notes — the Stage Manager organizes it all into the document that will live with the production through closing night. The SM catalogs what is known and listens for what is not yet figured out, staying tight with the Production Manager and the Director and checking in with each designer as their package develops.

### Technical Director

In Pre-Production, the build plan takes shape. The Technical Director reviews the set design as it evolves and translates it into a buildable, budgetable, scheduleable construction plan — flagging impossibilities early, while it is still cheaper to argue with a drawing than with a finished platform. The TD's conversations are with the Set Designer (constantly), the Production Manager (resources), and the Set Builder (labor).

### Set Designer

In Pre-Production, the Set Designer turns the Director's vision into a buildable world. The work is to develop a complete design package — concept statement, ground plan, elevations, color palette, renderings, dressing list, transition plan, materials list — that works inside the venue, the budget, and the blocking the Director has in mind. The Set Designer stays in lockstep with the Director (vision), the Technical Director (buildability), and the Light Designer (where instruments live in the set).

### Costume Designer

In Pre-Production, every character gets a wardrobe and every actor a fitting plan. The Costume Designer builds a complete design package — costume plot, character renderings, breakdown sheets, palette, quick-change list, sourcing plan, fitting schedule — while imagining the practical reality of putting it all on young performers. Collaborators are the Director (vision), the Set Designer (palette coordination), and the Stage Manager (fitting logistics).

### Light Designer

In Pre-Production, the production's emotional architecture starts to take shape in light. The Light Designer delivers a design package — light plot, color choices, special effects, cue list breakdown, equipment needs, mood references — that the Director's vision can live inside. Conversations are with the Director (vision), the Set Designer (where the lights go and what they hit), and the Sound Designer (cues that fire together).

### Sound Designer

In Pre-Production, the production's sonic world gets built. The Sound Designer develops a design package — concept statement, sound cue list, sample tracks, mic plot, equipment needs, speaker placement plan — that supports the script's storytelling and the musical direction. Close collaborators are the Music Director (musical integration), the Director (vision), and the Light Designer (cue coordination).

### Prop Designer

In Pre-Production, the prop list turns from a column in the script into a sourcing, building, and tracking plan. The Prop Designer develops a design package — props list, sourcing plan, practical-prop notes, rehearsal-prop plan, tracking document, storage plan — and identifies the items that will be hardest to land. Closest collaborators are the Director (vision), the Set Designer (set dressing overlap), and the Stage Manager (tracking system).

### Marketing

In Pre-Production, the marketing runway gets lit. The Marketing team locks in audition advertising, plans the season-launch push, builds the show's visual identity in coordination with the design team, and aligns the campaign timeline with the production calendar. Conversations are with the Production Manager (calendar), the Director (positioning), and the Set and Costume Designers (visual assets).

## Casting

*The phase where the cast that will live inside the show is assembled. Less about evaluation, more about matching young artists to the educational arc the production wants to deliver. Audition logistics matter, but the heart of this phase is choosing who gets to grow on what role.*

### Director

Casting is when the Director chooses who will live inside the vision. The work is to run auditions and callbacks with a clear sense of the educational arc each role offers, balance ensemble against principals, and remember that "right for the role" includes "right for the room." The cast list is also a curriculum. The Director works closely with the Music Director and Choreographer throughout this stretch, and loops in the Producer when casting decisions have program-wide implications.

### Music Supervisor Director

In Casting, the Music Director assesses vocal ability against the show's musical demands and the team's willingness to teach. The work is to prepare audition material, design a callback that surfaces what actually needs to be heard, and stay open — a young artist's first audition isn't their ceiling. Closest partners are the Director (overall vision) and the Choreographer (callback pairing).

### Choreographer

In Casting, the Choreographer reads movement potential. The work is to prepare a dance combination that reveals what needs to be seen, run it at a pace and complexity appropriate to the production, and stay alert to performers who pick up choreography faster than they audition vocally. The Choreographer makes the cast list with the Director and the Music Director.

### Stage Manager

Casting is where the Stage Manager's organizational systems get their first stress test. The work includes building the audition form, setting up the schedule, managing sign-ins, distributing callback materials with enough lead time, and tracking every conflict the cast and parents disclose. The creative team needs to focus on creating, so the Stage Manager makes everything else invisible — coordinating logistics with the Production Manager and process with the Director.

### Production Manager

In Casting, the Production Manager makes the room the creative team needs. The work is to book the audition space, schedule the days, brief volunteers, prep materials, communicate audition dates through marketing, and ensure the post-audition decision process has the time and quiet it requires. The PM stays tight with the Stage Manager and the Director, and loops in Marketing about audition advertising.

### Producer

In Casting, the Producer stewards Encore's educational mission while supporting the creative team's decisions. The work is to sit in on the casting meeting and post-audition deliberations, raise program-wide implications (Junior Stages ladder, Aspire, Show with a Pro casting opportunities), and ensure inclusion goals stay visible without overriding artistic judgment. The Producer talks to the Director, Music Director, Choreographer, and Production Manager.

## Rehearsals

*The phase where the play actually gets built — table work, learning material, staging, blocking, choreography, and runs. The room should be inquisitive, healthy, and well-structured; the cast is learning and creating simultaneously. Success isn't about the end result, it's about what you learn along the way.*

### Director

In Rehearsals, the play gets built. The Director leads table work, makes staging choices, develops characters with young artists, and shepherds the show from read-through to designer run. Every blocking choice is also a learning moment. The Director works closely with the Music Director and Choreographer daily, the Stage Manager constantly, and the designers through the Stage Manager's rehearsal reports.

### Music Supervisor Director

In Rehearsals, music moves from notes on a page to ownership in the cast. The Music Director runs vocal calls, builds harmony, drills challenging numbers, and coordinates with the Choreographer when music and movement overlap. Pedagogy and performance are the same thing. The MD partners with the Director (story integration) and the Choreographer (combined numbers).

### Choreographer

In Rehearsals, choreography gets taught, learned, and made the cast's own. The Choreographer builds movement that serves the story and the bodies in the room, allows time for the cast to find ownership, and revises when blocking forces it. Every step is an acting choice. Conversations are with the Director (story) and the Music Director (numbers).

### Stage Manager

In Rehearsals, the Stage Manager becomes the central nervous system of the production. The work is to take blocking, write rehearsal reports daily, run the room with quiet authority, track conflicts and attendance, and feed information back to designers as discoveries surface. The SM talks to the Director and creatives in the room, designers through reports, and the Production Manager at production meetings.

### Assistant Stage Manager

In Rehearsals, the Assistant Stage Manager learns the show by doing the work alongside the Stage Manager. The work is to help run rehearsals, prep the room, track props and costumes as they enter rehearsal, take notes, and support the cast with logistics. Every system the SM uses is one the ASM will be running in a future show. The ASM takes direction from the Stage Manager.

### Production Assistant

In Rehearsals, the Production Assistant makes the room run smoothly so the artists can focus on art. Setting up and breaking down rehearsal spaces, managing water and snacks, helping with simple tracking, and picking up whatever the Stage Manager hands them — small acts of preparation compound. The PA reports to the Stage Manager and learns from the Assistant Stage Manager.

### Production Manager

In Rehearsals, the Production Manager runs the bi-weekly production meetings that keep every department synchronized. The work is to watch the Stage Manager's daily reports for ripple effects across design, coordinate fitting schedules and rehearsal-prop deadlines, track budget burn, and remove blockers before they reach the Director. The PM is in conversation with the Stage Manager constantly, the Director weekly, and each designer at production meetings.

### Set Designer

In Rehearsals, the Set Designer's design meets the cast's actual movement. The work is to stay reachable for blocking-related questions, attend production meetings, respond promptly to rehearsal reports flagging set issues, and oversee the build alongside the Technical Director. The cast and Director will discover things no one could have predicted on paper. Conversations are with the TD (build), the Stage Manager (reports), and the Director (changes).

### Costume Designer

In Rehearsals, the costume plot becomes actual garments. The Costume Designer runs fittings, sources and builds costumes, refines quick-change plans based on what the rehearsal room reveals, and responds to rehearsal reports as new needs surface. Every fitting is also an actor-care moment for a young performer. The Costume Designer collaborates with the Stage Manager (fittings and reports), the Costume Coordinator (execution), and the Director (any changes).

### Costume Coordinator

In Rehearsals, the Costume Coordinator executes the Costume Designer's plan in the room. The work is to schedule fittings, manage rehearsal garments, organize the costume inventory, and track who needs what when. Clarity and predictability are the core deliverables. The Coordinator reports to the Costume Designer and coordinates with the Stage Manager on fitting logistics.

### Light Designer

In Rehearsals, the Light Designer's cue list firms up alongside the staging. The work is to continue refining the cue list, attend production meetings, plan for the designer run, and arrange programming time at the venue. The LD talks with the Director (special-moment intent) and the Stage Manager (cue placement context).

### Sound Designer

In Rehearsals, the Sound Designer builds the cue library and finalizes the mic plot. The work is to source and edit sound effects, finalize music tracks, refine the mic plot as the cast firms up, and prepare for load-in. Every prep day now buys time later, once tech starts. The SD coordinates with the Music Director (musical integration), the Stage Manager (cue placement), and the Director (special moments).

### Prop Designer

In Rehearsals, the prop list goes from concept to reality. The Prop Designer sources, builds, or repurposes every prop, supplies rehearsal props as soon as the cast can use them, and responds to rehearsal reports as the list shifts. Every prop has a deadline and a destination. Conversations are with the Stage Manager (rehearsal-prop needs) and the Director (any additions).

### Technical Director

In Rehearsals, the build happens in parallel with the room. The Technical Director leads the set build, coordinates with the Set Designer on changes, manages the Set Builder team, and ensures rehearsal stand-in pieces — platforms, doors, stairs — are available when the Director needs them. Every day of build is a day rehearsal benefits from. The TD talks to the Set Designer (changes), the Production Manager (schedule and budget), and the Stage Manager (rehearsal needs).

### Culture & Community Coordinator

In Rehearsals, Encore's culture shows up in the daily small things. The Culture Coordinator attends select rehearsals to capture magical moments, coordinates birthday and milestone recognitions, and supports the Director and Stage Manager in maintaining positive room culture. These small moments become the cast's memory of the show. Conversations are with the Stage Manager (room access), the Director (cast dynamics), and the Producer (culture initiatives).

### Marketing

In Rehearsals, marketing visibility ramps. Rehearsal photos and videos get scheduled, social and email campaigns run, and community partners get activated. Every week before opening matters. The Marketing team coordinates with the Production Manager (access to rehearsal), the Director (messaging), and the Box Office Manager (ticket-sales tracking).

## Pre-Tech

*The bridge phase — from rehearsal room to performance space. Anchored by the designer run, the post-run meeting, paper tech, load-in, and dry tech. The goal is to "set the table for tech" so that when the cast enters the venue, the technical world is ready for them.*

### Production Manager

In Pre-Tech, rehearsal-room artifacts become a working theater. The Production Manager finalizes the tech schedule, coordinates load-in, ensures safety prep is real, and runs the post-designer-run meeting that sets the table for tech week. The PM talks to the Technical Director (load-in), the Stage Manager (paper tech, safety), the Director (tech priorities), and every designer.

### Director

In Pre-Tech, the Director absorbs the designer run, finalizes the priorities for tech, and preps the cast for the very different rhythm ahead. The work is to watch the run with one eye on story and one on what the designers need to see, debrief honestly afterward, and trust the team to handle the technical execution. Conversations are with the Stage Manager, the Production Manager, and the designers — especially Light and Sound.

### Music Supervisor Director

In Pre-Tech, musical balance leaves the rehearsal piano and meets the room. The Music Director works with the Sound Designer on levels in the venue, runs mic checks with the cast, refines accompaniment timing for the space, and preps for tech rehearsals. The MD coordinates with the Sound Designer (balance), the Director (key musical moments), and the Stage Manager (timing).

### Stage Manager

In Pre-Tech, the Show Bible becomes a cue Bible. The Stage Manager runs paper tech, locks cue placements with Light and Sound, preps the safety walkthrough, and finalizes the booth setup. Every cue not nailed down now is one to fight for under pressure later. The SM talks to the Light Designer, Sound Designer, and Director through paper tech, and to the Production Manager about safety and schedule.

### Assistant Stage Manager

In Pre-Tech, the ASM prepares the backstage the show will run on. Walking the venue, planning the prop table and quick-change spots, attending paper tech to understand cue placement, and shadowing the SM during load-in — every system grokked now is one less thing to fight for during tech. The ASM reports to the Stage Manager.

### Technical Director

In Pre-Tech, load-in happens. The Technical Director brings the set into the venue, installs it safely, coordinates with Lighting and Sound for their own load-in needs, and triages any build issues that show up only once it is in the space. Safety check is the TD's responsibility. The TD leads the Set Builder team and coordinates with the Production Manager (logistics), the Light Designer (instrument placement), and the Sound Designer (speaker placement).

### Set Builder

Pre-Tech is load-in for the Set Builder. The work is to transport the build, install it safely in the venue, address last-minute construction issues, and stay through dry tech for any urgent fixes. The show begins the moment the set is standing. The Set Builder takes direction from the Technical Director and coordinates with the Set Designer on touch-ups.

### Set Designer

In Pre-Tech, the design walks into the venue. The Set Designer is on hand for load-in, supervises touch-up paint and dressing, addresses what looked right on paper but doesn't read in the space, and stays flexible. The Set Designer coordinates with the Technical Director (build), the Light Designer (how light hits the set), and the Production Manager (timeline).

### Costume Designer

In Pre-Tech, the dressing rooms get organized and quick changes get planned. The Costume Designer confirms all costumes are complete and labeled, sets up dressing-room layouts, designs the quick-change choreography, and finalizes the fitting schedule for any lingering adjustments. Every quick change is a tiny choreography in itself. The Costume Designer coordinates with the Stage Manager (timing) and the Director (any final adjustments).

### Costume Coordinator

In Pre-Tech, the dressing rooms become a working backstage. The Costume Coordinator organizes garments by performer and scene, sets up quick-change spots, stocks the repair kit, and runs any last-minute fittings the designer flags. Predictability is the gift given to actors. The Coordinator reports to the Costume Designer and coordinates with the Stage Manager on backstage flow.

### Light Designer

In Pre-Tech, the plot leaves paper and lives in the space. The Light Designer focuses instruments, installs gel and gobos, pre-programs cues from the designer run, and arrives at dry tech with as many states as possible already programmed. Every minute of prep is a minute saved during tech with the cast. Conversations are with the Stage Manager (cue placement at paper tech), the Director (special-moment intent), and the Technical Director (rigging and power).

### Sound Designer

In Pre-Tech, the sonic plan meets the room's acoustics. The Sound Designer installs the system, mics the space, balances levels, imports all music and effects, and confirms everything tests end-to-end before the cast arrives. The room shapes everything. The SD coordinates with the Stage Manager (cue placement), the Music Director (integration), and the Technical Director (cable runs and rigging).

### Prop Designer

In Pre-Tech, the prop table becomes a real place in the venue. The Prop Designer builds it, photographs the pre-set, organizes props by act and scene, labels clearly, and confirms every practical prop functions. The prop table is the actor's first stop every night — clarity here prevents chaos later. Conversations are with the Stage Manager (tracking, pre-set) and the Director (any final additions).

## Technical Rehearsals

*The hardest phase — every element of design and performance converges in real time. Things will go wrong; preparation, communication, and accountability are what get the production through. "Be where you said you'd be, when you said you'd be there, having done what you said you'd do."*

### Production Manager

In Tech, the Production Manager removes obstacles faster than they appear. The work is to run nightly tech debriefs, coordinate across departments, watch for safety issues, manage cast and crew fatigue, and keep the schedule honest. The PM talks to everyone: Director, Stage Manager, every designer, Technical Director, and the cast's chaperones.

### Director

In Tech, the Director watches the show find its body in the space. The work is to give clear, concise notes, trust the designers and the Stage Manager, pace the cast through the long days, and remember that tech is hard for everyone — including young artists. The Director communicates through the Stage Manager and talks to designers in person between runs.

### Music Supervisor Director

In Tech, the Music Director balances live music with the production. The work is to run mic checks each night, work with the Sound Designer on levels, support performers vocally between runs, and refine accompaniment based on what tech reveals. The MD coordinates with the Sound Designer (balance), the Director (musical intent), and the Stage Manager (timing).

### Choreographer

In Tech, choreography meets set, lights, costumes, and props for the first time. The Choreographer stays reachable for spacing adjustments forced by the venue, watches each run for movement issues that emerge under technical conditions, and refines where needed. Conversations are with the Director and the Stage Manager.

### Stage Manager

In Tech, the Stage Manager becomes the show's conductor. The work is to call cues with precision, keep the room safe, run the schedule on time, document every change, and absorb pressure from the booth without passing it to the cast. The SM talks to the Director (artistic), the Production Manager (cross-dept), the designers and ops (technical), and the cast (calm authority).

### Assistant Stage Manager

In Tech, the ASM runs backstage while the SM runs the booth. The work is to manage performer entrances and exits, oversee the prop table, coordinate quick-change support, and stay in headset communication. The booth can only do its job if the backstage works. The ASM reports to the Stage Manager.

### Production Assistant

In Tech, the small invisible jobs are the difference between a long night and a longer one. The Production Assistant hands out water and snacks, runs errands, keeps the green room organized, and picks up whatever the Stage Manager or ASM hands them. Small acts of preparation compound. The PA reports to the Stage Manager.

### Technical Director

In Tech, the set, rigging, and crew are tested in real time. The Technical Director is in the space, fixing what breaks, keeping the scene-change choreography sharp, training the crew on safe handling, and addressing any noise or movement issues. The TD coordinates with the Stage Manager (scene changes) and the Production Manager (resources).

### Set Builder

In Tech, the Set Builder is on call for set repairs. The work is to be reachable, fix what breaks, and refine any set elements that aren't working as designed. The set has to perform every night. The Set Builder takes direction from the Technical Director.

### Set Designer

In Tech, the Set Designer watches the set under the lights and addresses any final fixes. Reachable for last-minute touch-ups, coordinating with the TD on movement issues, and accepting that some discoveries only emerge once the cast is in the space — every minor fix matters. The Set Designer coordinates with the Technical Director and Stage Manager.

### Costume Designer

In Tech, every quick change gets rehearsed in real space. The Costume Designer watches each change, troubleshoots what doesn't work, addresses mobility or comfort issues, and makes small adjustments for sound (no zip noises, no rustles in still moments). The change has to be choreographed, not assumed. The Costume Designer coordinates with the Stage Manager (timing) and any wardrobe support.

### Costume Coordinator

In Tech, quick changes get rehearsed in real time. The Costume Coordinator stands by during runs, troubleshoots what doesn't work, manages the dressing rooms, and refines the tracking sheet. Every change has a clock. The Coordinator reports to the Costume Designer and coordinates with the Stage Manager on timing.

### Light Designer

In Tech, every cue gets its timing locked. The Light Designer fine-tunes intensities and focus, adjusts cue placement, solves visibility issues, and stays flexible when the Director's notes reshape a moment. The show is alive, and so is the design. Cue changes get communicated through the Stage Manager; artistic intent shifts get talked through directly with the Director.

### Sound Designer

In Tech, live sound gets balanced under real conditions. The Sound Designer sets levels for each microphone, adjusts based on actor projection, refines cue timing, and addresses feedback or failures fast. Every night will be a little different. The SD communicates through the Stage Manager during runs and directly with the Music Director about musical balance.

### Prop Designer

In Tech, the prop table proves itself. The Prop Designer tracks usage, fixes breakage, replaces missing items, and refines pre-sets and resets. Every late-show panic is one this work can preempt. The Prop Designer coordinates with the Stage Manager (tracking) and any backstage crew handling props.

## Performance

*The phase where it all meets an audience. Consistency and adaptability at once — the show is the same, every night is different. Theater exists only in the present, and then it's gone.*

### Stage Manager

In Performance, the Stage Manager runs the show every night. Calling cues consistently, writing a performance report after each show, troubleshooting in real time, supporting understudies if they go on, and keeping the room safe and on schedule — the SM's steadiness becomes everyone else's. The SM coordinates with the House Manager (communication protocol), the Director (notes between shows when needed), the Production Manager (any escalations), and the cast.

### Assistant Stage Manager

In Performance, the ASM runs backstage every night. Managing entrances and exits, supporting quick changes, overseeing the prop table, monitoring performer well-being, and staying calm under whatever the run delivers. The ASM reports to the Stage Manager and coordinates with backstage crew.

### Director

In Performance, the Director lets go. Watching shows, giving notes thoughtfully and sparingly, celebrating growth, addressing technical issues through the Stage Manager, and resisting the urge to over-direct what is already running. The work is done; this is the cheering and refining phase. The Director talks to the Stage Manager (notes channel) and the Producer (overall arc).

### Production Manager

In Performance, the Production Manager stays in the background and ready for anything. On call for issues, attending opening and closing, monitoring budgets as final invoices come in, and starting to plan strike. The PM stays close to the Stage Manager and Front of House, and checks in with the Producer.

### Technical Director

In Performance, the build performs every night. The Technical Director is available for emergency repairs, maintains spare parts and tools, and coordinates any mid-run adjustments needed. Most nights this work is invisible; when it is needed, it is needed immediately. The TD stays in touch with the Stage Manager (incidents) and the Production Manager (escalations).

### Box Office Manager

In Performance, ticketing becomes hospitality. The Box Office Manager runs will-call cleanly, handles exchanges and accessibility seating with care, reconciles each night, and feeds audience data back to the team. Every patron's first impression of Encore goes through this role. The Box Office Manager coordinates with the House Manager (audience flow) and the Marketing team (campaign performance).

### Front of House

In Performance, the audience meets Encore. Running the lobby, briefing volunteer ushers, managing accessibility accommodations, coordinating intermission, communicating with the Stage Manager on house timing, and ensuring every patron feels welcome — the show extends beyond the proscenium. Conversations are with the Stage Manager (house open, intermission, emergencies) and the Box Office Manager (seating, will-call).

### Culture & Community Coordinator

In Performance, Encore's culture meets the public — opening night, closing night, every show in between. The Culture Coordinator coordinates opening- and closing-night rituals, captures moments for the cast photo book, is visible in the lobby and backstage at key performances, and responds to cast and family needs. The Coordinator talks to the Producer, the Stage Manager, and the cast.

### Apparel and Vinyl Production Coordinator

In Performance, merch goes from inventory to sales. Replenishing lobby inventory between shows, coordinating with the Box Office Manager on sales, and responding to demand patterns. Every show is a chance to sell. The Coordinator works with the Box Office Manager.

## Post-Production

*The reflective phase — strike, returns, budget closeout, archival, and the post-mortem. Less visible than opening night, but this is where the next production starts. Capture the lessons; honor the work; close the loop.*

### Production Manager

In Post-Production, the Production Manager closes the production loop. Running strike, coordinating equipment returns, reconciling the final budget, leading the post-mortem, archiving what should be archived, and capturing lessons that will improve the next show. The institution learns only as much as gets written down. The PM talks to every department lead during strike and the post-mortem, and debriefs with the Producer and Executive Director.

### Director

In Post-Production, the Director reflects honestly. Evaluating the production against the educational and artistic goals set in Inception, giving and receiving feedback with the team, capturing lessons for future productions, and acknowledging growth in young artists. What worked, what didn't, who grew, and how. The Director sits with the Producer and the Production Manager for the debrief.

### Producer

In Post-Production, the Producer reflects on mission alignment and prepares for the next show. Sitting in on the post-mortem, capturing strategic takeaways, reviewing budget closeout, and considering what this production taught about the season's arc. Long-term institutional learning lives here. The Producer talks to the Production Manager, Director, and Executive Director.

### Stage Manager

In Post-Production, the Show Bible gets closed out. The Stage Manager compiles performance reports, archives the prompt book, returns borrowed items, captures young-artist feedback, and writes up anything that should travel to the next production. The next stage manager (or this one's future self) will thank them. The SM works with the Production Manager on returns and the Director on reflective notes.

### Assistant Stage Manager

In Post-Production, the ASM helps close out the backstage. Supporting strike, returning borrowed items, helping compile performance reports, and reflecting on lessons learned. The ASM reports to the Stage Manager.

### Technical Director

In Post-Production, the venue goes back to neutral. The Technical Director runs the set strike, restores the space, inventories reusable materials, and captures lessons for future builds. Leaving the site better than it was found. The TD coordinates with the Production Manager and the Set Builder team.

### Set Builder

Post-Production is strike. The Set Builder leads the teardown crew, sorts hardware and reusable materials, disposes of what can't be saved, and restores the venue. Clean, safe, documented. The Set Builder takes direction from the Technical Director.

### Set Designer

In Post-Production, the design gets archived. The Set Designer files renderings, ground plans, and reference materials, reconciles the final budget, and reflects on what worked and what would be different next time. The Set Designer talks to the Production Manager about closeout.

### Costume Designer

In Post-Production, the wardrobe gets resolved. The Costume Designer coordinates laundering, returns, and storage, reconciles the budget, archives renderings and breakdown sheets, and captures lessons learned. The costume inventory is a long-term asset of the organization. The Costume Designer coordinates with the Production Manager and the Costume Coordinator.

### Costume Coordinator

In Post-Production, the costumes come home. The Coordinator coordinates laundering and storage, returns borrowed pieces, archives inventory, and captures lessons for the next show. The Coordinator reports to the Costume Designer.

### Light Designer

In Post-Production, the Light Designer archives the design and reconciles equipment. Returning rentals, capturing the final cue list, archiving the plot and references, and reconciling the budget. Both the artistic and technical record matter. The LD coordinates with the Production Manager on returns.

### Sound Designer

In Post-Production, audio gets closed out. The Sound Designer returns microphones and gear, archives cue lists and source files, reconciles the budget, and reflects on what to do differently next time. The next production starts with this archive. The SD coordinates with the Production Manager.

### Prop Designer

In Post-Production, the prop inventory gets resolved. The Prop Designer returns rented or borrowed props, restocks Encore inventory, archives the prop list and tracking document, and reconciles the budget. Every prop is either gone, stored, or accounted for. The Prop Designer coordinates with the Production Manager.

## Related

- [[0.0 - Production Bible]] · [[1 - Inception]] · [[2 - Pre-Production]] · [[3 - Casting]] · [[4 - Rehearsals]] · [[5 - Pre-Tech]] · [[6 - Technical Rehearsals]] · [[7 - Performance]] · [[8 - Post-Production]]
- [[Event Prep Notes]] — the companion by-event prep reference
- [[Production Meeting Guides]]

---

*Status: Working · Portal: Team · Last reviewed: 2026-05-13 · Owner: Rhett*
