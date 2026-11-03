import { BookOpen, Check, FileText, Mail, Quote, Users, Wrench, Zap } from "lucide-react"

export type ArtKind = "code" | "mail" | "story" | "read" | "help"

const card = "card-lift shadow-float rounded-2xl border border-border bg-card"

export default function PageArt({ kind }: { kind: ArtKind }) {
  return (
    <div className="relative mx-auto h-72 w-full max-w-md" aria-hidden="true">
      <div className="arch absolute inset-x-12 bottom-0 top-0 opacity-70" />
      {kind === "code" && (
        <>
          <div className={`${card} float-b absolute left-0 top-10 w-72 overflow-hidden`}>
            <div className="flex gap-1.5 border-b border-border bg-muted px-3 py-2"><i className="size-2.5 rounded-full bg-border" /><i className="size-2.5 rounded-full bg-border" /><i className="size-2.5 rounded-full bg-border" /></div>
            <pre className="p-4 font-mono text-[11px] leading-relaxed text-foreground/80">{`https://links.you.com/u/spring
  ?utm_source=email
  &utm_medium=newsletter`}</pre>
          </div>
          <div className={`${card} float-a absolute bottom-6 right-0 flex items-center gap-2 px-4 py-3 text-sm font-medium`}><Check className="size-4 text-emerald-600" /> Link resolves on iOS</div>
        </>
      )}
      {kind === "mail" && (
        <>
          <div className={`${card} float-b absolute left-0 top-10 flex items-center gap-3 p-4`}>
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Mail className="size-5" /></span>
            <div><p className="text-sm font-medium">info@deepurls.com</p><p className="text-xs text-muted-foreground">Reply within 24 hours</p></div>
          </div>
          <div className="absolute bottom-8 right-0 flex flex-col items-end gap-2">
            {["Sales", "Support", "Engineering"].map((x, i) => <span key={x} className={`${card} px-4 py-2 text-sm font-medium`} style={{ marginRight: i * 14 }}>{x}</span>)}
          </div>
        </>
      )}
      {kind === "story" && (
        <>
          <div className={`${card} float-b absolute left-0 top-8 w-72 p-5`}>
            <Quote className="size-6 text-accent/40" />
            <p className="mt-2 font-display text-lg leading-snug">Click to install, in a single journey.</p>
          </div>
          <div className={`${card} float-a absolute bottom-6 right-0 flex items-center gap-2 px-4 py-3 text-sm font-medium`}><Users className="size-4 text-accent" /> Built for growth teams</div>
        </>
      )}
      {kind === "read" && (
        <>
          <div className={`${card} float-b absolute left-0 top-8 w-64 p-4`}>
            <div className="h-24 rounded-xl bg-gradient-to-br from-[oklch(0.93_0.06_285)] to-[oklch(0.95_0.05_55)]" />
            <p className="mt-3 text-sm font-medium">Deep linking best practices</p>
            <p className="text-xs text-muted-foreground">iOS, Android and web</p>
          </div>
          <div className={`${card} float-a absolute bottom-6 right-0 flex items-center gap-2 px-4 py-3 text-sm font-medium`}><FileText className="size-4 text-accent" /> New guides</div>
        </>
      )}
      {kind === "help" && (
        <>
          <div className={`${card} float-b absolute left-0 top-10 flex items-center gap-3 p-4`}>
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground"><BookOpen className="size-5" /></span>
            <div><p className="text-sm font-medium">Create your first link</p><p className="text-xs text-muted-foreground">Takes about 5 minutes</p></div>
          </div>
          <div className={`${card} float-a absolute bottom-6 right-0 flex items-center gap-2 px-4 py-3 text-sm font-medium`}><Wrench className="size-4 text-accent" /> SDK setup <Zap className="size-4 text-amber-500" /></div>
        </>
      )}
    </div>
  )
}
