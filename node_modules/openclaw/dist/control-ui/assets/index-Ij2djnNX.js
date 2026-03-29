const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./agents-BxjbKlLv.js","./lit-BZwq2xLD.js","./format-DeRVtGzv.js","./channel-config-extras-ClZgd1ad.js","./skills-shared-DMlqIU2G.js","./channels-BHNFdqm0.js","./cron-L9UojfXC.js","./debug-C7cARCeJ.js","./instances-BQGyKX-S.js","./logs-CK-znQv9.js","./nodes-WLLAEs_x.js","./sessions-DV3Qn8ZG.js","./skills-Cqf2_pRr.js"])))=>i.map(i=>d[i]);
import{a as e,c as t,i as n,l as r,n as i,o as a,r as o,s,t as c}from"./lit-BZwq2xLD.js";import{a as l,c as u,d,i as f,l as p,n as m,o as h,s as g,u as _}from"./format-DeRVtGzv.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var v=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},y={attribute:!0,type:String,converter:t,reflect:!1,hasChanged:s},b=(e=y,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function x(e){return(t,n)=>typeof n==`object`?b(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function S(e){return x({...e,state:!0,attribute:!1})}function C(e){let t=(e??``).trim().toLowerCase();if(!t)return null;let n=t.split(`:`).filter(Boolean);if(n.length<3||n[0]!==`agent`)return null;let r=n[1]?.trim(),i=n.slice(2).join(`:`);return!r||!i?null:{agentId:r,rest:i}}function w(e){let t=(e??``).trim();return t?t.toLowerCase().startsWith(`subagent:`)?!0:!!(C(t)?.rest??``).toLowerCase().startsWith(`subagent:`):!1}var T=`main`,E=`main`,D=/^[a-z0-9][a-z0-9_-]{0,63}$/i,ee=/[^a-z0-9_-]+/g,te=/^-+/,O=/-+$/;function ne(e){let t=(e??``).trim();return t?t.toLowerCase():E}function k(e){return re(C(e)?.agentId??`main`)}function re(e){let t=(e??``).trim();return t?D.test(t)?t.toLowerCase():t.toLowerCase().replace(ee,`-`).replace(te,``).replace(O,``).slice(0,64)||`main`:T}function A(e){return`agent:${re(e.agentId)}:${ne(e.mainKey)}`}function ie(e){return!!e&&typeof e.getItem==`function`&&typeof e.setItem==`function`}function j(){let e=Object.getOwnPropertyDescriptor(globalThis,`localStorage`);if(typeof process<`u`&&{}?.VITEST)return e&&!e.get&&ie(e.value)?e.value:null;if(typeof window<`u`&&typeof document<`u`)try{return ie(window.localStorage)?window.localStorage:null}catch{return null}return e&&!e.get&&ie(e.value)?e.value:null}var M={common:{health:`Health`,ok:`OK`,online:`Online`,offline:`Offline`,connect:`Connect`,refresh:`Refresh`,enabled:`Enabled`,disabled:`Disabled`,na:`n/a`,version:`Version`,docs:`Docs`,theme:`Theme`,resources:`Resources`,search:`Search`},nav:{chat:`Chat`,control:`Control`,agent:`Agent`,settings:`Settings`,expand:`Expand sidebar`,collapse:`Collapse sidebar`,resize:`Resize sidebar`},tabs:{agents:`Agents`,overview:`Overview`,channels:`Channels`,instances:`Instances`,sessions:`Sessions`,usage:`Usage`,cron:`Cron Jobs`,skills:`Skills`,nodes:`Nodes`,chat:`Chat`,config:`Config`,communications:`Communications`,appearance:`Appearance`,automation:`Automation`,infrastructure:`Infrastructure`,aiAgents:`AI & Agents`,debug:`Debug`,logs:`Logs`},subtitles:{agents:`Workspaces, tools, identities.`,overview:`Status, entry points, health.`,channels:`Channels and settings.`,instances:`Connected clients and nodes.`,sessions:`Active sessions and defaults.`,usage:`API usage and costs.`,cron:`Wakeups and recurring runs.`,skills:`Skills and API keys.`,nodes:`Paired devices and commands.`,chat:`Gateway chat for quick interventions.`,config:`Edit openclaw.json.`,communications:`Channels, messages, and audio settings.`,appearance:`Theme, UI, and setup wizard settings.`,automation:`Commands, hooks, cron, and plugins.`,infrastructure:`Gateway, web, browser, and media settings.`,aiAgents:`Agents, models, skills, tools, memory, session.`,debug:`Snapshots, events, RPC.`,logs:`Live gateway logs.`},overview:{access:{title:`Gateway Access`,subtitle:`Where the dashboard connects and how it authenticates.`,wsUrl:`WebSocket URL`,token:`Gateway Token`,password:`Password (not stored)`,sessionKey:`Default Session Key`,language:`Language`,connectHint:`Click Connect to apply connection changes.`,trustedProxy:`Authenticated via trusted proxy.`},snapshot:{title:`Snapshot`,subtitle:`Latest gateway handshake information.`,status:`Status`,uptime:`Uptime`,tickInterval:`Tick Interval`,lastChannelsRefresh:`Last Channels Refresh`,channelsHint:`Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.`},stats:{instances:`Instances`,instancesHint:`Presence beacons in the last 5 minutes.`,sessions:`Sessions`,sessionsHint:`Recent session keys tracked by the gateway.`,cron:`Cron`,cronNext:`Next wake {time}`},notes:{title:`Notes`,subtitle:`Quick reminders for remote control setups.`,tailscaleTitle:`Tailscale serve`,tailscaleText:`Prefer serve mode to keep the gateway on loopback with tailnet auth.`,sessionTitle:`Session hygiene`,sessionText:`Use /new or sessions.patch to reset context.`,cronTitle:`Cron reminders`,cronText:`Use isolated sessions for recurring runs.`},auth:{required:`This gateway requires auth. Add a token or password, then click Connect.`,failed:`Auth failed. Re-copy a tokenized URL with {command}, or update the token, then click Connect.`},pairing:{hint:`This device needs pairing approval from the gateway host.`,mobileHint:`On mobile? Copy the full URL (including #token=...) from openclaw dashboard --no-open on your desktop.`},insecure:{hint:`This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open {url} on the gateway host.`,stayHttp:`If you must stay on HTTP, set {config} (token-only).`},connection:{title:`How to connect`,step1:`Start the gateway on your host machine:`,step2:`Get a tokenized dashboard URL:`,step3:`Paste the WebSocket URL and token above, or open the tokenized URL directly.`,step4:`Or generate a reusable token:`,docsHint:`For remote access, Tailscale Serve is recommended. `,docsLink:`Read the docs →`},cards:{cost:`Cost`,skills:`Skills`,recentSessions:`Recent Sessions`},attention:{title:`Attention`},eventLog:{title:`Event Log`},logTail:{title:`Gateway Logs`},quickActions:{newSession:`New Session`,automation:`Automation`,refreshAll:`Refresh All`,terminal:`Terminal`},palette:{placeholder:`Type a command…`,noResults:`No results`}},usage:{page:{subtitle:`See where tokens go, when sessions spike, and what drives cost.`},common:{emptyValue:`—`,unknown:`unknown`},loading:{title:`Usage Overview`,badge:`Loading`},metrics:{tokens:`Tokens`,cost:`Cost`,session:`session`,sessions:`sessions`},presets:{today:`Today`,last7d:`7d`,last30d:`30d`},filters:{title:`Filters`,to:`to`,startDate:`Start date`,endDate:`End date`,timeZone:`Time zone`,timeZoneLocal:`Local`,timeZoneUtc:`UTC`,pin:`Pin`,pinned:`Pinned`,unpin:`Unpin filters`,selectAll:`Select All`,clear:`Clear`,clearAll:`Clear All`,remove:`Remove filter`,all:`All`,days:`Days`,hours:`Hours`,session:`Session`,agent:`Agent`,channel:`Channel`,provider:`Provider`,model:`Model`,tool:`Tool`,daysCount:`{count} days`,hoursCount:`{count} hours`,sessionsCount:`{count} sessions`},query:{placeholder:`Filter sessions (e.g. key:agent:main:cron* model:gpt-4o has:errors minTokens:2000)`,apply:`Filter (client-side)`,matching:`{shown} of {total} sessions match`,inRange:`{total} sessions in range`,tip:`Tip: use filters or click bars to refine days.`},export:{label:`Export`,sessionsCsv:`Sessions CSV`,dailyCsv:`Daily CSV`,json:`JSON`},empty:{title:`Start with a date range`,subtitle:`Load usage data to compare costs, inspect sessions, and drill into timelines without leaving the dashboard.`,hint:`Select a date range and click Refresh to load usage.`,noData:`No data`,featureOverview:`Overview cards`,featureSessions:`Session ranking`,featureTimeline:`Timeline drilldown`},daily:{title:`Daily Usage`,total:`Total`,byType:`By Type`,tokensTitle:`Daily Token Usage`,costTitle:`Daily Cost`},breakdown:{output:`Output`,input:`Input`,cacheWrite:`Cache Write`,cacheRead:`Cache Read`,total:`Total`,tokensByType:`Tokens by Type`,costByType:`Cost by Type`},overview:{title:`Usage Overview`,messages:`Messages`,messagesHint:`Total user and assistant messages in range.`,messagesAbbrev:`msgs`,user:`user`,assistant:`assistant`,toolCalls:`Tool Calls`,toolCallsHint:`Total tool call count across sessions.`,toolsUsed:`tools used`,errors:`Errors`,errorsHint:`Total message and tool errors in range.`,toolResults:`tool results`,avgTokens:`Avg Tokens / Msg`,avgTokensHint:`Average tokens per message in this range.`,avgCost:`Avg Cost / Msg`,avgCostHint:`Average cost per message when providers report costs.`,avgCostHintMissing:`Average cost per message when providers report costs. Cost data is missing for some or all sessions in this range.`,acrossMessages:`Across {count} messages`,sessions:`Sessions`,sessionsHint:`Distinct sessions in the range.`,sessionsInRange:`of {count} in range`,throughput:`Throughput`,throughputHint:`Throughput shows tokens per minute over active time. Higher is better.`,tokensPerMinute:`tok/min`,perMinute:`/ min`,errorRate:`Error Rate`,errorHint:`Error rate = errors / total messages. Lower is better.`,avgSession:`avg session`,cacheHitRate:`Cache Hit Rate`,cacheHint:`Cache hit rate = cache read / (input + cache read). Higher is better.`,cached:`cached`,prompt:`prompt`,calls:`calls`,topModels:`Top Models`,topProviders:`Top Providers`,topTools:`Top Tools`,topAgents:`Top Agents`,topChannels:`Top Channels`,peakErrorDays:`Peak Error Days`,peakErrorHours:`Peak Error Hours`,noModelData:`No model data`,noProviderData:`No provider data`,noToolCalls:`No tool calls`,noAgentData:`No agent data`,noChannelData:`No channel data`,noErrorData:`No error data`},sessions:{title:`Sessions`,shown:`{count} shown`,total:`{count} total`,avg:`avg`,all:`All`,recent:`Recently viewed`,recentShort:`Recent`,sort:`Sort`,ascending:`Ascending`,descending:`Descending`,clearSelection:`Clear Selection`,noRecent:`No recent sessions`,noneInRange:`No sessions in range`,more:`+{count} more`,selected:`Selected ({count})`,copy:`Copy`,copyName:`Copy session name`,limitReached:`Showing first 1,000 sessions. Narrow date range for complete results.`},details:{noUsageData:`No usage data for this session.`,duration:`Duration`,modelMix:`Model Mix`,filtered:`(filtered)`,close:`Close session details`,noTimeline:`No timeline data`,noDataInRange:`No data in range`,usageOverTime:`Usage Over Time`,reset:`Reset`,perTurn:`Per Turn`,cumulative:`Cumulative`,turnRange:`Turns {start}–{end} of {total}`,assistantOutputTokens:`Assistant output tokens`,userToolInputTokens:`User + tool input tokens`,tokensWrittenToCache:`Tokens written to cache`,tokensReadFromCache:`Tokens read from cache`,noContextData:`No context data`,systemPromptBreakdown:`System Prompt Breakdown`,collapse:`Collapse`,collapseAll:`Collapse All`,expandAll:`Expand All`,baseContextPerMessage:`Base context per message`,system:`System`,systemShort:`Sys`,skills:`Skills`,tools:`Tools`,files:`Files`,ofInput:`of input`,of:`of`,timelineFiltered:`timeline filtered`,conversation:`Conversation`,noMessages:`No messages`,tool:`Tool`,toolResult:`Tool result`,hasTools:`Has tools`,searchConversation:`Search conversation`,you:`You`,noMessagesMatch:`No messages match the filters.`},mosaic:{title:`Activity by Time`,subtitleEmpty:`Estimates require session timestamps.`,subtitle:`Estimated from session spans (first/last activity). Time zone: {zone}.`,noTimelineData:`No timeline data yet.`,dayOfWeek:`Day of Week`,midnight:`Midnight`,fourAm:`4am`,eightAm:`8am`,noon:`Noon`,fourPm:`4pm`,eightPm:`8pm`,legend:`Low → High token density`,sun:`Sun`,mon:`Mon`,tue:`Tue`,wed:`Wed`,thu:`Thu`,fri:`Fri`,sat:`Sat`}},login:{subtitle:`Gateway Dashboard`,passwordPlaceholder:`optional`},chat:{disconnected:`Disconnected from gateway.`,refreshTitle:`Refresh chat data`,thinkingToggle:`Toggle assistant thinking/working output`,toolCallsToggle:`Toggle tool calls and tool results`,focusToggle:`Toggle focus mode (hide sidebar + page header)`,hideCronSessions:`Hide cron sessions`,showCronSessions:`Show cron sessions`,showCronSessionsHidden:`Show cron sessions ({count} hidden)`,onboardingDisabled:`Disabled during setup`},languages:{en:`English`,zhCN:`简体中文 (Simplified Chinese)`,zhTW:`繁體中文 (Traditional Chinese)`,ptBR:`Português (Brazilian Portuguese)`,de:`Deutsch (German)`,es:`Español (Spanish)`},cron:{summary:{enabled:`Enabled`,yes:`Yes`,no:`No`,jobs:`Jobs`,nextWake:`Next wake`,refreshing:`Refreshing...`,refresh:`Refresh`},jobs:{title:`Jobs`,subtitle:`All scheduled jobs stored in the gateway.`,shownOf:`{shown} shown of {total}`,searchJobs:`Search jobs`,searchPlaceholder:`Name, description, or agent`,enabled:`Enabled`,schedule:`Schedule`,lastRun:`Last run`,all:`All`,sort:`Sort`,nextRun:`Next run`,recentlyUpdated:`Recently updated`,name:`Name`,direction:`Direction`,ascending:`Ascending`,descending:`Descending`,reset:`Reset`,noMatching:`No matching jobs.`,loading:`Loading...`,loadMore:`Load more jobs`},runs:{title:`Run history`,subtitleAll:`Latest runs across all jobs.`,subtitleJob:`Latest runs for {title}.`,scope:`Scope`,allJobs:`All jobs`,selectedJob:`Selected job`,searchRuns:`Search runs`,searchPlaceholder:`Summary, error, or job`,newestFirst:`Newest first`,oldestFirst:`Oldest first`,status:`Status`,delivery:`Delivery`,clear:`Clear`,allStatuses:`All statuses`,allDelivery:`All delivery`,selectJobHint:`Select a job to inspect run history.`,noMatching:`No matching runs.`,loadMore:`Load more runs`,runStatusOk:`OK`,runStatusError:`Error`,runStatusSkipped:`Skipped`,runStatusUnknown:`Unknown`,deliveryDelivered:`Delivered`,deliveryNotDelivered:`Not delivered`,deliveryUnknown:`Unknown`,deliveryNotRequested:`Not requested`},form:{editJob:`Edit Job`,newJob:`New Job`,updateSubtitle:`Update the selected scheduled job.`,createSubtitle:`Create a scheduled wakeup or agent run.`,required:`Required`,requiredSr:`required`,basics:`Basics`,basicsSub:`Name it, choose the assistant, and set enabled state.`,fieldName:`Name`,description:`Description`,agentId:`Agent ID`,namePlaceholder:`Morning brief`,descriptionPlaceholder:`Optional context for this job`,agentPlaceholder:`main or ops`,agentHelp:`Start typing to pick a known agent, or enter a custom one.`,schedule:`Schedule`,scheduleSub:`Control when this job runs.`,every:`Every`,at:`At`,cronOption:`Cron`,runAt:`Run at`,unit:`Unit`,minutes:`Minutes`,hours:`Hours`,days:`Days`,expression:`Expression`,expressionPlaceholder:`0 7 * * *`,everyAmountPlaceholder:`30`,timezoneOptional:`Timezone (optional)`,timezonePlaceholder:`America/Los_Angeles`,timezoneHelp:`Pick a common timezone or enter any valid IANA timezone.`,jitterHelp:`Need jitter? Use Advanced → Stagger window / Stagger unit.`,execution:`Execution`,executionSub:`Choose when to wake, and what this job should do.`,session:`Session`,main:`Main`,isolated:`Isolated`,sessionHelp:`Main posts a system event. Isolated runs a dedicated agent turn.`,wakeMode:`Wake mode`,now:`Now`,nextHeartbeat:`Next heartbeat`,wakeModeHelp:`Now triggers immediately. Next heartbeat waits for the next cycle.`,payloadKind:`What should run?`,systemEvent:`Post message to main timeline`,agentTurn:`Run assistant task (isolated)`,systemEventHelp:`Sends your text to the gateway main timeline (good for reminders/triggers).`,agentTurnHelp:`Starts an assistant run in its own session using your prompt.`,timeoutSeconds:`Timeout (seconds)`,timeoutPlaceholder:`Optional, e.g. 90`,timeoutHelp:`Optional. Leave blank to use the gateway default timeout behavior for this run.`,mainTimelineMessage:`Main timeline message`,assistantTaskPrompt:`Assistant task prompt`,deliverySection:`Delivery`,deliverySub:`Choose where run summaries are sent.`,resultDelivery:`Result delivery`,announceDefault:`Announce summary (default)`,webhookPost:`Webhook POST`,noneInternal:`None (internal)`,deliveryHelp:`Announce posts a summary to chat. None keeps execution internal.`,webhookUrl:`Webhook URL`,channel:`Channel`,webhookPlaceholder:`https://example.com/cron`,channelHelp:`Choose which connected channel receives the summary.`,webhookHelp:`Send run summaries to a webhook endpoint.`,to:`To`,toPlaceholder:`+1555... or chat id`,toHelp:`Optional recipient override (chat id, phone, or user id).`,advanced:`Advanced`,advancedHelp:`Optional overrides for delivery guarantees, schedule jitter, and model controls.`,deleteAfterRun:`Delete after run`,deleteAfterRunHelp:`Best for one-shot reminders that should auto-clean up.`,clearAgentOverride:`Clear agent override`,clearAgentHelp:`Force this job to use the gateway default assistant.`,exactTiming:`Exact timing (no stagger)`,exactTimingHelp:`Run on exact cron boundaries with no spread.`,staggerWindow:`Stagger window`,staggerUnit:`Stagger unit`,staggerPlaceholder:`30`,seconds:`Seconds`,model:`Model`,modelPlaceholder:`openai/gpt-5.2`,modelHelp:`Start typing to pick a known model, or enter a custom one.`,thinking:`Thinking`,thinkingPlaceholder:`low`,thinkingHelp:`Use a suggested level or enter a provider-specific value.`,bestEffortDelivery:`Best effort delivery`,bestEffortHelp:`Do not fail the job if delivery itself fails.`,cantAddYet:`Can't add job yet`,fillRequired:`Fill the required fields below to enable submit.`,fixFields:`Fix {count} field to continue.`,fixFieldsPlural:`Fix {count} fields to continue.`,saving:`Saving...`,saveChanges:`Save changes`,addJob:`Add job`,cancel:`Cancel`},jobList:{allJobs:`all jobs`,selectJob:`(select a job)`,enabled:`enabled`,disabled:`disabled`,edit:`Edit`,clone:`Clone`,disable:`Disable`,enable:`Enable`,run:`Run`,history:`History`,remove:`Remove`},jobDetail:{system:`System`,prompt:`Prompt`,delivery:`Delivery`,agent:`Agent`},jobState:{status:`Status`,next:`Next`,last:`Last`},runEntry:{noSummary:`No summary.`,runAt:`Run at`,openRunChat:`Open run chat`,next:`Next {rel}`,due:`Due {rel}`},errors:{nameRequired:`Name is required.`,scheduleAtInvalid:`Enter a valid date/time.`,everyAmountInvalid:`Interval must be greater than 0.`,cronExprRequired:`Cron expression is required.`,staggerAmountInvalid:`Stagger must be greater than 0.`,systemTextRequired:`System text is required.`,agentMessageRequired:`Agent message is required.`,timeoutInvalid:`If set, timeout must be greater than 0 seconds.`,webhookUrlRequired:`Webhook URL is required.`,webhookUrlInvalid:`Webhook URL must start with http:// or https://.`,invalidRunTime:`Invalid run time.`,invalidIntervalAmount:`Invalid interval amount.`,cronExprRequiredShort:`Cron expression required.`,invalidStaggerAmount:`Invalid stagger amount.`,systemEventTextRequired:`System event text required.`,agentMessageRequiredShort:`Agent message required.`,nameRequiredShort:`Name required.`}}},ae=`modulepreload`,N=function(e,t){return new URL(e,t).href},oe={},P=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=N(t,n),t in oe)return;oe[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:ae,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},se=[`zh-CN`,`zh-TW`,`pt-BR`,`de`,`es`],F={"zh-CN":{exportName:`zh_CN`,loader:()=>P(()=>import(`./zh-CN-DcjYwvnZ.js`),[],import.meta.url)},"zh-TW":{exportName:`zh_TW`,loader:()=>P(()=>import(`./zh-TW-fXiCeEUQ.js`),[],import.meta.url)},"pt-BR":{exportName:`pt_BR`,loader:()=>P(()=>import(`./pt-BR-9Mq_iQ8G.js`),[],import.meta.url)},de:{exportName:`de`,loader:()=>P(()=>import(`./de-BlItdMWk.js`),[],import.meta.url)},es:{exportName:`es`,loader:()=>P(()=>import(`./es-DZIi4jMr.js`),[],import.meta.url)}},I=[`en`,...se];function ce(e){return e!=null&&I.includes(e)}function le(e){return se.includes(e)}function ue(e){return e.startsWith(`zh`)?e===`zh-TW`||e===`zh-HK`?`zh-TW`:`zh-CN`:e.startsWith(`pt`)?`pt-BR`:e.startsWith(`de`)?`de`:e.startsWith(`es`)?`es`:`en`}async function de(e){if(!le(e))return null;let t=F[e];return(await t.loader())[t.exportName]??null}var fe=new class{constructor(){this.locale=`en`,this.translations={en:M},this.subscribers=new Set,this.loadLocale()}readStoredLocale(){let e=j();if(!e)return null;try{return e.getItem(`openclaw.i18n.locale`)}catch{return null}}persistLocale(e){let t=j();if(t)try{t.setItem(`openclaw.i18n.locale`,e)}catch{}}resolveInitialLocale(){let e=this.readStoredLocale();return ce(e)?e:ue((typeof globalThis.navigator?.language==`string`?globalThis.navigator.language:null)??``)}loadLocale(){let e=this.resolveInitialLocale();if(e===`en`){this.locale=`en`;return}this.setLocale(e)}getLocale(){return this.locale}async setLocale(e){let t=e!==`en`&&!this.translations[e];if(!(this.locale===e&&!t)){if(t)try{let t=await de(e);if(!t)return;this.translations[e]=t}catch(t){console.error(`Failed to load locale: ${e}`,t);return}this.locale=e,this.persistLocale(e),this.notify()}}registerTranslation(e,t){this.translations[e]=t}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}notify(){this.subscribers.forEach(e=>e(this.locale))}t(e,t){let n=e.split(`.`),r=this.translations[this.locale]||this.translations.en;for(let e of n)if(r&&typeof r==`object`)r=r[e];else{r=void 0;break}if(r===void 0&&this.locale!==`en`){r=this.translations.en;for(let e of n)if(r&&typeof r==`object`)r=r[e];else{r=void 0;break}}return typeof r==`string`?t?r.replace(/\{(\w+)\}/g,(e,n)=>t[n]||`{${n}}`):r:e}},L=(e,t)=>fe.t(e,t),pe=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){this.unsubscribe=fe.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){this.unsubscribe?.()}},R={AUTH_REQUIRED:`AUTH_REQUIRED`,AUTH_UNAUTHORIZED:`AUTH_UNAUTHORIZED`,AUTH_TOKEN_MISSING:`AUTH_TOKEN_MISSING`,AUTH_TOKEN_MISMATCH:`AUTH_TOKEN_MISMATCH`,AUTH_TOKEN_NOT_CONFIGURED:`AUTH_TOKEN_NOT_CONFIGURED`,AUTH_PASSWORD_MISSING:`AUTH_PASSWORD_MISSING`,AUTH_PASSWORD_MISMATCH:`AUTH_PASSWORD_MISMATCH`,AUTH_PASSWORD_NOT_CONFIGURED:`AUTH_PASSWORD_NOT_CONFIGURED`,AUTH_BOOTSTRAP_TOKEN_INVALID:`AUTH_BOOTSTRAP_TOKEN_INVALID`,AUTH_DEVICE_TOKEN_MISMATCH:`AUTH_DEVICE_TOKEN_MISMATCH`,AUTH_RATE_LIMITED:`AUTH_RATE_LIMITED`,AUTH_TAILSCALE_IDENTITY_MISSING:`AUTH_TAILSCALE_IDENTITY_MISSING`,AUTH_TAILSCALE_PROXY_MISSING:`AUTH_TAILSCALE_PROXY_MISSING`,AUTH_TAILSCALE_WHOIS_FAILED:`AUTH_TAILSCALE_WHOIS_FAILED`,AUTH_TAILSCALE_IDENTITY_MISMATCH:`AUTH_TAILSCALE_IDENTITY_MISMATCH`,CONTROL_UI_ORIGIN_NOT_ALLOWED:`CONTROL_UI_ORIGIN_NOT_ALLOWED`,CONTROL_UI_DEVICE_IDENTITY_REQUIRED:`CONTROL_UI_DEVICE_IDENTITY_REQUIRED`,DEVICE_IDENTITY_REQUIRED:`DEVICE_IDENTITY_REQUIRED`,DEVICE_AUTH_INVALID:`DEVICE_AUTH_INVALID`,DEVICE_AUTH_DEVICE_ID_MISMATCH:`DEVICE_AUTH_DEVICE_ID_MISMATCH`,DEVICE_AUTH_SIGNATURE_EXPIRED:`DEVICE_AUTH_SIGNATURE_EXPIRED`,DEVICE_AUTH_NONCE_REQUIRED:`DEVICE_AUTH_NONCE_REQUIRED`,DEVICE_AUTH_NONCE_MISMATCH:`DEVICE_AUTH_NONCE_MISMATCH`,DEVICE_AUTH_SIGNATURE_INVALID:`DEVICE_AUTH_SIGNATURE_INVALID`,DEVICE_AUTH_PUBLIC_KEY_INVALID:`DEVICE_AUTH_PUBLIC_KEY_INVALID`,PAIRING_REQUIRED:`PAIRING_REQUIRED`},me=new Set([`retry_with_device_token`,`update_auth_configuration`,`update_auth_credentials`,`wait_then_retry`,`review_auth_configuration`]);function he(e){if(!e||typeof e!=`object`||Array.isArray(e))return null;let t=e.code;return typeof t==`string`&&t.trim().length>0?t:null}function ge(e){if(!e||typeof e!=`object`||Array.isArray(e))return{};let t=e,n=typeof t.canRetryWithDeviceToken==`boolean`?t.canRetryWithDeviceToken:void 0,r=typeof t.recommendedNextStep==`string`?t.recommendedNextStep.trim():``;return{canRetryWithDeviceToken:n,recommendedNextStep:me.has(r)?r:void 0}}function _e(e){let t=e.scopes.join(`,`),n=e.token??``;return[`v2`,e.deviceId,e.clientId,e.clientMode,e.role,t,String(e.signedAtMs),n,e.nonce].join(`|`)}var ve={WEBCHAT_UI:`webchat-ui`,CONTROL_UI:`openclaw-control-ui`,WEBCHAT:`webchat`,CLI:`cli`,GATEWAY_CLIENT:`gateway-client`,MACOS_APP:`openclaw-macos`,IOS_APP:`openclaw-ios`,ANDROID_APP:`openclaw-android`,NODE_HOST:`node-host`,TEST:`test`,FINGERPRINT:`fingerprint`,PROBE:`openclaw-probe`},ye=ve,be={WEBCHAT:`webchat`,CLI:`cli`,UI:`ui`,BACKEND:`backend`,NODE:`node`,PROBE:`probe`,TEST:`test`};new Set(Object.values(ve)),new Set(Object.values(be));function xe(e){return e.trim()}function Se(e){if(!Array.isArray(e))return[];let t=new Set;for(let n of e){let e=n.trim();e&&t.add(e)}return t.has(`operator.admin`)?(t.add(`operator.read`),t.add(`operator.write`)):t.has(`operator.write`)&&t.add(`operator.read`),[...t].toSorted()}function Ce(e){let t=e.adapter.readStore();if(!t||t.deviceId!==e.deviceId)return null;let n=xe(e.role),r=t.tokens[n];return!r||typeof r.token!=`string`?null:r}function we(e){let t=xe(e.role),n=e.adapter.readStore(),r={version:1,deviceId:e.deviceId,tokens:n&&n.deviceId===e.deviceId&&n.tokens?{...n.tokens}:{}},i={token:e.token,role:t,scopes:Se(e.scopes),updatedAtMs:Date.now()};return r.tokens[t]=i,e.adapter.writeStore(r),i}function Te(e){let t=e.adapter.readStore();if(!t||t.deviceId!==e.deviceId)return;let n=xe(e.role);if(!t.tokens[n])return;let r={version:1,deviceId:t.deviceId,tokens:{...t.tokens}};delete r.tokens[n],e.adapter.writeStore(r)}var Ee=`openclaw.device.auth.v1`;function De(){try{let e=j()?.getItem(Ee);if(!e)return null;let t=JSON.parse(e);return!t||t.version!==1||!t.deviceId||typeof t.deviceId!=`string`||!t.tokens||typeof t.tokens!=`object`?null:t}catch{return null}}function Oe(e){try{j()?.setItem(Ee,JSON.stringify(e))}catch{}}function ke(e){return Ce({adapter:{readStore:De,writeStore:Oe},deviceId:e.deviceId,role:e.role})}function Ae(e){return we({adapter:{readStore:De,writeStore:Oe},deviceId:e.deviceId,role:e.role,token:e.token,scopes:e.scopes})}function je(e){Te({adapter:{readStore:De,writeStore:Oe},deviceId:e.deviceId,role:e.role})}var Me={p:57896044618658097711785492504343953926634992332820282019728792003956564819949n,n:7237005577332262213973186563042994240857116359379907606001950938285454250989n,h:8n,a:57896044618658097711785492504343953926634992332820282019728792003956564819948n,d:37095705934669439343138083508754565189542113879843219016388785533085940283555n,Gx:15112221349535400772501151409588531511454012693041857206046113283949847762202n,Gy:46316835694926478169428394003475163141307993866256225615783033603165251855960n},{p:Ne,n:Pe,Gx:Fe,Gy:Ie,a:Le,d:Re,h:ze}=Me,Be=32,z=(...e)=>{`captureStackTrace`in Error&&typeof Error.captureStackTrace==`function`&&Error.captureStackTrace(...e)},B=(e=``)=>{let t=Error(e);throw z(t,B),t},Ve=e=>typeof e==`bigint`,He=e=>typeof e==`string`,Ue=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`,We=(e,t,n=``)=>{let r=Ue(e),i=e?.length,a=t!==void 0;if(!r||a&&i!==t){let o=n&&`"${n}" `,s=a?` of length ${t}`:``,c=r?`length=${i}`:`type=${typeof e}`;B(o+`expected Uint8Array`+s+`, got `+c)}return e},Ge=e=>new Uint8Array(e),Ke=e=>Uint8Array.from(e),qe=(e,t)=>e.toString(16).padStart(t,`0`),Je=e=>Array.from(We(e)).map(e=>qe(e,2)).join(``),Ye={_0:48,_9:57,A:65,F:70,a:97,f:102},Xe=e=>{if(e>=Ye._0&&e<=Ye._9)return e-Ye._0;if(e>=Ye.A&&e<=Ye.F)return e-(Ye.A-10);if(e>=Ye.a&&e<=Ye.f)return e-(Ye.a-10)},Ze=e=>{let t=`hex invalid`;if(!He(e))return B(t);let n=e.length,r=n/2;if(n%2)return B(t);let i=Ge(r);for(let n=0,a=0;n<r;n++,a+=2){let r=Xe(e.charCodeAt(a)),o=Xe(e.charCodeAt(a+1));if(r===void 0||o===void 0)return B(t);i[n]=r*16+o}return i},Qe=()=>globalThis?.crypto,$e=()=>Qe()?.subtle??B(`crypto.subtle must be defined, consider polyfill`),et=(...e)=>{let t=Ge(e.reduce((e,t)=>e+We(t).length,0)),n=0;return e.forEach(e=>{t.set(e,n),n+=e.length}),t},tt=(e=Be)=>Qe().getRandomValues(Ge(e)),nt=BigInt,rt=(e,t,n,r=`bad number: out of range`)=>Ve(e)&&t<=e&&e<n?e:B(r),V=(e,t=Ne)=>{let n=e%t;return n>=0n?n:t+n},it=(1n<<255n)-1n,H=e=>{e<0n&&B(`negative coordinate`);let t=(e>>255n)*19n+(e&it);return t=(t>>255n)*19n+(t&it),t%Ne},at=e=>V(e,Pe),ot=(e,t)=>{(e===0n||t<=0n)&&B(`no inverse n=`+e+` mod=`+t);let n=V(e,t),r=t,i=0n,a=1n,o=1n,s=0n;for(;n!==0n;){let e=r/n,t=r%n,c=i-o*e,l=a-s*e;r=n,n=t,i=o,a=s,o=c,s=l}return r===1n?V(i,t):B(`no inverse`)},st=e=>{let t=kt[e];return typeof t!=`function`&&B(`hashes.`+e+` not set`),t},ct=e=>e instanceof ut?e:B(`Point expected`),lt=2n**256n,ut=class e{static BASE;static ZERO;X;Y;Z;T;constructor(e,t,n,r){let i=lt;this.X=rt(e,0n,i),this.Y=rt(t,0n,i),this.Z=rt(n,1n,i),this.T=rt(r,0n,i),Object.freeze(this)}static CURVE(){return Me}static fromAffine(t){return new e(t.x,t.y,1n,H(t.x*t.y))}static fromBytes(t,n=!1){let r=Re,i=Ke(We(t,Be)),a=t[31];i[31]=a&-129;let o=mt(i);rt(o,0n,n?lt:Ne);let s=H(o*o),{isValid:c,value:l}=vt(V(s-1n),H(r*s+1n));c||B(`bad point: y not sqrt`);let u=(l&1n)==1n,d=(a&128)!=0;return!n&&l===0n&&d&&B(`bad point: x==0, isLastByteOdd`),d!==u&&(l=V(-l)),new e(l,o,1n,H(l*o))}static fromHex(t,n){return e.fromBytes(Ze(t),n)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}assertValidity(){let e=Le,t=Re,n=this;if(n.is0())return B(`bad point: ZERO`);let{X:r,Y:i,Z:a,T:o}=n,s=H(r*r),c=H(i*i),l=H(a*a),u=H(l*l);return H(l*(H(s*e)+c))===V(u+H(t*H(s*c)))?H(r*i)===H(a*o)?this:B(`bad point: equation left != right (2)`):B(`bad point: equation left != right (1)`)}equals(e){let{X:t,Y:n,Z:r}=this,{X:i,Y:a,Z:o}=ct(e),s=H(t*o),c=H(i*r),l=H(n*o),u=H(a*r);return s===c&&l===u}is0(){return this.equals(ft)}negate(){return new e(V(-this.X),this.Y,this.Z,V(-this.T))}double(){let{X:t,Y:n,Z:r}=this,i=Le,a=H(t*t),o=H(n*n),s=H(2n*r*r),c=H(i*a),l=V(t+n),u=V(H(l*l)-a-o),d=V(c+o),f=V(d-s),p=V(c-o),m=H(u*f),h=H(d*p),g=H(u*p);return new e(m,h,H(f*d),g)}add(t){let{X:n,Y:r,Z:i,T:a}=this,{X:o,Y:s,Z:c,T:l}=ct(t),u=Le,d=Re,f=H(n*o),p=H(r*s),m=H(H(a*d)*l),h=H(i*c),g=V(H(V(n+r)*V(o+s))-f-p),_=V(h-m),v=V(h+m),y=V(p-H(u*f)),b=H(g*_),x=H(v*y),S=H(g*y);return new e(b,x,H(_*v),S)}subtract(e){return this.add(ct(e).negate())}multiply(e,t=!0){if(!t&&(e===0n||this.is0()))return ft;if(rt(e,1n,Pe),e===1n)return this;if(this.equals(dt))return Lt(e).p;let n=ft,r=dt;for(let i=this;e>0n;i=i.double(),e>>=1n)e&1n?n=n.add(i):t&&(r=r.add(i));return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:n}=this;if(this.equals(ft))return{x:0n,y:1n};let r=ot(n,Ne);return H(n*r)!==1n&&B(`invalid inverse`),{x:H(e*r),y:H(t*r)}}toBytes(){let{x:e,y:t}=this.toAffine(),n=pt(t);return n[31]|=e&1n?128:0,n}toHex(){return Je(this.toBytes())}clearCofactor(){return this.multiply(nt(ze),!1)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){let e=this.multiply(Pe/2n,!1).double();return Pe%2n&&(e=e.add(this)),e.is0()}},dt=new ut(Fe,Ie,1n,V(Fe*Ie)),ft=new ut(0n,1n,1n,0n);ut.BASE=dt,ut.ZERO=ft;var pt=e=>Ze(qe(rt(e,0n,lt),64)).reverse(),mt=e=>nt(`0x`+Je(Ke(We(e)).reverse())),ht=(e,t)=>{let n=e;for(;t-- >0n;)n=H(n*n);return n},gt=e=>{let t=H(H(e*e)*e),n=H(ht(H(ht(t,2n)*t),1n)*e),r=H(ht(n,5n)*n),i=H(ht(r,10n)*r),a=H(ht(i,20n)*i),o=H(ht(a,40n)*a);return{pow_p_5_8:H(ht(H(ht(H(ht(H(ht(o,80n)*o),80n)*o),10n)*r),2n)*e),b2:t}},_t=19681161376707505956807079304988542015446066515923890162744021073123829784752n,vt=(e,t)=>{let n=H(t*H(t*t)),r=gt(H(e*H(H(n*n)*t))).pow_p_5_8,i=H(e*H(n*r)),a=H(t*H(i*i)),o=i,s=H(i*_t),c=a===e,l=a===V(-e),u=a===V(-e*_t);return c&&(i=o),(l||u)&&(i=s),(V(i)&1n)==1n&&(i=V(-i)),{isValid:c||l,value:i}},yt=e=>at(mt(e)),bt=(...e)=>kt.sha512Async(et(...e)),xt=(...e)=>st(`sha512`)(et(...e)),St=e=>{let t=e.slice(0,32);t[0]&=248,t[31]&=127,t[31]|=64;let n=e.slice(32,64),r=yt(t),i=dt.multiply(r);return{head:t,prefix:n,scalar:r,point:i,pointBytes:i.toBytes()}},Ct=e=>bt(We(e,Be)).then(St),wt=e=>St(xt(We(e,Be))),Tt=e=>Ct(e).then(e=>e.pointBytes),Et=e=>bt(e.hashable).then(e.finish),Dt=(e,t,n)=>{let{pointBytes:r,scalar:i}=e,a=yt(t),o=dt.multiply(a).toBytes();return{hashable:et(o,r,n),finish:e=>We(et(o,pt(at(a+yt(e)*i))),64)}},Ot=async(e,t)=>{let n=We(e),r=await Ct(t);return Et(Dt(r,await bt(r.prefix,n),n))},kt={sha512Async:async e=>{let t=$e(),n=et(e);return Ge(await t.digest(`SHA-512`,n.buffer))},sha512:void 0},At={getExtendedPublicKeyAsync:Ct,getExtendedPublicKey:wt,randomSecretKey:(e=tt(Be))=>e},jt=8,Mt=Math.ceil(256/jt)+1,Nt=2**(jt-1),Pt=()=>{let e=[],t=dt,n=t;for(let r=0;r<Mt;r++){n=t,e.push(n);for(let r=1;r<Nt;r++)n=n.add(t),e.push(n);t=n.double()}return e},Ft=void 0,It=(e,t)=>{let n=t.negate();return e?n:t},Lt=e=>{let t=Ft||=Pt(),n=ft,r=dt,i=2**jt,a=i,o=nt(i-1),s=nt(jt);for(let i=0;i<Mt;i++){let c=Number(e&o);e>>=s,c>Nt&&(c-=a,e+=1n);let l=i*Nt,u=l,d=l+Math.abs(c)-1,f=i%2!=0,p=c<0;c===0?r=r.add(It(f,t[u])):n=n.add(It(p,t[d]))}return e!==0n&&B(`invalid wnaf`),{p:n,f:r}},Rt=`openclaw-device-identity-v1`;function zt(e){let t=``;for(let n of e)t+=String.fromCharCode(n);return btoa(t).replaceAll(`+`,`-`).replaceAll(`/`,`_`).replace(/=+$/g,``)}function Bt(e){let t=e.replaceAll(`-`,`+`).replaceAll(`_`,`/`),n=t+`=`.repeat((4-t.length%4)%4),r=atob(n),i=new Uint8Array(r.length);for(let e=0;e<r.length;e+=1)i[e]=r.charCodeAt(e);return i}function Vt(e){return Array.from(e).map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function Ht(e){let t=await crypto.subtle.digest(`SHA-256`,e.slice().buffer);return Vt(new Uint8Array(t))}async function Ut(){let e=At.randomSecretKey(),t=await Tt(e);return{deviceId:await Ht(t),publicKey:zt(t),privateKey:zt(e)}}async function Wt(){let e=j();try{let t=e?.getItem(Rt);if(t){let n=JSON.parse(t);if(n?.version===1&&typeof n.deviceId==`string`&&typeof n.publicKey==`string`&&typeof n.privateKey==`string`){let t=await Ht(Bt(n.publicKey));if(t!==n.deviceId){let r={...n,deviceId:t};return e?.setItem(Rt,JSON.stringify(r)),{deviceId:t,publicKey:n.publicKey,privateKey:n.privateKey}}return{deviceId:n.deviceId,publicKey:n.publicKey,privateKey:n.privateKey}}}}catch{}let t=await Ut(),n={version:1,deviceId:t.deviceId,publicKey:t.publicKey,privateKey:t.privateKey,createdAtMs:Date.now()};return e?.setItem(Rt,JSON.stringify(n)),t}async function Gt(e,t){let n=Bt(e);return zt(await Ot(new TextEncoder().encode(t),n))}var Kt=!1;function qt(e){e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t=``;for(let n=0;n<e.length;n++)t+=e[n].toString(16).padStart(2,`0`);return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function Jt(){let e=new Uint8Array(16),t=Date.now();for(let t=0;t<e.length;t++)e[t]=Math.floor(Math.random()*256);return e[0]^=t&255,e[1]^=t>>>8&255,e[2]^=t>>>16&255,e[3]^=t>>>24&255,e}function Yt(){Kt||(Kt=!0,console.warn(`[uuid] crypto API missing; falling back to weak randomness`))}function Xt(e=globalThis.crypto){if(e&&typeof e.randomUUID==`function`)return e.randomUUID();if(e&&typeof e.getRandomValues==`function`){let t=new Uint8Array(16);return e.getRandomValues(t),qt(t)}return Yt(),qt(Jt())}var Zt=class extends Error{constructor(e){super(e.message),this.name=`GatewayRequestError`,this.gatewayCode=e.code,this.details=e.details}};function Qt(e){return he(e?.details)}function $t(e){if(!e)return!1;let t=Qt(e);return t===R.AUTH_TOKEN_MISSING||t===R.AUTH_BOOTSTRAP_TOKEN_INVALID||t===R.AUTH_PASSWORD_MISSING||t===R.AUTH_PASSWORD_MISMATCH||t===R.AUTH_RATE_LIMITED||t===R.PAIRING_REQUIRED||t===R.CONTROL_UI_DEVICE_IDENTITY_REQUIRED||t===R.DEVICE_IDENTITY_REQUIRED}function en(e){try{let t=new URL(e,window.location.href),n=t.hostname.trim().toLowerCase(),r=n===`localhost`||n===`::1`||n===`[::1]`||n===`127.0.0.1`,i=n.startsWith(`127.`);if(r||i)return!0;let a=new URL(window.location.href);return t.host===a.host}catch{return!1}}var tn=`operator`,nn=[`operator.admin`,`operator.read`,`operator.write`,`operator.approvals`,`operator.pairing`],rn=4008;function an(e){let t=e.authToken;if(t||e.authPassword)return{token:t,deviceToken:e.authDeviceToken??e.resolvedDeviceToken,password:e.authPassword}}async function on(e){let{deviceIdentity:t}=e;if(!t)return;let n=Date.now(),r=e.connectNonce??``,i=_e({deviceId:t.deviceId,clientId:e.client.id,clientMode:e.client.mode,role:e.role,scopes:e.scopes,signedAtMs:n,token:e.authToken??null,nonce:r}),a=await Gt(t.privateKey,i);return{id:t.deviceId,publicKey:t.publicKey,signature:a,signedAt:n,nonce:r}}function sn(e){return!e.deviceTokenRetryBudgetUsed&&!e.authDeviceToken&&!!e.explicitGatewayToken&&!!e.deviceIdentity&&!!e.storedToken&&e.canRetryWithDeviceTokenHint&&en(e.url)}var cn=class{constructor(e){this.opts=e,this.ws=null,this.pending=new Map,this.closed=!1,this.lastSeq=null,this.connectNonce=null,this.connectSent=!1,this.connectTimer=null,this.backoffMs=800,this.pendingDeviceTokenRetry=!1,this.deviceTokenRetryBudgetUsed=!1}start(){this.closed=!1,this.connect()}stop(){this.closed=!0,this.ws?.close(),this.ws=null,this.pendingConnectError=void 0,this.pendingDeviceTokenRetry=!1,this.deviceTokenRetryBudgetUsed=!1,this.flushPending(Error(`gateway client stopped`))}get connected(){return this.ws?.readyState===WebSocket.OPEN}connect(){this.closed||(this.ws=new WebSocket(this.opts.url),this.ws.addEventListener(`open`,()=>this.queueConnect()),this.ws.addEventListener(`message`,e=>this.handleMessage(String(e.data??``))),this.ws.addEventListener(`close`,e=>{let t=String(e.reason??``),n=this.pendingConnectError;this.pendingConnectError=void 0,this.ws=null,this.flushPending(Error(`gateway closed (${e.code}): ${t}`)),this.opts.onClose?.({code:e.code,reason:t,error:n}),!(Qt(n)===R.AUTH_TOKEN_MISMATCH&&this.deviceTokenRetryBudgetUsed&&!this.pendingDeviceTokenRetry)&&($t(n)||this.scheduleReconnect())}),this.ws.addEventListener(`error`,()=>{}))}scheduleReconnect(){if(this.closed)return;let e=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*1.7,15e3),window.setTimeout(()=>this.connect(),e)}flushPending(e){for(let[,t]of this.pending)t.reject(e);this.pending.clear()}buildConnectClient(){return{id:this.opts.clientName??ye.CONTROL_UI,version:this.opts.clientVersion??`control-ui`,platform:this.opts.platform??navigator.platform??`web`,mode:this.opts.mode??be.WEBCHAT,instanceId:this.opts.instanceId}}buildConnectParams(e){return{minProtocol:3,maxProtocol:3,client:e.client,role:e.role,scopes:e.scopes,device:e.device,caps:[`tool-events`],auth:e.auth,userAgent:navigator.userAgent,locale:navigator.language}}async buildConnectPlan(){let e=tn,t=[...nn],n=this.buildConnectClient(),r=this.opts.token?.trim()||void 0,i=this.opts.password?.trim()||void 0,a=typeof crypto<`u`&&!!crypto.subtle,o=null,s={authToken:r,authPassword:i,canFallbackToShared:!1};return a&&(o=await Wt(),s=this.selectConnectAuth({role:e,deviceId:o.deviceId}),this.pendingDeviceTokenRetry&&s.authDeviceToken&&(this.pendingDeviceTokenRetry=!1)),{role:e,scopes:t,client:n,explicitGatewayToken:r,selectedAuth:s,auth:an(s),deviceIdentity:o,device:await on({deviceIdentity:o,client:n,role:e,scopes:t,authToken:s.authToken,connectNonce:this.connectNonce})}}handleConnectHello(e,t){this.pendingDeviceTokenRetry=!1,this.deviceTokenRetryBudgetUsed=!1,e?.auth?.deviceToken&&t.deviceIdentity&&Ae({deviceId:t.deviceIdentity.deviceId,role:e.auth.role??t.role,token:e.auth.deviceToken,scopes:e.auth.scopes??[]}),this.backoffMs=800,this.opts.onHello?.(e)}handleConnectFailure(e,t){let n=e instanceof Zt?Qt(e):null,r=e instanceof Zt?ge(e.details):{},i=r.recommendedNextStep===`retry_with_device_token`,a=r.canRetryWithDeviceToken===!0||i||n===R.AUTH_TOKEN_MISMATCH;sn({deviceTokenRetryBudgetUsed:this.deviceTokenRetryBudgetUsed,authDeviceToken:t.selectedAuth.authDeviceToken,explicitGatewayToken:t.explicitGatewayToken,deviceIdentity:t.deviceIdentity,storedToken:t.selectedAuth.storedToken,canRetryWithDeviceTokenHint:a,url:this.opts.url})&&(this.pendingDeviceTokenRetry=!0,this.deviceTokenRetryBudgetUsed=!0),e instanceof Zt?this.pendingConnectError={code:e.gatewayCode,message:e.message,details:e.details}:this.pendingConnectError=void 0,t.selectedAuth.canFallbackToShared&&t.deviceIdentity&&n===R.AUTH_DEVICE_TOKEN_MISMATCH&&je({deviceId:t.deviceIdentity.deviceId,role:t.role}),this.ws?.close(rn,`connect failed`)}async sendConnect(){if(this.connectSent)return;this.connectSent=!0,this.connectTimer!==null&&(window.clearTimeout(this.connectTimer),this.connectTimer=null);let e=await this.buildConnectPlan();this.request(`connect`,this.buildConnectParams(e)).then(t=>this.handleConnectHello(t,e)).catch(t=>this.handleConnectFailure(t,e))}handleMessage(e){let t;try{t=JSON.parse(e)}catch{return}let n=t;if(n.type===`event`){let e=t;if(e.event===`connect.challenge`){let t=e.payload,n=t&&typeof t.nonce==`string`?t.nonce:null;n&&(this.connectNonce=n,this.sendConnect());return}let n=typeof e.seq==`number`?e.seq:null;n!==null&&(this.lastSeq!==null&&n>this.lastSeq+1&&this.opts.onGap?.({expected:this.lastSeq+1,received:n}),this.lastSeq=n);try{this.opts.onEvent?.(e)}catch(e){console.error(`[gateway] event handler error:`,e)}return}if(n.type===`res`){let e=t,n=this.pending.get(e.id);if(!n)return;this.pending.delete(e.id),e.ok?n.resolve(e.payload):n.reject(new Zt({code:e.error?.code??`UNAVAILABLE`,message:e.error?.message??`request failed`,details:e.error?.details}));return}}selectConnectAuth(e){let t=this.opts.token?.trim()||void 0,n=this.opts.password?.trim()||void 0,r=ke({deviceId:e.deviceId,role:e.role}),i=r?.scopes??[],a=e.role!==`operator`||i.includes(`operator.read`)||i.includes(`operator.write`)||i.includes(`operator.admin`)?r?.token:void 0,o=this.pendingDeviceTokenRetry&&!!t&&!!a&&en(this.opts.url),s=t||n?void 0:a??void 0;return{authToken:t??s,authDeviceToken:o?a??void 0:void 0,authPassword:n,resolvedDeviceToken:s,storedToken:a??void 0,canFallbackToShared:!!(a&&t)}}request(e,t){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)return Promise.reject(Error(`gateway not connected`));let n=Xt(),r={type:`req`,id:n,method:e,params:t},i=new Promise((e,t)=>{this.pending.set(n,{resolve:t=>e(t),reject:t})});return this.ws.send(JSON.stringify(r)),i}queueConnect(){this.connectNonce=null,this.connectSent=!1,this.connectTimer!==null&&window.clearTimeout(this.connectTimer),this.connectTimer=window.setTimeout(()=>{this.sendConnect()},750)}};function ln(e){return e instanceof Zt?Qt(e)===R.AUTH_UNAUTHORIZED?!0:e.message.includes(`missing scope: operator.read`):!1}function un(e){return`This connection is missing operator.read, so ${e} cannot be loaded yet.`}async function dn(e,t){if(!(!e.client||!e.connected)&&!e.channelsLoading){e.channelsLoading=!0,e.channelsError=null;try{e.channelsSnapshot=await e.client.request(`channels.status`,{probe:t,timeoutMs:8e3}),e.channelsLastSuccess=Date.now()}catch(t){ln(t)?(e.channelsSnapshot=null,e.channelsError=un(`channel status`)):e.channelsError=String(t)}finally{e.channelsLoading=!1}}}async function fn(e,t){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{let n=await e.client.request(`web.login.start`,{force:t,timeoutMs:3e4});e.whatsappLoginMessage=n.message??null,e.whatsappLoginQrDataUrl=n.qrDataUrl??null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function pn(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{let t=await e.client.request(`web.login.wait`,{timeoutMs:12e4});e.whatsappLoginMessage=t.message??null,e.whatsappLoginConnected=t.connected??null,t.connected&&(e.whatsappLoginQrDataUrl=null)}catch(t){e.whatsappLoginMessage=String(t),e.whatsappLoginConnected=null}finally{e.whatsappBusy=!1}}}async function mn(e){if(!(!e.client||!e.connected||e.whatsappBusy)){e.whatsappBusy=!0;try{await e.client.request(`channels.logout`,{channel:`whatsapp`}),e.whatsappLoginMessage=`Logged out.`,e.whatsappLoginQrDataUrl=null,e.whatsappLoginConnected=null}catch(t){e.whatsappLoginMessage=String(t)}finally{e.whatsappBusy=!1}}}function hn(e){if(e)return Array.isArray(e.type)?e.type.filter(e=>e!==`null`)[0]??e.type[0]:e.type}function gn(e){if(!e)return``;if(e.default!==void 0)return e.default;switch(hn(e)){case`object`:return{};case`array`:return[];case`boolean`:return!1;case`number`:case`integer`:return 0;case`string`:return``;default:return``}}function _n(e){return e.filter(e=>typeof e==`string`).join(`.`)}function vn(e,t){let n=_n(e),r=t[n];if(r)return r;let i=n.split(`.`);for(let[e,n]of Object.entries(t)){if(!e.includes(`*`))continue;let t=e.split(`.`);if(t.length!==i.length)continue;let r=!0;for(let e=0;e<i.length;e+=1)if(t[e]!==`*`&&t[e]!==i[e]){r=!1;break}if(r)return n}}function yn(e){return e.replace(/_/g,` `).replace(/([a-z0-9])([A-Z])/g,`$1 $2`).replace(/\s+/g,` `).replace(/^./,e=>e.toUpperCase())}var bn=[`maxtokens`,`maxoutputtokens`,`maxinputtokens`,`maxcompletiontokens`,`contexttokens`,`totaltokens`,`tokencount`,`tokenlimit`,`tokenbudget`,`passwordfile`],xn=[/token$/i,/password/i,/secret/i,/api.?key/i,/serviceaccount(?:ref)?$/i],Sn=/^\$\{[^}]*\}$/,Cn=`[redacted - click reveal to view]`;function wn(e){return Sn.test(e.trim())}function Tn(e){let t=e.toLowerCase();return!bn.some(e=>t.endsWith(e))&&xn.some(t=>t.test(e))}function En(e){return typeof e==`string`?e.trim().length>0&&!wn(e):e!=null}function Dn(e){return e?.sensitive??!1}function On(e,t,n){let r=_n(t);return(Dn(vn(t,n))||Tn(r))&&En(e)?!0:Array.isArray(e)?e.some((e,r)=>On(e,[...t,r],n)):e&&typeof e==`object`?Object.entries(e).some(([e,r])=>On(r,[...t,e],n)):!1}function kn(e,t,n){if(e==null)return 0;let r=_n(t);return(Dn(vn(t,n))||Tn(r))&&En(e)?1:Array.isArray(e)?e.reduce((e,r,i)=>e+kn(r,[...t,i],n),0):e&&typeof e==`object`?Object.entries(e).reduce((e,[r,i])=>e+kn(i,[...t,r],n),0):0}function An(e,t){let n=e.trim();if(n===``)return;let r=Number(n);return!Number.isFinite(r)||t&&!Number.isInteger(r)?e:r}function jn(e){let t=e.trim();return t===`true`?!0:t===`false`?!1:e}function Mn(e,t){if(e==null)return e;if(t.allOf&&t.allOf.length>0){let n=e;for(let e of t.allOf)n=Mn(n,e);return n}let n=hn(t);if(t.anyOf||t.oneOf){let n=(t.anyOf??t.oneOf??[]).filter(e=>!(e.type===`null`||Array.isArray(e.type)&&e.type.includes(`null`)));if(n.length===1)return Mn(e,n[0]);if(typeof e==`string`)for(let t of n){let n=hn(t);if(n===`number`||n===`integer`){let t=An(e,n===`integer`);if(t===void 0||typeof t==`number`)return t}if(n===`boolean`){let t=jn(e);if(typeof t==`boolean`)return t}}for(let t of n){let n=hn(t);if(n===`object`&&typeof e==`object`&&!Array.isArray(e)||n===`array`&&Array.isArray(e))return Mn(e,t)}return e}if(n===`number`||n===`integer`){if(typeof e==`string`){let t=An(e,n===`integer`);if(t===void 0||typeof t==`number`)return t}return e}if(n===`boolean`){if(typeof e==`string`){let t=jn(e);if(typeof t==`boolean`)return t}return e}if(n===`object`){if(typeof e!=`object`||Array.isArray(e))return e;let n=e,r=t.properties??{},i=t.additionalProperties&&typeof t.additionalProperties==`object`?t.additionalProperties:null,a={};for(let[e,t]of Object.entries(n)){let n=r[e]??i,o=n?Mn(t,n):t;o!==void 0&&(a[e]=o)}return a}if(n===`array`){if(!Array.isArray(e))return e;if(Array.isArray(t.items)){let n=t.items;return e.map((e,t)=>{let r=t<n.length?n[t]:void 0;return r?Mn(e,r):e})}let n=t.items;return n?e.map(e=>Mn(e,n)).filter(e=>e!==void 0):e}return e}function Nn(e){return typeof structuredClone==`function`?structuredClone(e):JSON.parse(JSON.stringify(e))}function Pn(e){return`${JSON.stringify(e,null,2).trimEnd()}\n`}var Fn=new Set([`__proto__`,`prototype`,`constructor`]);function In(e){return typeof e==`string`&&Fn.has(e)}function Ln(e,t,n){if(t.length===0||t.some(In))return;let r=e;for(let e=0;e<t.length-1;e+=1){let n=t[e],i=t[e+1];if(typeof n==`number`){if(!Array.isArray(r))return;r[n]??(r[n]=typeof i==`number`?[]:{}),r=r[n]}else{if(typeof r!=`object`||!r)return;let e=r;e[n]??(e[n]=typeof i==`number`?[]:{}),r=e[n]}}let i=t[t.length-1];if(typeof i==`number`){Array.isArray(r)&&(r[i]=n);return}typeof r==`object`&&r&&(r[i]=n)}function Rn(e,t){if(t.length===0||t.some(In))return;let n=e;for(let e=0;e<t.length-1;e+=1){let r=t[e];if(typeof r==`number`){if(!Array.isArray(n))return;n=n[r]}else{if(typeof n!=`object`||!n)return;n=n[r]}if(n==null)return}let r=t[t.length-1];if(typeof r==`number`){Array.isArray(n)&&n.splice(r,1);return}typeof n==`object`&&n&&delete n[r]}async function zn(e){if(!(!e.client||!e.connected)){e.configLoading=!0,e.lastError=null;try{Hn(e,await e.client.request(`config.get`,{}))}catch(t){e.lastError=String(t)}finally{e.configLoading=!1}}}async function Bn(e){if(!(!e.client||!e.connected)&&!e.configSchemaLoading){e.configSchemaLoading=!0;try{Vn(e,await e.client.request(`config.schema`,{}))}catch(t){e.lastError=String(t)}finally{e.configSchemaLoading=!1}}}function Vn(e,t){e.configSchema=t.schema??null,e.configUiHints=t.uiHints??{},e.configSchemaVersion=t.version??null}function Hn(e,t){e.configSnapshot=t;let n=typeof t.raw==`string`?t.raw:t.config&&typeof t.config==`object`?Pn(t.config):e.configRaw;!e.configFormDirty||e.configFormMode===`raw`?e.configRaw=n:e.configForm?e.configRaw=Pn(e.configForm):e.configRaw=n,e.configValid=typeof t.valid==`boolean`?t.valid:null,e.configIssues=Array.isArray(t.issues)?t.issues:[],e.configFormDirty||(e.configForm=Nn(t.config??{}),e.configFormOriginal=Nn(t.config??{}),e.configRawOriginal=n)}function Un(e){return!e||typeof e!=`object`||Array.isArray(e)?null:e}function Wn(e){if(e.configFormMode!==`form`||!e.configForm)return e.configRaw;let t=Un(e.configSchema);return Pn(t?Mn(e.configForm,t):e.configForm)}async function Gn(e){if(!(!e.client||!e.connected)){e.configSaving=!0,e.lastError=null;try{let t=Wn(e),n=e.configSnapshot?.hash;if(!n){e.lastError=`Config hash missing; reload and retry.`;return}await e.client.request(`config.set`,{raw:t,baseHash:n}),e.configFormDirty=!1,await zn(e)}catch(t){e.lastError=String(t)}finally{e.configSaving=!1}}}async function Kn(e){if(!(!e.client||!e.connected)){e.configApplying=!0,e.lastError=null;try{let t=Wn(e),n=e.configSnapshot?.hash;if(!n){e.lastError=`Config hash missing; reload and retry.`;return}await e.client.request(`config.apply`,{raw:t,baseHash:n,sessionKey:e.applySessionKey}),e.configFormDirty=!1,await zn(e)}catch(t){e.lastError=String(t)}finally{e.configApplying=!1}}}async function qn(e){if(!(!e.client||!e.connected)){e.updateRunning=!0,e.lastError=null;try{let t=await e.client.request(`update.run`,{sessionKey:e.applySessionKey});t&&t.ok===!1&&(e.lastError=`Update ${t.result?.status??`error`}: ${t.result?.reason??`Update failed.`}`)}catch(t){e.lastError=String(t)}finally{e.updateRunning=!1}}}function U(e,t,n){let r=Nn(e.configForm??e.configSnapshot?.config??{});Ln(r,t,n),e.configForm=r,e.configFormDirty=!0,e.configFormMode===`form`&&(e.configRaw=Pn(r))}function Jn(e,t){let n=Nn(e.configForm??e.configSnapshot?.config??{});Rn(n,t),e.configForm=n,e.configFormDirty=!0,e.configFormMode===`form`&&(e.configRaw=Pn(n))}function Yn(e,t){let n=t.trim();if(!n)return-1;let r=e?.agents?.list;return Array.isArray(r)?r.findIndex(e=>e&&typeof e==`object`&&`id`in e&&e.id===n):-1}function Xn(e,t){let n=t.trim();if(!n)return-1;let r=e.configForm??e.configSnapshot?.config,i=Yn(r,n);if(i>=0)return i;let a=r?.agents?.list,o=Array.isArray(a)?a.length:0;return U(e,[`agents`,`list`,o,`id`],n),o}async function Zn(e){if(!(!e.client||!e.connected))try{await e.client.request(`config.openFile`,{})}catch{let t=e.configSnapshot?.path;if(t)try{await navigator.clipboard.writeText(t)}catch{}}}function Qn(e){let{values:t,original:n}=e;return t.name!==n.name||t.displayName!==n.displayName||t.about!==n.about||t.picture!==n.picture||t.banner!==n.banner||t.website!==n.website||t.nip05!==n.nip05||t.lud16!==n.lud16}function $n(e){let{state:t,callbacks:r,accountId:a}=e,o=Qn(t),s=(e,a,o={})=>{let{type:s=`text`,placeholder:c,maxLength:l,help:u}=o,d=t.values[e]??``,f=t.fieldErrors[e],p=`nostr-profile-${e}`;return s===`textarea`?n`
        <div class="form-field" style="margin-bottom: 12px;">
          <label for="${p}" style="display: block; margin-bottom: 4px; font-weight: 500;">
            ${a}
          </label>
          <textarea
            id="${p}"
            .value=${d}
            placeholder=${c??``}
            maxlength=${l??2e3}
            rows="3"
            style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: var(--radius-sm); resize: vertical; font-family: inherit;"
            @input=${t=>{let n=t.target;r.onFieldChange(e,n.value)}}
            ?disabled=${t.saving}
          ></textarea>
          ${u?n`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${u}</div>`:i}
          ${f?n`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${f}</div>`:i}
        </div>
      `:n`
      <div class="form-field" style="margin-bottom: 12px;">
        <label for="${p}" style="display: block; margin-bottom: 4px; font-weight: 500;">
          ${a}
        </label>
        <input
          id="${p}"
          type=${s}
          .value=${d}
          placeholder=${c??``}
          maxlength=${l??256}
          style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: var(--radius-sm);"
          @input=${t=>{let n=t.target;r.onFieldChange(e,n.value)}}
          ?disabled=${t.saving}
        />
        ${u?n`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${u}</div>`:i}
        ${f?n`<div style="font-size: 12px; color: var(--danger-color); margin-top: 2px;">${f}</div>`:i}
      </div>
    `};return n`
    <div class="nostr-profile-form" style="padding: 16px; background: var(--bg-secondary); border-radius: var(--radius-md); margin-top: 12px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <div style="font-weight: 600; font-size: 16px;">Edit Profile</div>
        <div style="font-size: 12px; color: var(--text-muted);">Account: ${a}</div>
      </div>

      ${t.error?n`<div class="callout danger" style="margin-bottom: 12px;">${t.error}</div>`:i}

      ${t.success?n`<div class="callout success" style="margin-bottom: 12px;">${t.success}</div>`:i}

      ${(()=>{let e=t.values.picture;return e?n`
      <div style="margin-bottom: 12px;">
        <img
          src=${e}
          alt="Profile picture preview"
          style="max-width: 80px; max-height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--border-color);"
          @error=${e=>{let t=e.target;t.style.display=`none`}}
          @load=${e=>{let t=e.target;t.style.display=`block`}}
        />
      </div>
    `:i})()}

      ${s(`name`,`Username`,{placeholder:`satoshi`,maxLength:256,help:`Short username (e.g., satoshi)`})}

      ${s(`displayName`,`Display Name`,{placeholder:`Satoshi Nakamoto`,maxLength:256,help:`Your full display name`})}

      ${s(`about`,`Bio`,{type:`textarea`,placeholder:`Tell people about yourself...`,maxLength:2e3,help:`A brief bio or description`})}

      ${s(`picture`,`Avatar URL`,{type:`url`,placeholder:`https://example.com/avatar.jpg`,help:`HTTPS URL to your profile picture`})}

      ${t.showAdvanced?n`
            <div style="border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;">
              <div style="font-weight: 500; margin-bottom: 12px; color: var(--text-muted);">Advanced</div>

              ${s(`banner`,`Banner URL`,{type:`url`,placeholder:`https://example.com/banner.jpg`,help:`HTTPS URL to a banner image`})}

              ${s(`website`,`Website`,{type:`url`,placeholder:`https://example.com`,help:`Your personal website`})}

              ${s(`nip05`,`NIP-05 Identifier`,{placeholder:`you@example.com`,help:`Verifiable identifier (e.g., you@domain.com)`})}

              ${s(`lud16`,`Lightning Address`,{placeholder:`you@getalby.com`,help:`Lightning address for tips (LUD-16)`})}
            </div>
          `:i}

      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        <button
          class="btn primary"
          @click=${r.onSave}
          ?disabled=${t.saving||!o}
        >
          ${t.saving?`Saving...`:`Save & Publish`}
        </button>

        <button
          class="btn"
          @click=${r.onImport}
          ?disabled=${t.importing||t.saving}
        >
          ${t.importing?`Importing...`:`Import from Relays`}
        </button>

        <button
          class="btn"
          @click=${r.onToggleAdvanced}
        >
          ${t.showAdvanced?`Hide Advanced`:`Show Advanced`}
        </button>

        <button
          class="btn"
          @click=${r.onCancel}
          ?disabled=${t.saving}
        >
          Cancel
        </button>
      </div>

      ${o?n`
              <div style="font-size: 12px; color: var(--warning-color); margin-top: 8px">
                You have unsaved changes
              </div>
            `:i}
    </div>
  `}function er(e){let t={name:e?.name??``,displayName:e?.displayName??``,about:e?.about??``,picture:e?.picture??``,banner:e?.banner??``,website:e?.website??``,nip05:e?.nip05??``,lud16:e?.lud16??``};return{values:t,original:{...t},saving:!1,importing:!1,error:null,success:null,fieldErrors:{},showAdvanced:!!(e?.banner||e?.website||e?.nip05||e?.lud16)}}async function tr(e,t){await fn(e,t),await dn(e,!0)}async function nr(e){await pn(e),await dn(e,!0)}async function rr(e){await mn(e),await dn(e,!0)}async function ir(e){await Gn(e),await zn(e),await dn(e,!0)}async function ar(e){await zn(e),await dn(e,!0)}function or(e){if(!Array.isArray(e))return{};let t={};for(let n of e){if(typeof n!=`string`)continue;let[e,...r]=n.split(`:`);if(!e||r.length===0)continue;let i=e.trim(),a=r.join(`:`).trim();i&&a&&(t[i]=a)}return t}function sr(e){return(e.channelsSnapshot?.channelAccounts?.nostr??[])[0]?.accountId??e.nostrProfileAccountId??`default`}function cr(e,t=``){return`/api/channels/nostr/${encodeURIComponent(e)}/profile${t}`}function lr(e){let t=e.hello?.auth?.deviceToken?.trim();if(t)return`Bearer ${t}`;let n=e.settings.token.trim();if(n)return`Bearer ${n}`;let r=e.password.trim();return r?`Bearer ${r}`:null}function ur(e){let t=lr(e);return t?{Authorization:t}:{}}function dr(e,t,n){e.nostrProfileAccountId=t,e.nostrProfileFormState=er(n??void 0)}function fr(e){e.nostrProfileFormState=null,e.nostrProfileAccountId=null}function pr(e,t,n){let r=e.nostrProfileFormState;r&&(e.nostrProfileFormState={...r,values:{...r.values,[t]:n},fieldErrors:{...r.fieldErrors,[t]:``}})}function mr(e){let t=e.nostrProfileFormState;t&&(e.nostrProfileFormState={...t,showAdvanced:!t.showAdvanced})}async function hr(e){let t=e.nostrProfileFormState;if(!t||t.saving)return;let n=sr(e);e.nostrProfileFormState={...t,saving:!0,error:null,success:null,fieldErrors:{}};try{let r=await fetch(cr(n),{method:`PUT`,headers:{"Content-Type":`application/json`,...ur(e)},body:JSON.stringify(t.values)}),i=await r.json().catch(()=>null);if(!r.ok||i?.ok===!1||!i){let n=i?.error??`Profile update failed (${r.status})`;e.nostrProfileFormState={...t,saving:!1,error:n,success:null,fieldErrors:or(i?.details)};return}if(!i.persisted){e.nostrProfileFormState={...t,saving:!1,error:`Profile publish failed on all relays.`,success:null};return}e.nostrProfileFormState={...t,saving:!1,error:null,success:`Profile published to relays.`,fieldErrors:{},original:{...t.values}},await dn(e,!0)}catch(n){e.nostrProfileFormState={...t,saving:!1,error:`Profile update failed: ${String(n)}`,success:null}}}async function gr(e){let t=e.nostrProfileFormState;if(!t||t.importing)return;let n=sr(e);e.nostrProfileFormState={...t,importing:!0,error:null,success:null};try{let r=await fetch(cr(n,`/import`),{method:`POST`,headers:{"Content-Type":`application/json`,...ur(e)},body:JSON.stringify({autoMerge:!0})}),i=await r.json().catch(()=>null);if(!r.ok||i?.ok===!1||!i){let n=i?.error??`Profile import failed (${r.status})`;e.nostrProfileFormState={...t,importing:!1,error:n,success:null};return}let a=i.merged??i.imported??null,o=a?{...t.values,...a}:t.values,s=!!(o.banner||o.website||o.nip05||o.lud16);e.nostrProfileFormState={...t,importing:!1,values:o,error:null,success:i.saved?`Profile imported from relays. Review and publish.`:`Profile imported. Review and publish.`,showAdvanced:s},i.saved&&await dn(e,!0)}catch(n){e.nostrProfileFormState={...t,importing:!1,error:`Profile import failed: ${String(n)}`,success:null}}}var _r=450;function vr(e,t){return typeof e.querySelector==`function`?e.querySelector(t):null}function yr(e,t=!1,n=!1){e.chatScrollFrame&&cancelAnimationFrame(e.chatScrollFrame),e.chatScrollTimeout!=null&&(clearTimeout(e.chatScrollTimeout),e.chatScrollTimeout=null);let r=()=>{let t=vr(e,`.chat-thread`);if(t){let e=getComputedStyle(t).overflowY;if(e===`auto`||e===`scroll`||t.scrollHeight-t.clientHeight>1)return t}return document.scrollingElement??document.documentElement};e.updateComplete.then(()=>{e.chatScrollFrame=requestAnimationFrame(()=>{e.chatScrollFrame=null;let i=r();if(!i)return;let a=i.scrollHeight-i.scrollTop-i.clientHeight,o=t&&!e.chatHasAutoScrolled;if(!(o||e.chatUserNearBottom||a<_r)){e.chatNewMessagesBelow=!0;return}o&&(e.chatHasAutoScrolled=!0);let s=n&&(typeof window>`u`||typeof window.matchMedia!=`function`||!window.matchMedia(`(prefers-reduced-motion: reduce)`).matches),c=i.scrollHeight;typeof i.scrollTo==`function`?i.scrollTo({top:c,behavior:s?`smooth`:`auto`}):i.scrollTop=c,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1;let l=o?150:120;e.chatScrollTimeout=window.setTimeout(()=>{e.chatScrollTimeout=null;let t=r();if(!t)return;let n=t.scrollHeight-t.scrollTop-t.clientHeight;(o||e.chatUserNearBottom||n<_r)&&(t.scrollTop=t.scrollHeight,e.chatUserNearBottom=!0)},l)})})}function br(e,t=!1){e.logsScrollFrame&&cancelAnimationFrame(e.logsScrollFrame),e.updateComplete.then(()=>{e.logsScrollFrame=requestAnimationFrame(()=>{e.logsScrollFrame=null;let n=vr(e,`.log-stream`);if(!n)return;let r=n.scrollHeight-n.scrollTop-n.clientHeight;(t||r<80)&&(n.scrollTop=n.scrollHeight)})})}function xr(e,t){let n=t.currentTarget;n&&(e.chatUserNearBottom=n.scrollHeight-n.scrollTop-n.clientHeight<_r,e.chatUserNearBottom&&(e.chatNewMessagesBelow=!1))}function Sr(e,t){let n=t.currentTarget;n&&(e.logsAtBottom=n.scrollHeight-n.scrollTop-n.clientHeight<80)}function Cr(e){e.chatHasAutoScrolled=!1,e.chatUserNearBottom=!0,e.chatNewMessagesBelow=!1}function wr(e,t){if(e.length===0)return;let n=new Blob([`${e.join(`
`)}\n`],{type:`text/plain`}),r=URL.createObjectURL(n),i=document.createElement(`a`),a=new Date().toISOString().slice(0,19).replace(/[:T]/g,`-`);i.href=r,i.download=`openclaw-logs-${t}-${a}.log`,i.click(),URL.revokeObjectURL(r)}function Tr(e){if(typeof ResizeObserver>`u`)return;let t=vr(e,`.topbar`);if(!t)return;let n=()=>{let{height:n}=t.getBoundingClientRect();e.style.setProperty(`--topbar-height`,`${n}px`)};n(),e.topbarObserver=new ResizeObserver(()=>n()),e.topbarObserver.observe(t)}var Er=`operator`,Dr=`operator.admin`,Or=`operator.read`,kr=`operator.write`,Ar=`operator.`;function jr(e){let t=new Set;for(let n of e){let e=n.trim();e&&t.add(e)}return[...t]}function Mr(e,t){return t.has(Dr)&&e.startsWith(Ar)?!0:e===Or?t.has(Or)||t.has(kr):e===kr?t.has(kr):t.has(e)}function Nr(e){let t=jr(e.requestedScopes);if(t.length===0)return!0;let n=jr(e.allowedScopes);if(n.length===0)return!1;let r=new Set(n);return e.role.trim()===Er?t.every(e=>Mr(e,r)):t.every(e=>r.has(e))}async function Pr(e){if(!(!e.client||!e.connected)&&!e.debugLoading){e.debugLoading=!0;try{let[t,n,r,i]=await Promise.all([e.client.request(`status`,{}),e.client.request(`health`,{}),e.client.request(`models.list`,{}),e.client.request(`last-heartbeat`,{})]);e.debugStatus=t,e.debugHealth=n;let a=r;e.debugModels=Array.isArray(a?.models)?a?.models:[],e.debugHeartbeat=i}catch(t){e.debugCallError=String(t)}finally{e.debugLoading=!1}}}async function Fr(e){if(!(!e.client||!e.connected)){e.debugCallError=null,e.debugCallResult=null;try{let t=e.debugCallParams.trim()?JSON.parse(e.debugCallParams):{},n=await e.client.request(e.debugCallMethod.trim(),t);e.debugCallResult=JSON.stringify(n,null,2)}catch(t){e.debugCallError=String(t)}}}var Ir=2e3,Lr=new Set([`trace`,`debug`,`info`,`warn`,`error`,`fatal`]);function Rr(e){if(typeof e!=`string`)return null;let t=e.trim();if(!t.startsWith(`{`)||!t.endsWith(`}`))return null;try{let e=JSON.parse(t);return!e||typeof e!=`object`?null:e}catch{return null}}function zr(e){if(typeof e!=`string`)return null;let t=e.toLowerCase();return Lr.has(t)?t:null}function Br(e){if(!e.trim())return{raw:e,message:e};try{let t=JSON.parse(e),n=t&&typeof t._meta==`object`&&t._meta!==null?t._meta:null,r=typeof t.time==`string`?t.time:typeof n?.date==`string`?n?.date:null,i=zr(n?.logLevelName??n?.level),a=typeof t[0]==`string`?t[0]:typeof n?.name==`string`?n?.name:null,o=Rr(a),s=null;o&&(typeof o.subsystem==`string`?s=o.subsystem:typeof o.module==`string`&&(s=o.module)),!s&&a&&a.length<120&&(s=a);let c=null;return typeof t[1]==`string`?c=t[1]:typeof t[2]==`string`?c=t[2]:!o&&typeof t[0]==`string`?c=t[0]:typeof t.message==`string`&&(c=t.message),{raw:e,time:r,level:i,subsystem:s,message:c??e,meta:n??void 0}}catch{return{raw:e,message:e}}}async function Vr(e,t){if(!(!e.client||!e.connected)&&!(e.logsLoading&&!t?.quiet)){t?.quiet||(e.logsLoading=!0),e.logsError=null;try{let n=await e.client.request(`logs.tail`,{cursor:t?.reset?void 0:e.logsCursor??void 0,limit:e.logsLimit,maxBytes:e.logsMaxBytes}),r=(Array.isArray(n.lines)?n.lines.filter(e=>typeof e==`string`):[]).map(Br);e.logsEntries=t?.reset||n.reset||e.logsCursor==null?r:[...e.logsEntries,...r].slice(-Ir),typeof n.cursor==`number`&&(e.logsCursor=n.cursor),typeof n.file==`string`&&(e.logsFile=n.file),e.logsTruncated=!!n.truncated,e.logsLastFetchAt=Date.now()}catch(t){ln(t)?(e.logsEntries=[],e.logsError=un(`logs`)):e.logsError=String(t)}finally{t?.quiet||(e.logsLoading=!1)}}}async function Hr(e,t){if(!(!e.client||!e.connected)&&!e.nodesLoading){e.nodesLoading=!0,t?.quiet||(e.lastError=null);try{let t=await e.client.request(`node.list`,{});e.nodes=Array.isArray(t.nodes)?t.nodes:[]}catch(n){t?.quiet||(e.lastError=String(n))}finally{e.nodesLoading=!1}}}function Ur(e){e.nodesPollInterval??=window.setInterval(()=>void Hr(e,{quiet:!0}),5e3)}function Wr(e){e.nodesPollInterval!=null&&(clearInterval(e.nodesPollInterval),e.nodesPollInterval=null)}function Gr(e){e.logsPollInterval??=window.setInterval(()=>{e.tab===`logs`&&Vr(e,{quiet:!0})},2e3)}function Kr(e){e.logsPollInterval!=null&&(clearInterval(e.logsPollInterval),e.logsPollInterval=null)}function qr(e){e.debugPollInterval??=window.setInterval(()=>{e.tab===`debug`&&Pr(e)},3e3)}function Jr(e){e.debugPollInterval!=null&&(clearInterval(e.debugPollInterval),e.debugPollInterval=null)}async function Yr(e,t){if(!(!e.client||!e.connected||e.agentIdentityLoading)&&!e.agentIdentityById[t]){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{let n=await e.client.request(`agent.identity.get`,{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}catch(t){e.agentIdentityError=String(t)}finally{e.agentIdentityLoading=!1}}}async function Xr(e,t){if(!e.client||!e.connected||e.agentIdentityLoading)return;let n=t.filter(t=>!e.agentIdentityById[t]);if(n.length!==0){e.agentIdentityLoading=!0,e.agentIdentityError=null;try{for(let t of n){let n=await e.client.request(`agent.identity.get`,{agentId:t});n&&(e.agentIdentityById={...e.agentIdentityById,[t]:n})}}catch(t){e.agentIdentityError=String(t)}finally{e.agentIdentityLoading=!1}}}async function Zr(e,t){if(!(!e.client||!e.connected)&&!e.agentSkillsLoading){e.agentSkillsLoading=!0,e.agentSkillsError=null;try{let n=await e.client.request(`skills.status`,{agentId:t});n&&(e.agentSkillsReport=n,e.agentSkillsAgentId=t)}catch(t){e.agentSkillsError=String(t)}finally{e.agentSkillsLoading=!1}}}function Qr(e,t){let n=e.trim();if(!n)return``;let r=t?.trim();return r?`${r}/${n}`:n}function $r(e){let t=e.trim();return t?t.includes(`/`)?{kind:`qualified`,value:t}:{kind:`raw`,value:t}:null}function ei(e,t){return ti(e,t).value}function ti(e,t){if(!e)return{value:``,source:`empty`,reason:`empty`};let n=e?.value.trim();if(!n)return{value:``,source:`empty`,reason:`empty`};if(e.kind===`qualified`)return{value:n,source:`qualified`};let r=``;for(let e of t){if(e.id.trim().toLowerCase()!==n.toLowerCase())continue;let t=Qr(e.id,e.provider);if(!r){r=t;continue}if(r.toLowerCase()!==t.toLowerCase())return{value:n,source:`raw`,reason:`ambiguous`}}return r?{value:r,source:`catalog`}:{value:n,source:`raw`,reason:`missing`}}function ni(e,t){return typeof e==`string`?Qr(e,t):``}function ri(e,t,n){if(typeof e!=`string`)return{value:``,source:`empty`,reason:`empty`};let r=e.trim();if(!r)return{value:``,source:`empty`,reason:`empty`};let i=ti($r(r),n);return i.source===`qualified`||i.source===`catalog`?i:{value:ni(r,t),source:`server`,reason:i.reason}}function ii(e,t,n){return ri(e,t,n).value}function ai(e){let t=e.trim();if(!t)return``;let n=t.indexOf(`/`);return n<=0?t:`${t.slice(n+1)} · ${t.slice(0,n)}`}function oi(e){let t=e.provider?.trim();return{value:Qr(e.id,t),label:t?`${e.id} · ${t}`:e.id}}async function si(e){if(!(!e.client||!e.connected)&&!e.agentsLoading){e.agentsLoading=!0,e.agentsError=null;try{let t=await e.client.request(`agents.list`,{});if(t){e.agentsList=t;let n=e.agentsSelectedId,r=t.agents.some(e=>e.id===n);(!n||!r)&&(e.agentsSelectedId=t.defaultId??t.agents[0]?.id??null)}}catch(t){ln(t)?(e.agentsList=null,e.agentsError=un(`agent list`)):e.agentsError=String(t)}finally{e.agentsLoading=!1}}}async function ci(e,t){let n=t.trim();if(!(!e.client||!e.connected||!n)&&!(e.toolsCatalogLoading&&e.toolsCatalogLoadingAgentId===n)){e.toolsCatalogLoading=!0,e.toolsCatalogLoadingAgentId=n,e.toolsCatalogError=null,e.toolsCatalogResult=null;try{let t=await e.client.request(`tools.catalog`,{agentId:n,includePlugins:!0});if(e.toolsCatalogLoadingAgentId!==n||e.agentsSelectedId&&e.agentsSelectedId!==n)return;e.toolsCatalogResult=t}catch(t){if(e.toolsCatalogLoadingAgentId!==n||e.agentsSelectedId&&e.agentsSelectedId!==n)return;e.toolsCatalogResult=null,e.toolsCatalogError=ln(t)?un(`tools catalog`):String(t)}finally{e.toolsCatalogLoadingAgentId===n&&(e.toolsCatalogLoadingAgentId=null,e.toolsCatalogLoading=!1)}}}async function li(e,t){let n=t.agentId.trim(),r=t.sessionKey.trim(),i=ui(e,{agentId:n,sessionKey:r});if(!(!e.client||!e.connected||!n||!r)&&!(e.toolsEffectiveLoading&&e.toolsEffectiveLoadingKey===i)){e.toolsEffectiveLoading=!0,e.toolsEffectiveLoadingKey=i,e.toolsEffectiveResultKey=null,e.toolsEffectiveError=null,e.toolsEffectiveResult=null;try{let t=await e.client.request(`tools.effective`,{agentId:n,sessionKey:r});if(e.toolsEffectiveLoadingKey!==i||e.agentsSelectedId&&e.agentsSelectedId!==n)return;e.toolsEffectiveResultKey=i,e.toolsEffectiveResult=t}catch(t){if(e.toolsEffectiveLoadingKey!==i||e.agentsSelectedId&&e.agentsSelectedId!==n)return;e.toolsEffectiveResult=null,e.toolsEffectiveResultKey=null,e.toolsEffectiveError=ln(t)?un(`effective tools`):String(t)}finally{e.toolsEffectiveLoadingKey===i&&(e.toolsEffectiveLoadingKey=null,e.toolsEffectiveLoading=!1)}}}function ui(e,t){let n=t.agentId.trim(),r=t.sessionKey.trim();return`${n}:${r}:model=${fi(e,r)||`(default)`}`}function di(e){let t=e.sessionKey?.trim();if(!t||e.agentsPanel!==`tools`||!e.agentsSelectedId)return;let n=k(t);if(!(!n||e.agentsSelectedId!==n))return li(e,{agentId:n,sessionKey:t})}function fi(e,t){let n=t.trim();if(!n)return``;let r=e.chatModelCatalog??[],i=e.chatModelOverrides?.[n],a=e.sessionsResult?.defaults,o=ii(a?.model,a?.modelProvider,r);if(i===null)return o;if(i)return ti(i,r).value;let s=e.sessionsResult?.sessions?.find(e=>e.key===n);return s?.model?ii(s.model,s.modelProvider,r):o}async function pi(e){let t=e.agentsSelectedId;await Gn(e),await si(e),t&&e.agentsList?.agents.some(e=>e.id===t)&&(e.agentsSelectedId=t)}var mi={trace:!0,debug:!0,info:!0,warn:!0,error:!0,fatal:!0},hi={name:``,description:``,agentId:``,sessionKey:``,clearAgent:!1,enabled:!0,deleteAfterRun:!0,scheduleKind:`every`,scheduleAt:``,everyAmount:`30`,everyUnit:`minutes`,cronExpr:`0 7 * * *`,cronTz:``,scheduleExact:!1,staggerAmount:``,staggerUnit:`seconds`,sessionTarget:`isolated`,wakeMode:`now`,payloadKind:`agentTurn`,payloadText:``,payloadModel:``,payloadThinking:``,payloadLightContext:!1,deliveryMode:`announce`,deliveryChannel:`last`,deliveryTo:``,deliveryAccountId:``,deliveryBestEffort:!1,failureAlertMode:`inherit`,failureAlertAfter:`2`,failureAlertCooldownSeconds:`3600`,failureAlertChannel:`last`,failureAlertTo:``,failureAlertDeliveryMode:`announce`,failureAlertAccountId:``,timeoutSeconds:``},gi=`last`;function _i(e){return e.sessionTarget!==`main`&&e.payloadKind===`agentTurn`}function vi(e){return e.deliveryMode!==`announce`||_i(e)?e:{...e,deliveryMode:`none`}}function yi(e){let t={};if(e.name.trim()||(t.name=`cron.errors.nameRequired`),e.scheduleKind===`at`){let n=Date.parse(e.scheduleAt);Number.isFinite(n)||(t.scheduleAt=`cron.errors.scheduleAtInvalid`)}else if(e.scheduleKind===`every`)g(e.everyAmount,0)<=0&&(t.everyAmount=`cron.errors.everyAmountInvalid`);else if(e.cronExpr.trim()||(t.cronExpr=`cron.errors.cronExprRequired`),!e.scheduleExact){let n=e.staggerAmount.trim();n&&g(n,0)<=0&&(t.staggerAmount=`cron.errors.staggerAmountInvalid`)}if(e.payloadText.trim()||(t.payloadText=e.payloadKind===`systemEvent`?`cron.errors.systemTextRequired`:`cron.errors.agentMessageRequired`),e.payloadKind===`agentTurn`){let n=e.timeoutSeconds.trim();n&&g(n,0)<=0&&(t.timeoutSeconds=`cron.errors.timeoutInvalid`)}if(e.deliveryMode===`webhook`){let n=e.deliveryTo.trim();n?/^https?:\/\//i.test(n)||(t.deliveryTo=`cron.errors.webhookUrlInvalid`):t.deliveryTo=`cron.errors.webhookUrlRequired`}if(e.failureAlertMode===`custom`){let n=e.failureAlertAfter.trim();if(n){let e=g(n,0);(!Number.isFinite(e)||e<=0)&&(t.failureAlertAfter=`Failure alert threshold must be greater than 0.`)}let r=e.failureAlertCooldownSeconds.trim();if(r){let e=g(r,-1);(!Number.isFinite(e)||e<0)&&(t.failureAlertCooldownSeconds=`Cooldown must be 0 or greater.`)}}return t}function bi(e){return Object.keys(e).length>0}async function xi(e){if(!(!e.client||!e.connected))try{e.cronStatus=await e.client.request(`cron.status`,{})}catch(t){ln(t)?(e.cronStatus=null,e.cronError=un(`cron status`)):e.cronError=String(t)}}async function Si(e){return await wi(e,{append:!1})}function Ci(e){let t=typeof e.totalRaw==`number`&&Number.isFinite(e.totalRaw)?Math.max(0,Math.floor(e.totalRaw)):e.pageCount,n=typeof e.limitRaw==`number`&&Number.isFinite(e.limitRaw)?Math.max(1,Math.floor(e.limitRaw)):Math.max(1,e.pageCount),r=typeof e.offsetRaw==`number`&&Number.isFinite(e.offsetRaw)?Math.max(0,Math.floor(e.offsetRaw)):0,i=typeof e.hasMoreRaw==`boolean`?e.hasMoreRaw:r+e.pageCount<Math.max(t,r+e.pageCount);return{total:t,limit:n,offset:r,hasMore:i,nextOffset:typeof e.nextOffsetRaw==`number`&&Number.isFinite(e.nextOffsetRaw)?Math.max(0,Math.floor(e.nextOffsetRaw)):i?r+e.pageCount:null}}async function wi(e,t){if(!e.client||!e.connected||e.cronLoading||e.cronJobsLoadingMore)return;let n=t?.append===!0;if(n){if(!e.cronJobsHasMore)return;e.cronJobsLoadingMore=!0}else e.cronLoading=!0;e.cronError=null;try{let t=n?Math.max(0,e.cronJobsNextOffset??e.cronJobs.length):0,r=await e.client.request(`cron.list`,{includeDisabled:e.cronJobsEnabledFilter===`all`,limit:e.cronJobsLimit,offset:t,query:e.cronJobsQuery.trim()||void 0,enabled:e.cronJobsEnabledFilter,sortBy:e.cronJobsSortBy,sortDir:e.cronJobsSortDir}),i=Array.isArray(r.jobs)?r.jobs:[];e.cronJobs=n?[...e.cronJobs,...i]:i;let a=Ci({totalRaw:r.total,limitRaw:r.limit,offsetRaw:r.offset,nextOffsetRaw:r.nextOffset,hasMoreRaw:r.hasMore,pageCount:i.length});e.cronJobsTotal=Math.max(a.total,e.cronJobs.length),e.cronJobsHasMore=a.hasMore,e.cronJobsNextOffset=a.nextOffset,e.cronEditingJobId&&!e.cronJobs.some(t=>t.id===e.cronEditingJobId)&&ki(e)}catch(t){e.cronError=String(t)}finally{n?e.cronJobsLoadingMore=!1:e.cronLoading=!1}}async function Ti(e){await wi(e,{append:!0})}async function Ei(e){await wi(e,{append:!1})}function Di(e,t){typeof t.cronJobsQuery==`string`&&(e.cronJobsQuery=t.cronJobsQuery),t.cronJobsEnabledFilter&&(e.cronJobsEnabledFilter=t.cronJobsEnabledFilter),t.cronJobsScheduleKindFilter&&(e.cronJobsScheduleKindFilter=t.cronJobsScheduleKindFilter),t.cronJobsLastStatusFilter&&(e.cronJobsLastStatusFilter=t.cronJobsLastStatusFilter),t.cronJobsSortBy&&(e.cronJobsSortBy=t.cronJobsSortBy),t.cronJobsSortDir&&(e.cronJobsSortDir=t.cronJobsSortDir)}function Oi(e){return e.cronJobs.filter(t=>!(e.cronJobsScheduleKindFilter!==`all`&&t.schedule.kind!==e.cronJobsScheduleKindFilter||e.cronJobsLastStatusFilter!==`all`&&t.state?.lastStatus!==e.cronJobsLastStatusFilter))}function ki(e){e.cronEditingJobId=null}function Ai(e){e.cronForm={...hi},e.cronFieldErrors=yi(e.cronForm)}function ji(e){let t=Date.parse(e);if(!Number.isFinite(t))return``;let n=new Date(t);return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,`0`)}-${String(n.getDate()).padStart(2,`0`)}T${String(n.getHours()).padStart(2,`0`)}:${String(n.getMinutes()).padStart(2,`0`)}`}function Mi(e){if(e%864e5==0)return{everyAmount:String(Math.max(1,e/864e5)),everyUnit:`days`};if(e%36e5==0)return{everyAmount:String(Math.max(1,e/36e5)),everyUnit:`hours`};let t=Math.max(1,Math.ceil(e/6e4));return{everyAmount:String(t),everyUnit:`minutes`}}function Ni(e){return e===0?{scheduleExact:!0,staggerAmount:``,staggerUnit:`seconds`}:typeof e!=`number`||!Number.isFinite(e)||e<0?{scheduleExact:!1,staggerAmount:``,staggerUnit:`seconds`}:e%6e4==0?{scheduleExact:!1,staggerAmount:String(Math.max(1,e/6e4)),staggerUnit:`minutes`}:{scheduleExact:!1,staggerAmount:String(Math.max(1,Math.ceil(e/1e3))),staggerUnit:`seconds`}}function Pi(e,t){let n=e.failureAlert,r={...t,name:e.name,description:e.description??``,agentId:e.agentId??``,sessionKey:e.sessionKey??``,clearAgent:!1,enabled:e.enabled,deleteAfterRun:e.deleteAfterRun??!1,scheduleKind:e.schedule.kind,scheduleAt:``,everyAmount:t.everyAmount,everyUnit:t.everyUnit,cronExpr:t.cronExpr,cronTz:``,scheduleExact:!1,staggerAmount:``,staggerUnit:`seconds`,sessionTarget:e.sessionTarget,wakeMode:e.wakeMode,payloadKind:e.payload.kind,payloadText:e.payload.kind===`systemEvent`?e.payload.text:e.payload.message,payloadModel:e.payload.kind===`agentTurn`?e.payload.model??``:``,payloadThinking:e.payload.kind===`agentTurn`?e.payload.thinking??``:``,payloadLightContext:e.payload.kind===`agentTurn`?e.payload.lightContext===!0:!1,deliveryMode:e.delivery?.mode??`none`,deliveryChannel:e.delivery?.channel??`last`,deliveryTo:e.delivery?.to??``,deliveryAccountId:e.delivery?.accountId??``,deliveryBestEffort:e.delivery?.bestEffort??!1,failureAlertMode:n===!1?`disabled`:n&&typeof n==`object`?`custom`:`inherit`,failureAlertAfter:n&&typeof n==`object`&&typeof n.after==`number`?String(n.after):hi.failureAlertAfter,failureAlertCooldownSeconds:n&&typeof n==`object`&&typeof n.cooldownMs==`number`?String(Math.floor(n.cooldownMs/1e3)):hi.failureAlertCooldownSeconds,failureAlertChannel:n&&typeof n==`object`?n.channel??`last`:gi,failureAlertTo:n&&typeof n==`object`?n.to??``:``,failureAlertDeliveryMode:n&&typeof n==`object`?n.mode??`announce`:`announce`,failureAlertAccountId:n&&typeof n==`object`?n.accountId??``:``,timeoutSeconds:e.payload.kind===`agentTurn`&&typeof e.payload.timeoutSeconds==`number`?String(e.payload.timeoutSeconds):``};if(e.schedule.kind===`at`)r.scheduleAt=ji(e.schedule.at);else if(e.schedule.kind===`every`){let t=Mi(e.schedule.everyMs);r.everyAmount=t.everyAmount,r.everyUnit=t.everyUnit}else{r.cronExpr=e.schedule.expr,r.cronTz=e.schedule.tz??``;let t=Ni(e.schedule.staggerMs);r.scheduleExact=t.scheduleExact,r.staggerAmount=t.staggerAmount,r.staggerUnit=t.staggerUnit}return vi(r)}function Fi(e){if(e.scheduleKind===`at`){let t=Date.parse(e.scheduleAt);if(!Number.isFinite(t))throw Error(L(`cron.errors.invalidRunTime`));return{kind:`at`,at:new Date(t).toISOString()}}if(e.scheduleKind===`every`){let t=g(e.everyAmount,0);if(t<=0)throw Error(L(`cron.errors.invalidIntervalAmount`));let n=e.everyUnit;return{kind:`every`,everyMs:t*(n===`minutes`?6e4:n===`hours`?36e5:864e5)}}let t=e.cronExpr.trim();if(!t)throw Error(L(`cron.errors.cronExprRequiredShort`));if(e.scheduleExact)return{kind:`cron`,expr:t,tz:e.cronTz.trim()||void 0,staggerMs:0};let n=e.staggerAmount.trim();if(!n)return{kind:`cron`,expr:t,tz:e.cronTz.trim()||void 0};let r=g(n,0);if(r<=0)throw Error(L(`cron.errors.invalidStaggerAmount`));let i=e.staggerUnit===`minutes`?r*6e4:r*1e3;return{kind:`cron`,expr:t,tz:e.cronTz.trim()||void 0,staggerMs:i}}function Ii(e){if(e.payloadKind===`systemEvent`){let t=e.payloadText.trim();if(!t)throw Error(L(`cron.errors.systemEventTextRequired`));return{kind:`systemEvent`,text:t}}let t=e.payloadText.trim();if(!t)throw Error(L(`cron.errors.agentMessageRequiredShort`));let n={kind:`agentTurn`,message:t},r=e.payloadModel.trim();r&&(n.model=r);let i=e.payloadThinking.trim();i&&(n.thinking=i);let a=g(e.timeoutSeconds,0);return a>0&&(n.timeoutSeconds=a),e.payloadLightContext&&(n.lightContext=!0),n}function Li(e){if(e.failureAlertMode===`disabled`)return!1;if(e.failureAlertMode!==`custom`)return;let t=g(e.failureAlertAfter.trim(),0),n=e.failureAlertCooldownSeconds.trim(),r=n.length>0?g(n,0):void 0,i=r!==void 0&&Number.isFinite(r)&&r>=0?Math.floor(r*1e3):void 0,a=e.failureAlertDeliveryMode,o=e.failureAlertAccountId.trim(),s={after:t>0?Math.floor(t):void 0,channel:e.failureAlertChannel.trim()||`last`,to:e.failureAlertTo.trim()||void 0,...i===void 0?{}:{cooldownMs:i}};return a&&(s.mode=a),s.accountId=o||void 0,s}async function Ri(e){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{let t=vi(e.cronForm);t!==e.cronForm&&(e.cronForm=t);let n=yi(t);if(e.cronFieldErrors=n,bi(n))return;let r=Fi(t),i=Ii(t),a=e.cronEditingJobId?e.cronJobs.find(t=>t.id===e.cronEditingJobId):void 0;if(i.kind===`agentTurn`){let n=a?.payload.kind===`agentTurn`?a.payload.lightContext:void 0;!t.payloadLightContext&&e.cronEditingJobId&&n!==void 0&&(i.lightContext=!1)}let o=t.deliveryMode,s=o&&o!==`none`?{mode:o,channel:o===`announce`?t.deliveryChannel.trim()||`last`:void 0,to:t.deliveryTo.trim()||void 0,accountId:o===`announce`?t.deliveryAccountId.trim():void 0,bestEffort:t.deliveryBestEffort}:o===`none`?{mode:`none`}:void 0,c=Li(t),l=t.clearAgent?null:t.agentId.trim(),u=t.sessionKey.trim()||(a?.sessionKey?null:void 0),d={name:t.name.trim(),description:t.description.trim(),agentId:l===null?null:l||void 0,sessionKey:u,enabled:t.enabled,deleteAfterRun:t.deleteAfterRun,schedule:r,sessionTarget:t.sessionTarget,wakeMode:t.wakeMode,payload:i,delivery:s,failureAlert:c};if(!d.name)throw Error(L(`cron.errors.nameRequiredShort`));e.cronEditingJobId?(await e.client.request(`cron.update`,{id:e.cronEditingJobId,patch:d}),ki(e)):(await e.client.request(`cron.add`,d),Ai(e)),await Si(e),await xi(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function zi(e,t,n){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request(`cron.update`,{id:t.id,patch:{enabled:n}}),await Si(e),await xi(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function Bi(e,t,n=`force`){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request(`cron.run`,{id:t.id,mode:n}),e.cronRunsScope===`all`?await Hi(e,null):await Hi(e,t.id)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function Vi(e,t){if(!(!e.client||!e.connected||e.cronBusy)){e.cronBusy=!0,e.cronError=null;try{await e.client.request(`cron.remove`,{id:t.id}),e.cronEditingJobId===t.id&&ki(e),e.cronRunsJobId===t.id&&(e.cronRunsJobId=null,e.cronRuns=[],e.cronRunsTotal=0,e.cronRunsHasMore=!1,e.cronRunsNextOffset=null),await Si(e),await xi(e)}catch(t){e.cronError=String(t)}finally{e.cronBusy=!1}}}async function Hi(e,t,n){if(!e.client||!e.connected)return;let r=e.cronRunsScope,i=t??e.cronRunsJobId;if(r===`job`&&!i){e.cronRuns=[],e.cronRunsTotal=0,e.cronRunsHasMore=!1,e.cronRunsNextOffset=null;return}let a=n?.append===!0;if(!(a&&!e.cronRunsHasMore))try{a&&(e.cronRunsLoadingMore=!0);let t=a?Math.max(0,e.cronRunsNextOffset??e.cronRuns.length):0,n=await e.client.request(`cron.runs`,{scope:r,id:r===`job`?i??void 0:void 0,limit:e.cronRunsLimit,offset:t,statuses:e.cronRunsStatuses.length>0?e.cronRunsStatuses:void 0,status:e.cronRunsStatusFilter,deliveryStatuses:e.cronRunsDeliveryStatuses.length>0?e.cronRunsDeliveryStatuses:void 0,query:e.cronRunsQuery.trim()||void 0,sortDir:e.cronRunsSortDir}),o=Array.isArray(n.entries)?n.entries:[];e.cronRuns=a&&(r===`all`||e.cronRunsJobId===i)?[...e.cronRuns,...o]:o,r===`job`&&(e.cronRunsJobId=i??null);let s=Ci({totalRaw:n.total,limitRaw:n.limit,offsetRaw:n.offset,nextOffsetRaw:n.nextOffset,hasMoreRaw:n.hasMore,pageCount:o.length});e.cronRunsTotal=Math.max(s.total,e.cronRuns.length),e.cronRunsHasMore=s.hasMore,e.cronRunsNextOffset=s.nextOffset}catch(t){e.cronError=String(t)}finally{a&&(e.cronRunsLoadingMore=!1)}}async function Ui(e){e.cronRunsScope===`job`&&!e.cronRunsJobId||await Hi(e,e.cronRunsJobId,{append:!0})}function Wi(e,t){t.cronRunsScope&&(e.cronRunsScope=t.cronRunsScope),Array.isArray(t.cronRunsStatuses)&&(e.cronRunsStatuses=t.cronRunsStatuses,e.cronRunsStatusFilter=t.cronRunsStatuses.length===1?t.cronRunsStatuses[0]:`all`),Array.isArray(t.cronRunsDeliveryStatuses)&&(e.cronRunsDeliveryStatuses=t.cronRunsDeliveryStatuses),t.cronRunsStatusFilter&&(e.cronRunsStatusFilter=t.cronRunsStatusFilter,e.cronRunsStatuses=t.cronRunsStatusFilter===`all`?[]:[t.cronRunsStatusFilter]),typeof t.cronRunsQuery==`string`&&(e.cronRunsQuery=t.cronRunsQuery),t.cronRunsSortDir&&(e.cronRunsSortDir=t.cronRunsSortDir)}function Gi(e,t){e.cronEditingJobId=t.id,e.cronRunsJobId=t.id,e.cronForm=Pi(t,e.cronForm),e.cronFieldErrors=yi(e.cronForm)}function Ki(e,t){let n=e.trim()||`Job`,r=`${n} copy`;if(!t.has(r.toLowerCase()))return r;let i=2;for(;i<1e3;){let e=`${n} copy ${i}`;if(!t.has(e.toLowerCase()))return e;i+=1}return`${n} copy ${Date.now()}`}function qi(e,t){ki(e),e.cronRunsJobId=t.id;let n=new Set(e.cronJobs.map(e=>e.name.trim().toLowerCase())),r=Pi(t,e.cronForm);r.name=Ki(t.name,n),e.cronForm=r,e.cronFieldErrors=yi(e.cronForm)}function Ji(e){ki(e),Ai(e)}async function Yi(e,t){if(!(!e.client||!e.connected)&&!e.devicesLoading){e.devicesLoading=!0,t?.quiet||(e.devicesError=null);try{let t=await e.client.request(`device.pair.list`,{});e.devicesList={pending:Array.isArray(t?.pending)?t.pending:[],paired:Array.isArray(t?.paired)?t.paired:[]}}catch(n){t?.quiet||(e.devicesError=String(n))}finally{e.devicesLoading=!1}}}async function Xi(e,t){if(!(!e.client||!e.connected))try{await e.client.request(`device.pair.approve`,{requestId:t}),await Yi(e)}catch(t){e.devicesError=String(t)}}async function Zi(e,t){if(!(!e.client||!e.connected)&&window.confirm(`Reject this device pairing request?`))try{await e.client.request(`device.pair.reject`,{requestId:t}),await Yi(e)}catch(t){e.devicesError=String(t)}}async function Qi(e,t){if(!(!e.client||!e.connected))try{let n=await e.client.request(`device.token.rotate`,t);if(n?.token){let e=await Wt(),r=n.role??t.role;(n.deviceId===e.deviceId||t.deviceId===e.deviceId)&&Ae({deviceId:e.deviceId,role:r,token:n.token,scopes:n.scopes??t.scopes??[]}),window.prompt(`New device token (copy and store securely):`,n.token)}await Yi(e)}catch(t){e.devicesError=String(t)}}async function $i(e,t){if(!(!e.client||!e.connected)&&window.confirm(`Revoke token for ${t.deviceId} (${t.role})?`))try{await e.client.request(`device.token.revoke`,t);let n=await Wt();t.deviceId===n.deviceId&&je({deviceId:n.deviceId,role:t.role}),await Yi(e)}catch(t){e.devicesError=String(t)}}function ea(e){if(!e||e.kind===`gateway`)return{method:`exec.approvals.get`,params:{}};let t=e.nodeId.trim();return t?{method:`exec.approvals.node.get`,params:{nodeId:t}}:null}function ta(e,t){if(!e||e.kind===`gateway`)return{method:`exec.approvals.set`,params:t};let n=e.nodeId.trim();return n?{method:`exec.approvals.node.set`,params:{...t,nodeId:n}}:null}async function na(e,t){if(!(!e.client||!e.connected)&&!e.execApprovalsLoading){e.execApprovalsLoading=!0,e.lastError=null;try{let n=ea(t);if(!n){e.lastError=`Select a node before loading exec approvals.`;return}ra(e,await e.client.request(n.method,n.params))}catch(t){e.lastError=String(t)}finally{e.execApprovalsLoading=!1}}}function ra(e,t){e.execApprovalsSnapshot=t,e.execApprovalsDirty||(e.execApprovalsForm=Nn(t.file??{}))}async function ia(e,t){if(!(!e.client||!e.connected)){e.execApprovalsSaving=!0,e.lastError=null;try{let n=e.execApprovalsSnapshot?.hash;if(!n){e.lastError=`Exec approvals hash missing; reload and retry.`;return}let r=ta(t,{file:e.execApprovalsForm??e.execApprovalsSnapshot?.file??{},baseHash:n});if(!r){e.lastError=`Select a node before saving exec approvals.`;return}await e.client.request(r.method,r.params),e.execApprovalsDirty=!1,await na(e,t)}catch(t){e.lastError=String(t)}finally{e.execApprovalsSaving=!1}}}function aa(e,t,n){let r=Nn(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});Ln(r,t,n),e.execApprovalsForm=r,e.execApprovalsDirty=!0}function oa(e,t){let n=Nn(e.execApprovalsForm??e.execApprovalsSnapshot?.file??{});Rn(n,t),e.execApprovalsForm=n,e.execApprovalsDirty=!0}async function sa(e){if(!(!e.client||!e.connected)&&!e.presenceLoading){e.presenceLoading=!0,e.presenceError=null,e.presenceStatus=null;try{let t=await e.client.request(`system-presence`,{});Array.isArray(t)?(e.presenceEntries=t,e.presenceStatus=t.length===0?`No instances yet.`:null):(e.presenceEntries=[],e.presenceStatus=`No presence payload.`)}catch(t){ln(t)?(e.presenceEntries=[],e.presenceStatus=null,e.presenceError=un(`instance presence`)):e.presenceError=String(t)}finally{e.presenceLoading=!1}}}async function ca(e){if(!(!e.client||!e.connected))try{await e.client.request(`sessions.subscribe`,{})}catch(t){e.sessionsError=String(t)}}async function la(e,t){if(!(!e.client||!e.connected)&&!e.sessionsLoading){e.sessionsLoading=!0,e.sessionsError=null;try{let n=t?.includeGlobal??e.sessionsIncludeGlobal,r=t?.includeUnknown??e.sessionsIncludeUnknown,i=t?.activeMinutes??g(e.sessionsFilterActive,0),a=t?.limit??g(e.sessionsFilterLimit,0),o={includeGlobal:n,includeUnknown:r};i>0&&(o.activeMinutes=i),a>0&&(o.limit=a);let s=await e.client.request(`sessions.list`,o);s&&(e.sessionsResult=s)}catch(t){ln(t)?(e.sessionsResult=null,e.sessionsError=un(`sessions`)):e.sessionsError=String(t)}finally{e.sessionsLoading=!1}}}async function ua(e,t,n){if(!e.client||!e.connected)return;let r={key:t};`label`in n&&(r.label=n.label),`thinkingLevel`in n&&(r.thinkingLevel=n.thinkingLevel),`fastMode`in n&&(r.fastMode=n.fastMode),`verboseLevel`in n&&(r.verboseLevel=n.verboseLevel),`reasoningLevel`in n&&(r.reasoningLevel=n.reasoningLevel);try{await e.client.request(`sessions.patch`,r),await la(e)}catch(t){e.sessionsError=String(t)}}async function da(e,t){if(!e.client||!e.connected||t.length===0||e.sessionsLoading)return[];let n=t.length===1?`session`:`sessions`;if(!window.confirm(`Delete ${t.length} ${n}?\n\nThis will delete the session entries and archive their transcripts.`))return[];e.sessionsLoading=!0,e.sessionsError=null;let r=[],i=[];try{for(let n of t)try{await e.client.request(`sessions.delete`,{key:n,deleteTranscript:!0}),r.push(n)}catch(e){i.push(String(e))}}finally{e.sessionsLoading=!1}return r.length>0&&await la(e),i.length>0&&(e.sessionsError=i.join(`; `)),r}function fa(e,t,n){if(!t.trim())return;let r={...e.skillMessages};n?r[t]=n:delete r[t],e.skillMessages=r}function pa(e){return e instanceof Error?e.message:String(e)}async function ma(e,t){if(t?.clearMessages&&Object.keys(e.skillMessages).length>0&&(e.skillMessages={}),!(!e.client||!e.connected)&&!e.skillsLoading){e.skillsLoading=!0,e.skillsError=null;try{let t=await e.client.request(`skills.status`,{});t&&(e.skillsReport=t)}catch(t){e.skillsError=pa(t)}finally{e.skillsLoading=!1}}}function ha(e,t,n){e.skillEdits={...e.skillEdits,[t]:n}}async function ga(e,t,n){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{await e.client.request(`skills.update`,{skillKey:t,enabled:n}),await ma(e),fa(e,t,{kind:`success`,message:n?`Skill enabled`:`Skill disabled`})}catch(n){let r=pa(n);e.skillsError=r,fa(e,t,{kind:`error`,message:r})}finally{e.skillsBusyKey=null}}}async function _a(e,t){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{let n=e.skillEdits[t]??``;await e.client.request(`skills.update`,{skillKey:t,apiKey:n}),await ma(e),fa(e,t,{kind:`success`,message:`API key saved — stored in openclaw.json (skills.entries.${t})`})}catch(n){let r=pa(n);e.skillsError=r,fa(e,t,{kind:`error`,message:r})}finally{e.skillsBusyKey=null}}}async function va(e,t,n,r){if(!(!e.client||!e.connected)){e.skillsBusyKey=t,e.skillsError=null;try{let i=await e.client.request(`skills.install`,{name:n,installId:r,timeoutMs:12e4});await ma(e),fa(e,t,{kind:`success`,message:i?.message??`Installed`})}catch(n){let r=pa(n);e.skillsError=r,fa(e,t,{kind:`error`,message:r})}finally{e.skillsBusyKey=null}}}var ya=`openclaw.control.usage.date-params.v1`,ba=`__default__`,xa=/unexpected property ['"]mode['"]/i,Sa=/unexpected property ['"]utcoffset['"]/i,Ca=/invalid sessions\.usage params/i,wa=null;function Ta(){return j()}function Ea(){let e=Ta();if(!e)return new Set;try{let t=e.getItem(ya);if(!t)return new Set;let n=JSON.parse(t);return!n||!Array.isArray(n.unsupportedGatewayKeys)?new Set:new Set(n.unsupportedGatewayKeys.filter(e=>typeof e==`string`).map(e=>e.trim()).filter(Boolean))}catch{return new Set}}function Da(e){let t=Ta();if(t)try{t.setItem(ya,JSON.stringify({unsupportedGatewayKeys:Array.from(e)}))}catch{}}function Oa(){return wa||=Ea(),wa}function ka(e){let t=e?.trim();if(!t)return ba;try{let e=new URL(t),n=e.pathname===`/`?``:e.pathname;return`${e.protocol}//${e.host}${n}`.toLowerCase()}catch{return t.toLowerCase()}}function Aa(e){return ka(e.settings?.gatewayUrl)}function ja(e){return!Oa().has(Aa(e))}function Ma(e){let t=Oa();t.add(Aa(e)),Da(t)}function Na(e){let t=Ia(e);return Ca.test(t)&&(xa.test(t)||Sa.test(t))}var Pa=e=>{let t=-e,n=t>=0?`+`:`-`,r=Math.abs(t),i=Math.floor(r/60),a=r%60;return a===0?`UTC${n}${i}`:`UTC${n}${i}:${a.toString().padStart(2,`0`)}`},Fa=(e,t)=>{if(t)return e===`utc`?{mode:`utc`}:{mode:`specific`,utcOffset:Pa(new Date().getTimezoneOffset())}};function Ia(e){if(typeof e==`string`)return e;if(e instanceof Error&&typeof e.message==`string`&&e.message.trim())return e.message;if(e&&typeof e==`object`)try{let t=JSON.stringify(e);if(t)return t}catch{}return`request failed`}async function La(e,t){let n=e.client;if(!(!n||!e.connected)&&!e.usageLoading){e.usageLoading=!0,e.usageError=null;try{let r=t?.startDate??e.usageStartDate,i=t?.endDate??e.usageEndDate,a=async t=>{let a=Fa(e.usageTimeZone,t);return await Promise.all([n.request(`sessions.usage`,{startDate:r,endDate:i,...a,limit:1e3,includeContextWeight:!0}),n.request(`usage.cost`,{startDate:r,endDate:i,...a})])},o=(t,n)=>{t&&(e.usageResult=t),n&&(e.usageCostSummary=n)},s=ja(e);try{let[e,t]=await a(s);o(e,t)}catch(t){if(s&&Na(t)){Ma(e);let[t,n]=await a(!1);o(t,n)}else throw t}}catch(t){ln(t)?(e.usageResult=null,e.usageCostSummary=null,e.usageError=un(`usage`)):e.usageError=Ia(t)}finally{e.usageLoading=!1}}}async function Ra(e,t){if(!(!e.client||!e.connected)&&!e.usageTimeSeriesLoading){e.usageTimeSeriesLoading=!0,e.usageTimeSeries=null;try{let n=await e.client.request(`sessions.usage.timeseries`,{key:t});n&&(e.usageTimeSeries=n)}catch{e.usageTimeSeries=null}finally{e.usageTimeSeriesLoading=!1}}}async function za(e,t){if(!(!e.client||!e.connected)&&!e.usageSessionLogsLoading){e.usageSessionLogsLoading=!0,e.usageSessionLogs=null;try{let n=await e.client.request(`sessions.usage.logs`,{key:t,limit:1e3});n&&Array.isArray(n.logs)&&(e.usageSessionLogs=n.logs)}catch{e.usageSessionLogs=null}finally{e.usageSessionLogsLoading=!1}}}var Ba=[{label:`chat`,tabs:[`chat`]},{label:`control`,tabs:[`overview`,`channels`,`instances`,`sessions`,`usage`,`cron`]},{label:`agent`,tabs:[`agents`,`skills`,`nodes`]},{label:`settings`,tabs:[`config`,`communications`,`appearance`,`automation`,`infrastructure`,`aiAgents`,`debug`,`logs`]}],Va={agents:`/agents`,overview:`/overview`,channels:`/channels`,instances:`/instances`,sessions:`/sessions`,usage:`/usage`,cron:`/cron`,skills:`/skills`,nodes:`/nodes`,chat:`/chat`,config:`/config`,communications:`/communications`,appearance:`/appearance`,automation:`/automation`,infrastructure:`/infrastructure`,aiAgents:`/ai-agents`,debug:`/debug`,logs:`/logs`},Ha=new Map(Object.entries(Va).map(([e,t])=>[t,e]));function Ua(e){if(!e)return``;let t=e.trim();return t.startsWith(`/`)||(t=`/${t}`),t===`/`?``:(t.endsWith(`/`)&&(t=t.slice(0,-1)),t)}function Wa(e){if(!e)return`/`;let t=e.trim();return t.startsWith(`/`)||(t=`/${t}`),t.length>1&&t.endsWith(`/`)&&(t=t.slice(0,-1)),t}function Ga(e,t=``){let n=Ua(t),r=Va[e];return n?`${n}${r}`:r}function Ka(e,t=``){let n=Ua(t),r=e||`/`;n&&(r===n?r=`/`:r.startsWith(`${n}/`)&&(r=r.slice(n.length)));let i=Wa(r).toLowerCase();return i.endsWith(`/index.html`)&&(i=`/`),i===`/`?`chat`:Ha.get(i)??null}function qa(e){let t=Wa(e);if(t.endsWith(`/index.html`)&&(t=Wa(t.slice(0,-11))),t===`/`)return``;let n=t.split(`/`).filter(Boolean);if(n.length===0)return``;for(let e=0;e<n.length;e++){let t=`/${n.slice(e).join(`/`)}`.toLowerCase();if(Ha.has(t)){let t=n.slice(0,e);return t.length?`/${t.join(`/`)}`:``}}return`/${n.join(`/`)}`}function Ja(e){switch(e){case`agents`:return`folder`;case`chat`:return`messageSquare`;case`overview`:return`barChart`;case`channels`:return`link`;case`instances`:return`radio`;case`sessions`:return`fileText`;case`usage`:return`barChart`;case`cron`:return`loader`;case`skills`:return`zap`;case`nodes`:return`monitor`;case`config`:return`settings`;case`communications`:return`send`;case`appearance`:return`spark`;case`automation`:return`terminal`;case`infrastructure`:return`globe`;case`aiAgents`:return`brain`;case`debug`:return`bug`;case`logs`:return`scrollText`;default:return`folder`}}function Ya(e){return L(`tabs.${e}`)}function Xa(e){return L(`subtitles.${e}`)}var Za=new Set([`claw`,`knot`,`dash`]),Qa=new Set([`system`,`light`,`dark`]),$a={defaultTheme:{theme:`claw`,mode:`dark`},docsTheme:{theme:`claw`,mode:`light`},lightTheme:{theme:`knot`,mode:`dark`},landingTheme:{theme:`knot`,mode:`dark`},newTheme:{theme:`knot`,mode:`dark`},dark:{theme:`claw`,mode:`dark`},light:{theme:`claw`,mode:`light`},openknot:{theme:`knot`,mode:`dark`},fieldmanual:{theme:`dash`,mode:`dark`},clawdash:{theme:`dash`,mode:`light`},system:{theme:`claw`,mode:`system`}};function eo(){return typeof globalThis.matchMedia==`function`?globalThis.matchMedia(`(prefers-color-scheme: light)`).matches:!1}function to(e,t){let n=typeof e==`string`?e:``,r=typeof t==`string`?t:``;return{theme:Za.has(n)?n:$a[n]?.theme??`claw`,mode:Qa.has(r)?r:$a[n]?.mode??`system`}}function no(e){return e===`system`?eo()?`light`:`dark`:e}function ro(e,t){let n=no(t);return e===`claw`?n===`light`?`light`:`dark`:e===`knot`?n===`light`?`openknot-light`:`openknot`:n===`light`?`dash-light`:`dash`}var io=`openclaw.control.settings.v1:`,ao=`openclaw.control.settings.v1`,oo=`openclaw.control.token.v1`,so=`openclaw.control.token.v1:`,co=10;function lo(e){return`${io}${_o(e)}`}var uo=[0,25,50,75,100];function fo(e){let t=uo[0],n=Math.abs(e-t);for(let r of uo){let i=Math.abs(e-r);i<n&&(t=r,n=i)}return t}function po(){return typeof document>`u`?!1:!!document.querySelector(`script[src*="/@vite/client"]`)}function mo(e,t){return`${e.includes(`:`)?`[${e}]`:e}:${t}`}function ho(){let e=location.protocol===`https:`?`wss`:`ws`,t=typeof window<`u`&&typeof window.__OPENCLAW_CONTROL_UI_BASE_PATH__==`string`&&window.__OPENCLAW_CONTROL_UI_BASE_PATH__.trim(),n=t?Ua(t):qa(location.pathname),r=`${e}://${location.host}${n}`;return po()?{pageUrl:r,effectiveUrl:`${e}://${mo(location.hostname,`18789`)}`}:{pageUrl:r,effectiveUrl:r}}function go(){return typeof window<`u`&&window.sessionStorage?window.sessionStorage:typeof sessionStorage<`u`?sessionStorage:null}function _o(e){let t=e.trim();if(!t)return`default`;try{let e=typeof location<`u`?`${location.protocol}//${location.host}${location.pathname||`/`}`:void 0,n=e?new URL(t,e):new URL(t),r=n.pathname===`/`?``:n.pathname.replace(/\/+$/,``)||n.pathname;return`${n.protocol}//${n.host}${r}`}catch{return t}}function vo(e){return`${so}${_o(e)}`}function yo(e,t,n){let r=_o(e),i=t.sessionsByGateway?.[r];if(i&&typeof i.sessionKey==`string`&&i.sessionKey.trim()&&typeof i.lastActiveSessionKey==`string`&&i.lastActiveSessionKey.trim())return{sessionKey:i.sessionKey.trim(),lastActiveSessionKey:i.lastActiveSessionKey.trim()};let a=typeof t.sessionKey==`string`&&t.sessionKey.trim()?t.sessionKey.trim():n.sessionKey;return{sessionKey:a,lastActiveSessionKey:typeof t.lastActiveSessionKey==`string`&&t.lastActiveSessionKey.trim()?t.lastActiveSessionKey.trim():a||n.lastActiveSessionKey}}function bo(e){try{let t=go();return t?(t.removeItem(oo),(t.getItem(vo(e))??``).trim()):``}catch{return``}}function xo(e,t){try{let n=go();if(!n)return;n.removeItem(oo);let r=vo(e),i=t.trim();if(i){n.setItem(r,i);return}n.removeItem(r)}catch{}}function So(){let{pageUrl:e,effectiveUrl:t}=ho(),n=j(),r={gatewayUrl:t,token:bo(t),sessionKey:`main`,lastActiveSessionKey:`main`,theme:`claw`,themeMode:`system`,chatFocusMode:!1,chatShowThinking:!0,chatShowToolCalls:!0,splitRatio:.6,navCollapsed:!1,navWidth:220,navGroupsCollapsed:{},borderRadius:50};try{let i=lo(r.gatewayUrl),a=n?.getItem(i)??n?.getItem(io+`default`)??n?.getItem(ao);if(!a)return r;let o=JSON.parse(a),s=typeof o.gatewayUrl==`string`&&o.gatewayUrl.trim()?o.gatewayUrl.trim():r.gatewayUrl,c=s===e?t:s,l=yo(c,o,r),{theme:u,mode:d}=to(o.theme,o.themeMode),f={gatewayUrl:c,token:bo(c),sessionKey:l.sessionKey,lastActiveSessionKey:l.lastActiveSessionKey,theme:u,themeMode:d,chatFocusMode:typeof o.chatFocusMode==`boolean`?o.chatFocusMode:r.chatFocusMode,chatShowThinking:typeof o.chatShowThinking==`boolean`?o.chatShowThinking:r.chatShowThinking,chatShowToolCalls:typeof o.chatShowToolCalls==`boolean`?o.chatShowToolCalls:r.chatShowToolCalls,splitRatio:typeof o.splitRatio==`number`&&o.splitRatio>=.4&&o.splitRatio<=.7?o.splitRatio:r.splitRatio,navCollapsed:typeof o.navCollapsed==`boolean`?o.navCollapsed:r.navCollapsed,navWidth:typeof o.navWidth==`number`&&o.navWidth>=200&&o.navWidth<=400?o.navWidth:r.navWidth,navGroupsCollapsed:typeof o.navGroupsCollapsed==`object`&&o.navGroupsCollapsed!==null?o.navGroupsCollapsed:r.navGroupsCollapsed,borderRadius:typeof o.borderRadius==`number`&&o.borderRadius>=0&&o.borderRadius<=100?fo(o.borderRadius):r.borderRadius,locale:ce(o.locale)?o.locale:void 0};return`token`in o&&wo(f),f}catch{return r}}function Co(e){wo(e)}function wo(e){xo(e.gatewayUrl,e.token);let t=j(),n=_o(e.gatewayUrl),r=lo(e.gatewayUrl),i={};try{let e=t?.getItem(r)??t?.getItem(io+`default`)??t?.getItem(`openclaw.control.settings.v1`);if(e){let t=JSON.parse(e);t.sessionsByGateway&&typeof t.sessionsByGateway==`object`&&(i=t.sessionsByGateway)}}catch{}let a=Object.fromEntries([...Object.entries(i).filter(([e])=>e!==n),[n,{sessionKey:e.sessionKey,lastActiveSessionKey:e.lastActiveSessionKey}]].slice(-co)),o={gatewayUrl:e.gatewayUrl,theme:e.theme,themeMode:e.themeMode,chatFocusMode:e.chatFocusMode,chatShowThinking:e.chatShowThinking,chatShowToolCalls:e.chatShowToolCalls,splitRatio:e.splitRatio,navCollapsed:e.navCollapsed,navWidth:e.navWidth,navGroupsCollapsed:e.navGroupsCollapsed,borderRadius:e.borderRadius,sessionsByGateway:a,...e.locale?{locale:e.locale}:{}},s=JSON.stringify(o);try{t?.setItem(r,s),t?.setItem(ao,s)}catch{}}var To=e=>{e.classList.remove(`theme-transition`),e.style.removeProperty(`--theme-switch-x`),e.style.removeProperty(`--theme-switch-y`)},Eo=({nextTheme:e,applyTheme:t,currentTheme:n})=>{if(n===e){t();return}let r=globalThis.document??null;if(!r){t();return}let i=r.documentElement;t(),To(i)},{I:Do}=e,Oo=e=>e,ko=e=>e.strings===void 0,Ao=()=>document.createComment(``),jo=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new Do(r.insertBefore(Ao(),i),r.insertBefore(Ao(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=Oo(e).nextSibling;Oo(r).insertBefore(e,i),e=t}}}return n},Mo=(e,t,n=e)=>(e._$AI(t,n),e),No={},Po=(e,t=No)=>e._$AH=t,Fo=e=>e._$AH,Io=e=>{e._$AR(),e._$AA.remove()},Lo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ro=e=>(...t)=>({_$litDirective$:e,values:t}),zo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},Bo=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Bo(e,t);return!0},Vo=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ho=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Go(t)}};function Uo(e){this._$AN===void 0?this._$AM=e:(Vo(this),this._$AM=e,Ho(this))}function Wo(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)Bo(r[e],!1),Vo(r[e]);else r!=null&&(Bo(r,!1),Vo(r));else Bo(this,e)}var Go=e=>{e.type==Lo.CHILD&&(e._$AP??=Wo,e._$AQ??=Uo)},Ko=class extends zo{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ho(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Bo(this,e),Vo(this))}setValue(e){if(ko(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},qo=new WeakMap,Jo=Ro(class extends Ko{render(e){return i}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i}rt(e){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=qo.get(t);n===void 0&&(n=new WeakMap,qo.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?qo.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Yo=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Xo=Ro(class extends zo{constructor(e){if(super(e),e.type!==Lo.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Fo(e),{values:a,keys:s}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=s,a;let c=this.ut??=[],l=[],u,d,f=0,p=i.length-1,m=0,h=a.length-1;for(;f<=p&&m<=h;)if(i[f]===null)f++;else if(i[p]===null)p--;else if(c[f]===s[m])l[m]=Mo(i[f],a[m]),f++,m++;else if(c[p]===s[h])l[h]=Mo(i[p],a[h]),p--,h--;else if(c[f]===s[h])l[h]=Mo(i[f],a[h]),jo(e,l[h+1],i[f]),f++,h--;else if(c[p]===s[m])l[m]=Mo(i[p],a[m]),jo(e,i[f],i[p]),p--,m++;else if(u===void 0&&(u=Yo(s,m,h),d=Yo(c,f,p)),u.has(c[f]))if(u.has(c[p])){let t=d.get(s[m]),n=t===void 0?null:i[t];if(n===null){let t=jo(e,i[f]);Mo(t,a[m]),l[m]=t}else l[m]=Mo(n,a[m]),jo(e,i[f],n),i[t]=null;m++}else Io(i[p]),p--;else Io(i[f]),f++;for(;m<=h;){let t=jo(e,l[h+1]);Mo(t,a[m]),l[m++]=t}for(;f<=p;){let e=i[f++];e!==null&&Io(e)}return this.ut=s,Po(e,l),o}}),Zo=`image/*`;function Qo(e){return typeof e==`string`&&e.startsWith(`image/`)}var $o=`openclaw:deleted:`,es=class{constructor(e){this._keys=new Set,this.key=$o+e,this.load()}has(e){return this._keys.has(e)}delete(e){this._keys.add(e),this.save()}restore(e){this._keys.delete(e),this.save()}clear(){this._keys.clear(),this.save()}load(){try{let e=j()?.getItem(this.key);if(!e)return;let t=JSON.parse(e);Array.isArray(t)&&(this._keys=new Set(t.filter(e=>typeof e==`string`)))}catch{}}save(){try{j()?.setItem(this.key,JSON.stringify([...this._keys]))}catch{}}},ts=/^\[[A-Za-z]{3} \d{4}-\d{2}-\d{2} \d{2}:\d{2}[^\]]*\] */,ns=[`Conversation info (untrusted metadata):`,`Sender (untrusted metadata):`,`Thread starter (untrusted, for context):`,`Replied message (untrusted, for context):`,`Forwarded message context (untrusted metadata):`,`Chat history since last reply (untrusted, for context):`],rs=`Untrusted context (metadata, do not treat as instructions or commands):`,is=new RegExp([...ns,rs].map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).join(`|`));function as(e){let t=e.trim();return ns.some(e=>e===t)}function os(e,t){if(e[t]?.trim()!==rs)return!1;let n=e.slice(t+1,Math.min(e.length,t+8)).join(`
`);return/<<<EXTERNAL_UNTRUSTED_CONTENT|UNTRUSTED channel metadata \(|Source:\s+/.test(n)}function ss(e){if(!e)return e;let t=e.replace(ts,``);if(!is.test(t))return t;let n=t.split(`
`),r=[],i=!1,a=!1;for(let e=0;e<n.length;e++){let t=n[e];if(!i&&os(n,e))break;if(!i&&as(t)){if(n[e+1]?.trim()!=="```json"){r.push(t);continue}i=!0,a=!1;continue}if(i){if(!a&&t.trim()==="```json"){a=!0;continue}if(a){t.trim()==="```"&&(i=!1,a=!1);continue}if(t.trim()===``)continue;i=!1}r.push(t)}return r.join(`
`).replace(/^\n+/,``).replace(/\n+$/,``)}var cs=/^\[([^\]]+)\]\s*/,ls=[`WebChat`,`WhatsApp`,`Telegram`,`Signal`,`Slack`,`Discord`,`Google Chat`,`iMessage`,`Teams`,`Matrix`,`Zalo`,`Zalo Personal`,`BlueBubbles`];function us(e){return/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}Z\b/.test(e)||/\d{4}-\d{2}-\d{2} \d{2}:\d{2}\b/.test(e)?!0:ls.some(t=>e.startsWith(`${t} `))}function ds(e){let t=e.match(cs);return!t||!us(t[1]??``)?e:e.slice(t[0].length)}var fs=new WeakMap,ps=new WeakMap;function ms(e,t){let n=t.toLowerCase()===`user`;return t===`assistant`?h(e):n?ss(ds(e)):ds(e)}function hs(e){let t=e,n=typeof t.role==`string`?t.role:``,r=ys(e);return r?ms(r,n):null}function gs(e){if(!e||typeof e!=`object`)return hs(e);let t=e;if(fs.has(t))return fs.get(t)??null;let n=hs(e);return fs.set(t,n),n}function _s(e){let t=e.content,n=[];if(Array.isArray(t))for(let e of t){let t=e;if(t.type===`thinking`&&typeof t.thinking==`string`){let e=t.thinking.trim();e&&n.push(e)}}if(n.length>0)return n.join(`
`);let r=ys(e);if(!r)return null;let i=[...r.matchAll(/<\s*think(?:ing)?\s*>([\s\S]*?)<\s*\/\s*think(?:ing)?\s*>/gi)].map(e=>(e[1]??``).trim()).filter(Boolean);return i.length>0?i.join(`
`):null}function vs(e){if(!e||typeof e!=`object`)return _s(e);let t=e;if(ps.has(t))return ps.get(t)??null;let n=_s(e);return ps.set(t,n),n}function ys(e){let t=e,n=t.content;if(typeof n==`string`)return n;if(Array.isArray(n)){let e=n.map(e=>{let t=e;return t.type===`text`&&typeof t.text==`string`?t.text:null}).filter(e=>typeof e==`string`);if(e.length>0)return e.join(`
`)}return typeof t.text==`string`?t.text:null}function bs(e){let t=e.trim();if(!t)return``;let n=t.split(/\r?\n/).map(e=>e.trim()).filter(Boolean).map(e=>`_${e}_`);return n.length?[`_Reasoning:_`,...n].join(`
`):``}function xs(e,t){let n=Ss(e,t);if(!n)return;let r=new Blob([n],{type:`text/markdown`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`chat-${t}-${Date.now()}.md`,a.click(),URL.revokeObjectURL(i)}function Ss(e,t){let n=Array.isArray(e)?e:[];if(n.length===0)return null;let r=[`# Chat with ${t}`,``];for(let e of n){let n=e,i=n.role===`user`?`You`:n.role===`assistant`?t:`Tool`,a=gs(e)??``,o=typeof n.timestamp==`number`?new Date(n.timestamp).toISOString():``;r.push(`## ${i}${o?` (${o})`:``}`,``,a,``)}return r.join(`
`)}var Cs=class extends zo{constructor(e){if(super(e),this.it=i,e.type!==Lo.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===i||e==null)return this._t=void 0,this.it=e;if(e===o)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Cs.directiveName=`unsafeHTML`,Cs.resultType=1;var ws=Ro(Cs),W={messageSquare:n`
    <svg viewBox="0 0 24 24">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  `,barChart:n`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  `,link:n`
    <svg viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  `,radio:n`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path
        d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      />
    </svg>
  `,fileText:n`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  `,zap:n`
    <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  `,monitor:n`
    <svg viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  `,sun:n`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  `,moon:n`
    <svg viewBox="0 0 24 24">
      <path d="M12 3a6.5 6.5 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  `,settings:n`
    <svg viewBox="0 0 24 24">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `,bug:n`
    <svg viewBox="0 0 24 24">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  `,scrollText:n`
    <svg viewBox="0 0 24 24">
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M15 8h-5" />
      <path d="M15 12h-5" />
    </svg>
  `,folder:n`
    <svg viewBox="0 0 24 24">
      <path
        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      />
    </svg>
  `,menu:n`
    <svg viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  `,x:n`
    <svg viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  `,check:n`
    <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
  `,arrowDown:n`
    <svg viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  `,copy:n`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  `,search:n`
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  `,brain:n`
    <svg viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  `,book:n`
    <svg viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  `,loader:n`
    <svg viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  `,wrench:n`
    <svg viewBox="0 0 24 24">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      />
    </svg>
  `,fileCode:n`
    <svg viewBox="0 0 24 24">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  `,edit:n`
    <svg viewBox="0 0 24 24">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  `,penLine:n`
    <svg viewBox="0 0 24 24">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  `,paperclip:n`
    <svg viewBox="0 0 24 24">
      <path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      />
    </svg>
  `,globe:n`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  `,image:n`
    <svg viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  `,smartphone:n`
    <svg viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  `,plug:n`
    <svg viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  `,circle:n`
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
  `,puzzle:n`
    <svg viewBox="0 0 24 24">
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.076.874.54 1.02 1.02a2.5 2.5 0 1 0 3.237-3.237c-.48-.146-.944-.505-1.02-1.02a.98.98 0 0 1 .303-.917l1.526-1.526A2.402 2.402 0 0 1 11.998 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.236 3.236c-.464.18-.894.527-.967 1.02Z"
      />
    </svg>
  `,panelLeftClose:n`
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" stroke-linecap="round" />
      <path d="M16 10l-3 2 3 2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,panelLeftOpen:n`
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" stroke-linecap="round" />
      <path d="M14 10l3 2-3 2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,chevronDown:n`
    <svg viewBox="0 0 24 24">
      <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,chevronRight:n`
    <svg viewBox="0 0 24 24">
      <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,externalLink:n`
    <svg viewBox="0 0 24 24">
      <path
        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,send:n`
    <svg viewBox="0 0 24 24">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  `,stop:n`
    <svg viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" rx="1" /></svg>
  `,pin:n`
    <svg viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="17" y2="22" />
      <path
        d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"
      />
    </svg>
  `,pinOff:n`
    <svg viewBox="0 0 24 24">
      <line x1="2" x2="22" y1="2" y2="22" />
      <line x1="12" x2="12" y1="17" y2="22" />
      <path
        d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0-.39.04"
      />
    </svg>
  `,download:n`
    <svg viewBox="0 0 24 24">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  `,mic:n`
    <svg viewBox="0 0 24 24">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  `,micOff:n`
    <svg viewBox="0 0 24 24">
      <line x1="2" x2="22" y1="2" y2="22" />
      <path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
      <path d="M5 10v2a7 7 0 0 0 12 5" />
      <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
      <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  `,volume2:n`
    <svg viewBox="0 0 24 24">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  `,volumeOff:n`
    <svg viewBox="0 0 24 24">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="22" x2="16" y1="9" y2="15" />
      <line x1="16" x2="22" y1="9" y2="15" />
    </svg>
  `,bookmark:n`
    <svg viewBox="0 0 24 24"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></svg>
  `,plus:n`
    <svg viewBox="0 0 24 24">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  `,terminal:n`
    <svg viewBox="0 0 24 24">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  `,spark:n`
    <svg viewBox="0 0 24 24">
      <path
        d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
      />
    </svg>
  `,lobster:n`
    <svg viewBox="0 0 120 120" fill="none">
      <defs>
        <linearGradient id="lob-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ff4d4d" />
          <stop offset="100%" stop-color="#991b1b" />
        </linearGradient>
      </defs>
      <path
        d="M60 10C30 10 15 35 15 55C15 75 30 95 45 100L45 110L55 110L55 100C55 100 60 102 65 100L65 110L75 110L75 100C90 95 105 75 105 55C105 35 90 10 60 10Z"
        fill="url(#lob-g)"
      />
      <path d="M20 45C5 40 0 50 5 60C10 70 20 65 25 55C28 48 25 45 20 45Z" fill="url(#lob-g)" />
      <path
        d="M100 45C115 40 120 50 115 60C110 70 100 65 95 55C92 48 95 45 100 45Z"
        fill="url(#lob-g)"
      />
      <path d="M45 15Q35 5 30 8" stroke="#ff4d4d" stroke-width="3" stroke-linecap="round" />
      <path d="M75 15Q85 5 90 8" stroke="#ff4d4d" stroke-width="3" stroke-linecap="round" />
      <circle cx="45" cy="35" r="6" fill="#050810" />
      <circle cx="75" cy="35" r="6" fill="#050810" />
      <circle cx="46" cy="34" r="2.5" fill="#00e5cc" />
      <circle cx="76" cy="34" r="2.5" fill="#00e5cc" />
    </svg>
  `,refresh:n`
    <svg viewBox="0 0 24 24">
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  `,trash:n`
    <svg viewBox="0 0 24 24">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  `,eye:n`
    <svg viewBox="0 0 24 24">
      <path
        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  `,eyeOff:n`
    <svg viewBox="0 0 24 24">
      <path
        d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
      />
      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
      <path
        d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
      />
      <path d="m2 2 20 20" />
    </svg>
  `,moreHorizontal:n`
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="6" cy="12" r="1.5" />
      <circle cx="18" cy="12" r="1.5" />
    </svg>
  `,arrowUpDown:n`
    <svg viewBox="0 0 24 24">
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  `,panelRightOpen:n`
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M15 3v18" stroke-linecap="round" />
      <path d="M10 10l-3 2 3 2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,maximize:n`
    <svg viewBox="0 0 24 24">
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" x2="14" y1="3" y2="10" />
      <line x1="3" x2="10" y1="21" y2="14" />
    </svg>
  `,minimize:n`
    <svg viewBox="0 0 24 24">
      <polyline points="4 14 10 14 10 20" />
      <polyline points="20 10 14 10 14 4" />
      <line x1="14" x2="21" y1="10" y2="3" />
      <line x1="3" x2="10" y1="21" y2="14" />
    </svg>
  `},{entries:Ts,setPrototypeOf:Es,isFrozen:Ds,getPrototypeOf:Os,getOwnPropertyDescriptor:ks}=Object,{freeze:As,seal:js,create:Ms}=Object,{apply:Ns,construct:Ps}=typeof Reflect<`u`&&Reflect;As||=function(e){return e},js||=function(e){return e},Ns||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},Ps||=function(e){return new e(...[...arguments].slice(1))};var Fs=Ys(Array.prototype.forEach),Is=Ys(Array.prototype.lastIndexOf),Ls=Ys(Array.prototype.pop),Rs=Ys(Array.prototype.push),zs=Ys(Array.prototype.splice),Bs=Ys(String.prototype.toLowerCase),Vs=Ys(String.prototype.toString),Hs=Ys(String.prototype.match),Us=Ys(String.prototype.replace),Ws=Ys(String.prototype.indexOf),Gs=Ys(String.prototype.trim),Ks=Ys(Object.prototype.hasOwnProperty),qs=Ys(RegExp.prototype.test),Js=Xs(TypeError);function Ys(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return Ns(e,t,n)}}function Xs(e){return function(){return Ps(e,[...arguments])}}function G(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Bs;Es&&Es(e,null);let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(Ds(t)||(t[r]=e),i=e)}e[i]=!0}return e}function Zs(e){for(let t=0;t<e.length;t++)Ks(e,t)||(e[t]=null);return e}function Qs(e){let t=Ms(null);for(let[n,r]of Ts(e))Ks(e,n)&&(Array.isArray(r)?t[n]=Zs(r):r&&typeof r==`object`&&r.constructor===Object?t[n]=Qs(r):t[n]=r);return t}function $s(e,t){for(;e!==null;){let n=ks(e,t);if(n){if(n.get)return Ys(n.get);if(typeof n.value==`function`)return Ys(n.value)}e=Os(e)}function n(){return null}return n}var ec=As(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),tc=As(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),nc=As([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),rc=As([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),ic=As(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),ac=As([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),oc=As([`#text`]),sc=As(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot`.split(`.`)),cc=As(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),lc=As(`accent.accentunder.align.bevelled.close.columnsalign.columnlines.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lspace.lquote.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),uc=As([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),dc=js(/\{\{[\w\W]*|[\w\W]*\}\}/gm),fc=js(/<%[\w\W]*|[\w\W]*%>/gm),pc=js(/\$\{[\w\W]*/gm),mc=js(/^data-[\-\w.\u00B7-\uFFFF]+$/),hc=js(/^aria-[\-\w]+$/),gc=js(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),_c=js(/^(?:\w+script|data):/i),vc=js(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),yc=js(/^html$/i),bc=js(/^[a-z][.\w]*(-[.\w]+)+$/i),xc=Object.freeze({__proto__:null,ARIA_ATTR:hc,ATTR_WHITESPACE:vc,CUSTOM_ELEMENT:bc,DATA_ATTR:mc,DOCTYPE_NAME:yc,ERB_EXPR:fc,IS_ALLOWED_URI:gc,IS_SCRIPT_OR_DATA:_c,MUSTACHE_EXPR:dc,TMPLIT_EXPR:pc}),Sc={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Cc=function(){return typeof window>`u`?null:window},wc=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},Tc=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Ec(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Cc(),t=e=>Ec(e);if(t.version=`3.3.3`,t.removed=[],!e||!e.document||e.document.nodeType!==Sc.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e,r=n,i=r.currentScript,{DocumentFragment:a,HTMLTemplateElement:o,Node:s,Element:c,NodeFilter:l,NamedNodeMap:u=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:d,DOMParser:f,trustedTypes:p}=e,m=c.prototype,h=$s(m,`cloneNode`),g=$s(m,`remove`),_=$s(m,`nextSibling`),v=$s(m,`childNodes`),y=$s(m,`parentNode`);if(typeof o==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let b,x=``,{implementation:S,createNodeIterator:C,createDocumentFragment:w,getElementsByTagName:T}=n,{importNode:E}=r,D=Tc();t.isSupported=typeof Ts==`function`&&typeof y==`function`&&S&&S.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:ee,ERB_EXPR:te,TMPLIT_EXPR:O,DATA_ATTR:ne,ARIA_ATTR:k,IS_SCRIPT_OR_DATA:re,ATTR_WHITESPACE:A,CUSTOM_ELEMENT:ie}=xc,{IS_ALLOWED_URI:j}=xc,M=null,ae=G({},[...ec,...tc,...nc,...ic,...oc]),N=null,oe=G({},[...sc,...cc,...lc,...uc]),P=Object.seal(Ms(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),se=null,F=null,I=Object.seal(Ms(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),ce=!0,le=!0,ue=!1,de=!0,fe=!1,L=!0,pe=!1,R=!1,me=!1,he=!1,ge=!1,_e=!1,ve=!0,ye=!1,be=!0,xe=!1,Se={},Ce=null,we=G({},[`annotation-xml`,`audio`,`colgroup`,`desc`,`foreignobject`,`head`,`iframe`,`math`,`mi`,`mn`,`mo`,`ms`,`mtext`,`noembed`,`noframes`,`noscript`,`plaintext`,`script`,`style`,`svg`,`template`,`thead`,`title`,`video`,`xmp`]),Te=null,Ee=G({},[`audio`,`video`,`img`,`source`,`image`,`track`]),De=null,Oe=G({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),ke=`http://www.w3.org/1998/Math/MathML`,Ae=`http://www.w3.org/2000/svg`,je=`http://www.w3.org/1999/xhtml`,Me=je,Ne=!1,Pe=null,Fe=G({},[ke,Ae,je],Vs),Ie=G({},[`mi`,`mo`,`mn`,`ms`,`mtext`]),Le=G({},[`annotation-xml`]),Re=G({},[`title`,`style`,`font`,`a`,`script`]),ze=null,Be=[`application/xhtml+xml`,`text/html`],z=null,B=null,Ve=n.createElement(`form`),He=function(e){return e instanceof RegExp||e instanceof Function},Ue=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(B&&B===e)){if((!e||typeof e!=`object`)&&(e={}),e=Qs(e),ze=Be.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,z=ze===`application/xhtml+xml`?Vs:Bs,M=Ks(e,`ALLOWED_TAGS`)?G({},e.ALLOWED_TAGS,z):ae,N=Ks(e,`ALLOWED_ATTR`)?G({},e.ALLOWED_ATTR,z):oe,Pe=Ks(e,`ALLOWED_NAMESPACES`)?G({},e.ALLOWED_NAMESPACES,Vs):Fe,De=Ks(e,`ADD_URI_SAFE_ATTR`)?G(Qs(Oe),e.ADD_URI_SAFE_ATTR,z):Oe,Te=Ks(e,`ADD_DATA_URI_TAGS`)?G(Qs(Ee),e.ADD_DATA_URI_TAGS,z):Ee,Ce=Ks(e,`FORBID_CONTENTS`)?G({},e.FORBID_CONTENTS,z):we,se=Ks(e,`FORBID_TAGS`)?G({},e.FORBID_TAGS,z):Qs({}),F=Ks(e,`FORBID_ATTR`)?G({},e.FORBID_ATTR,z):Qs({}),Se=Ks(e,`USE_PROFILES`)?e.USE_PROFILES:!1,ce=e.ALLOW_ARIA_ATTR!==!1,le=e.ALLOW_DATA_ATTR!==!1,ue=e.ALLOW_UNKNOWN_PROTOCOLS||!1,de=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,fe=e.SAFE_FOR_TEMPLATES||!1,L=e.SAFE_FOR_XML!==!1,pe=e.WHOLE_DOCUMENT||!1,he=e.RETURN_DOM||!1,ge=e.RETURN_DOM_FRAGMENT||!1,_e=e.RETURN_TRUSTED_TYPE||!1,me=e.FORCE_BODY||!1,ve=e.SANITIZE_DOM!==!1,ye=e.SANITIZE_NAMED_PROPS||!1,be=e.KEEP_CONTENT!==!1,xe=e.IN_PLACE||!1,j=e.ALLOWED_URI_REGEXP||gc,Me=e.NAMESPACE||je,Ie=e.MATHML_TEXT_INTEGRATION_POINTS||Ie,Le=e.HTML_INTEGRATION_POINTS||Le,P=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&He(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(P.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&He(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(P.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements==`boolean`&&(P.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),fe&&(le=!1),ge&&(he=!0),Se&&(M=G({},oc),N=Ms(null),Se.html===!0&&(G(M,ec),G(N,sc)),Se.svg===!0&&(G(M,tc),G(N,cc),G(N,uc)),Se.svgFilters===!0&&(G(M,nc),G(N,cc),G(N,uc)),Se.mathMl===!0&&(G(M,ic),G(N,lc),G(N,uc))),Ks(e,`ADD_TAGS`)||(I.tagCheck=null),Ks(e,`ADD_ATTR`)||(I.attributeCheck=null),e.ADD_TAGS&&(typeof e.ADD_TAGS==`function`?I.tagCheck=e.ADD_TAGS:(M===ae&&(M=Qs(M)),G(M,e.ADD_TAGS,z))),e.ADD_ATTR&&(typeof e.ADD_ATTR==`function`?I.attributeCheck=e.ADD_ATTR:(N===oe&&(N=Qs(N)),G(N,e.ADD_ATTR,z))),e.ADD_URI_SAFE_ATTR&&G(De,e.ADD_URI_SAFE_ATTR,z),e.FORBID_CONTENTS&&(Ce===we&&(Ce=Qs(Ce)),G(Ce,e.FORBID_CONTENTS,z)),e.ADD_FORBID_CONTENTS&&(Ce===we&&(Ce=Qs(Ce)),G(Ce,e.ADD_FORBID_CONTENTS,z)),be&&(M[`#text`]=!0),pe&&G(M,[`html`,`head`,`body`]),M.table&&(G(M,[`tbody`]),delete se.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw Js(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw Js(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);b=e.TRUSTED_TYPES_POLICY,x=b.createHTML(``)}else b===void 0&&(b=wc(p,i)),b!==null&&typeof x==`string`&&(x=b.createHTML(``));As&&As(e),B=e}},We=G({},[...tc,...nc,...rc]),Ge=G({},[...ic,...ac]),Ke=function(e){let t=y(e);(!t||!t.tagName)&&(t={namespaceURI:Me,tagName:`template`});let n=Bs(e.tagName),r=Bs(t.tagName);return Pe[e.namespaceURI]?e.namespaceURI===Ae?t.namespaceURI===je?n===`svg`:t.namespaceURI===ke?n===`svg`&&(r===`annotation-xml`||Ie[r]):!!We[n]:e.namespaceURI===ke?t.namespaceURI===je?n===`math`:t.namespaceURI===Ae?n===`math`&&Le[r]:!!Ge[n]:e.namespaceURI===je?t.namespaceURI===Ae&&!Le[r]||t.namespaceURI===ke&&!Ie[r]?!1:!Ge[n]&&(Re[n]||!We[n]):!!(ze===`application/xhtml+xml`&&Pe[e.namespaceURI]):!1},qe=function(e){Rs(t.removed,{element:e});try{y(e).removeChild(e)}catch{g(e)}},Je=function(e,n){try{Rs(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch{Rs(t.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e===`is`)if(he||ge)try{qe(n)}catch{}else try{n.setAttribute(e,``)}catch{}},Ye=function(e){let t=null,r=null;if(me)e=`<remove></remove>`+e;else{let t=Hs(e,/^[\r\n\t ]+/);r=t&&t[0]}ze===`application/xhtml+xml`&&Me===je&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=b?b.createHTML(e):e;if(Me===je)try{t=new f().parseFromString(i,ze)}catch{}if(!t||!t.documentElement){t=S.createDocument(Me,`template`,null);try{t.documentElement.innerHTML=Ne?x:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),Me===je?T.call(t,pe?`html`:`body`)[0]:pe?t.documentElement:a},Xe=function(e){return C.call(e.ownerDocument||e,e,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},Ze=function(e){return e instanceof d&&(typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||!(e.attributes instanceof u)||typeof e.removeAttribute!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`)},Qe=function(e){return typeof s==`function`&&e instanceof s};function $e(e,n,r){Fs(e,e=>{e.call(t,n,r,B)})}let et=function(e){let n=null;if($e(D.beforeSanitizeElements,e,null),Ze(e))return qe(e),!0;let r=z(e.nodeName);if($e(D.uponSanitizeElement,e,{tagName:r,allowedTags:M}),L&&e.hasChildNodes()&&!Qe(e.firstElementChild)&&qs(/<[/\w!]/g,e.innerHTML)&&qs(/<[/\w!]/g,e.textContent)||e.nodeType===Sc.progressingInstruction||L&&e.nodeType===Sc.comment&&qs(/<[/\w]/g,e.data))return qe(e),!0;if(!(I.tagCheck instanceof Function&&I.tagCheck(r))&&(!M[r]||se[r])){if(!se[r]&&nt(r)&&(P.tagNameCheck instanceof RegExp&&qs(P.tagNameCheck,r)||P.tagNameCheck instanceof Function&&P.tagNameCheck(r)))return!1;if(be&&!Ce[r]){let t=y(e)||e.parentNode,n=v(e)||e.childNodes;if(n&&t){let r=n.length;for(let i=r-1;i>=0;--i){let r=h(n[i],!0);r.__removalCount=(e.__removalCount||0)+1,t.insertBefore(r,_(e))}}}return qe(e),!0}return e instanceof c&&!Ke(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&qs(/<\/no(script|embed|frames)/i,e.innerHTML)?(qe(e),!0):(fe&&e.nodeType===Sc.text&&(n=e.textContent,Fs([ee,te,O],e=>{n=Us(n,e,` `)}),e.textContent!==n&&(Rs(t.removed,{element:e.cloneNode()}),e.textContent=n)),$e(D.afterSanitizeElements,e,null),!1)},tt=function(e,t,r){if(F[t]||ve&&(t===`id`||t===`name`)&&(r in n||r in Ve))return!1;if(!(le&&!F[t]&&qs(ne,t))&&!(ce&&qs(k,t))&&!(I.attributeCheck instanceof Function&&I.attributeCheck(t,e))){if(!N[t]||F[t]){if(!(nt(e)&&(P.tagNameCheck instanceof RegExp&&qs(P.tagNameCheck,e)||P.tagNameCheck instanceof Function&&P.tagNameCheck(e))&&(P.attributeNameCheck instanceof RegExp&&qs(P.attributeNameCheck,t)||P.attributeNameCheck instanceof Function&&P.attributeNameCheck(t,e))||t===`is`&&P.allowCustomizedBuiltInElements&&(P.tagNameCheck instanceof RegExp&&qs(P.tagNameCheck,r)||P.tagNameCheck instanceof Function&&P.tagNameCheck(r))))return!1}else if(!De[t]&&!qs(j,Us(r,A,``))&&!((t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&Ws(r,`data:`)===0&&Te[e])&&!(ue&&!qs(re,Us(r,A,``)))&&r)return!1}return!0},nt=function(e){return e!==`annotation-xml`&&Hs(e,ie)},rt=function(e){$e(D.beforeSanitizeAttributes,e,null);let{attributes:n}=e;if(!n||Ze(e))return;let r={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:N,forceKeepAttr:void 0},i=n.length;for(;i--;){let{name:a,namespaceURI:o,value:s}=n[i],c=z(a),l=s,u=a===`value`?l:Gs(l);if(r.attrName=c,r.attrValue=u,r.keepAttr=!0,r.forceKeepAttr=void 0,$e(D.uponSanitizeAttribute,e,r),u=r.attrValue,ye&&(c===`id`||c===`name`)&&(Je(a,e),u=`user-content-`+u),L&&qs(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,u)){Je(a,e);continue}if(c===`attributename`&&Hs(u,`href`)){Je(a,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){Je(a,e);continue}if(!de&&qs(/\/>/i,u)){Je(a,e);continue}fe&&Fs([ee,te,O],e=>{u=Us(u,e,` `)});let d=z(e.nodeName);if(!tt(d,c,u)){Je(a,e);continue}if(b&&typeof p==`object`&&typeof p.getAttributeType==`function`&&!o)switch(p.getAttributeType(d,c)){case`TrustedHTML`:u=b.createHTML(u);break;case`TrustedScriptURL`:u=b.createScriptURL(u);break}if(u!==l)try{o?e.setAttributeNS(o,a,u):e.setAttribute(a,u),Ze(e)?qe(e):Ls(t.removed)}catch{Je(a,e)}}$e(D.afterSanitizeAttributes,e,null)},V=function e(t){let n=null,r=Xe(t);for($e(D.beforeSanitizeShadowDOM,t,null);n=r.nextNode();)$e(D.uponSanitizeShadowNode,n,null),et(n),rt(n),n.content instanceof a&&e(n.content);$e(D.afterSanitizeShadowDOM,t,null)};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,o=null,c=null,l=null;if(Ne=!e,Ne&&(e=`<!-->`),typeof e!=`string`&&!Qe(e))if(typeof e.toString==`function`){if(e=e.toString(),typeof e!=`string`)throw Js(`dirty is not a string, aborting`)}else throw Js(`toString is not a function`);if(!t.isSupported)return e;if(R||Ue(n),t.removed=[],typeof e==`string`&&(xe=!1),xe){if(e.nodeName){let t=z(e.nodeName);if(!M[t]||se[t])throw Js(`root node is forbidden and cannot be sanitized in-place`)}}else if(e instanceof s)i=Ye(`<!---->`),o=i.ownerDocument.importNode(e,!0),o.nodeType===Sc.element&&o.nodeName===`BODY`||o.nodeName===`HTML`?i=o:i.appendChild(o);else{if(!he&&!fe&&!pe&&e.indexOf(`<`)===-1)return b&&_e?b.createHTML(e):e;if(i=Ye(e),!i)return he?null:_e?x:``}i&&me&&qe(i.firstChild);let u=Xe(xe?e:i);for(;c=u.nextNode();)et(c),rt(c),c.content instanceof a&&V(c.content);if(xe)return e;if(he){if(ge)for(l=w.call(i.ownerDocument);i.firstChild;)l.appendChild(i.firstChild);else l=i;return(N.shadowroot||N.shadowrootmode)&&(l=E.call(r,l,!0)),l}let d=pe?i.outerHTML:i.innerHTML;return pe&&M[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&qs(yc,i.ownerDocument.doctype.name)&&(d=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+d),fe&&Fs([ee,te,O],e=>{d=Us(d,e,` `)}),b&&_e?b.createHTML(d):d},t.setConfig=function(){Ue(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}),R=!0},t.clearConfig=function(){B=null,R=!1},t.isValidAttribute=function(e,t,n){return B||Ue({}),tt(z(e),z(t),n)},t.addHook=function(e,t){typeof t==`function`&&Rs(D[e],t)},t.removeHook=function(e,t){if(t!==void 0){let n=Is(D[e],t);return n===-1?void 0:zs(D[e],n,1)[0]}return Ls(D[e])},t.removeHooks=function(e){D[e]=[]},t.removeAllHooks=function(){D=Tc()},t}var Dc=Ec();function Oc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var kc=Oc();function Ac(e){kc=e}var jc={exec:()=>null};function K(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(Nc.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var Mc=(()=>{try{return!0}catch{return!1}})(),Nc={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},Pc=/^(?:[ \t]*(?:\n|$))+/,Fc=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Ic=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Lc=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Rc=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,zc=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Bc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Vc=K(Bc).replace(/bull/g,zc).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Hc=K(Bc).replace(/bull/g,zc).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Uc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Wc=/^[^\n]+/,Gc=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Kc=K(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Gc).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),qc=K(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,zc).getRegex(),Jc=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Yc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Xc=K(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Yc).replace(`tag`,Jc).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Zc=K(Uc).replace(`hr`,Lc).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Jc).getRegex(),Qc={blockquote:K(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,Zc).getRegex(),code:Fc,def:Kc,fences:Ic,heading:Rc,hr:Lc,html:Xc,lheading:Vc,list:qc,newline:Pc,paragraph:Zc,table:jc,text:Wc},$c=K(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,Lc).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Jc).getRegex(),el={...Qc,lheading:Hc,table:$c,paragraph:K(Uc).replace(`hr`,Lc).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,$c).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Jc).getRegex()},tl={...Qc,html:K(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Yc).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:jc,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:K(Uc).replace(`hr`,Lc).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Vc).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},nl=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,rl=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,il=/^( {2,}|\\)\n(?!\s*$)/,al=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ol=/[\p{P}\p{S}]/u,sl=/[\s\p{P}\p{S}]/u,cl=/[^\s\p{P}\p{S}]/u,ll=K(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,sl).getRegex(),ul=/(?!~)[\p{P}\p{S}]/u,dl=/(?!~)[\s\p{P}\p{S}]/u,fl=/(?:[^\s\p{P}\p{S}]|~)/u,pl=K(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,Mc?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),ml=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,hl=K(ml,`u`).replace(/punct/g,ol).getRegex(),gl=K(ml,`u`).replace(/punct/g,ul).getRegex(),_l=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,vl=K(_l,`gu`).replace(/notPunctSpace/g,cl).replace(/punctSpace/g,sl).replace(/punct/g,ol).getRegex(),yl=K(_l,`gu`).replace(/notPunctSpace/g,fl).replace(/punctSpace/g,dl).replace(/punct/g,ul).getRegex(),bl=K(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,cl).replace(/punctSpace/g,sl).replace(/punct/g,ol).getRegex(),xl=K(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,ol).getRegex(),Sl=K(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,cl).replace(/punctSpace/g,sl).replace(/punct/g,ol).getRegex(),Cl=K(/\\(punct)/,`gu`).replace(/punct/g,ol).getRegex(),wl=K(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Tl=K(Yc).replace(`(?:-->|$)`,`-->`).getRegex(),El=K(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Tl).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Dl=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Ol=K(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,Dl).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),kl=K(/^!?\[(label)\]\[(ref)\]/).replace(`label`,Dl).replace(`ref`,Gc).getRegex(),Al=K(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Gc).getRegex(),jl=K(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,kl).replace(`nolink`,Al).getRegex(),Ml=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Nl={_backpedal:jc,anyPunctuation:Cl,autolink:wl,blockSkip:pl,br:il,code:rl,del:jc,delLDelim:jc,delRDelim:jc,emStrongLDelim:hl,emStrongRDelimAst:vl,emStrongRDelimUnd:bl,escape:nl,link:Ol,nolink:Al,punctuation:ll,reflink:kl,reflinkSearch:jl,tag:El,text:al,url:jc},Pl={...Nl,link:K(/^!?\[(label)\]\((.*?)\)/).replace(`label`,Dl).getRegex(),reflink:K(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,Dl).getRegex()},Fl={...Nl,emStrongRDelimAst:yl,emStrongLDelim:gl,delLDelim:xl,delRDelim:Sl,url:K(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,Ml).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:K(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,Ml).getRegex()},Il={...Fl,br:K(il).replace(`{2,}`,`*`).getRegex(),text:K(Fl.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},Ll={normal:Qc,gfm:el,pedantic:tl},Rl={normal:Nl,gfm:Fl,breaks:Il,pedantic:Pl},zl={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Bl=e=>zl[e];function Vl(e,t){if(t){if(Nc.escapeTest.test(e))return e.replace(Nc.escapeReplace,Bl)}else if(Nc.escapeTestNoEncode.test(e))return e.replace(Nc.escapeReplaceNoEncode,Bl);return e}function Hl(e){try{e=encodeURI(e).replace(Nc.percentDecode,`%`)}catch{return null}return e}function Ul(e,t){let n=e.replace(Nc.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(Nc.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(Nc.slashPipe,`|`);return n}function Wl(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Gl(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Kl(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function ql(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Jl(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var Yl=class{options;rules;lexer;constructor(e){this.options=e||kc}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,``);return{type:`code`,raw:t[0],codeBlockStyle:`indented`,text:this.options.pedantic?e:Wl(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Jl(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=Wl(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:Wl(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=Wl(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Kl(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,``),e.tokens[0]?.type===`text`||e.tokens[0]?.type===`paragraph`){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,``),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let n={type:`checkbox`,raw:t[0]+` `,checked:t[0]!==`[ ]`};e.checked=n.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=n.raw+e.tokens[0].raw,e.tokens[0].text=n.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(n)):e.tokens.unshift({type:`paragraph`,raw:n.raw,text:n.raw,tokens:[n]}):e.tokens.unshift(n)}}if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:`html`,block:!0,raw:t[0],pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:t[0],href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Ul(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Ul(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:t[0],depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=Wl(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Gl(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),ql(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return ql(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!=null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},Xl=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||kc,this.options.tokenizer=this.options.tokenizer||new Yl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:Nc,block:Ll.normal,inline:Rl.normal};this.options.pedantic?(t.block=Ll.pedantic,t.inline=Rl.pedantic):this.options.gfm&&(t.block=Ll.gfm,this.options.breaks?t.inline=Rl.breaks:t.inline=Rl.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ll,inline:Rl}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(Nc.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Nc.tabCharGlobal,`    `).replace(Nc.spaceLine,``));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=t.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){let a=t.at(-1);n&&a?.type===`paragraph`?(a.raw+=(a.raw.endsWith(`
`)?``:`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(r),n=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!=null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!=null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!=null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``;for(;e;){a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){let t=`Infinite loop on byte: `+e.charCodeAt(0);if(this.options.silent){console.error(t);break}else throw Error(t)}}return t}},Zl=class{options;parser;constructor(e){this.options=e||kc}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(Nc.notSpaceStart)?.[0],i=e.replace(Nc.endingNewline,``)+`
`;return r?`<pre><code class="language-`+Vl(r)+`">`+(n?i:Vl(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Vl(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Vl(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Hl(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+Vl(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Hl(e);if(i===null)return Vl(n);e=i;let a=`<img src="${e}" alt="${Vl(n)}"`;return t&&(a+=` title="${Vl(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Vl(e.text)}},Ql=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},$l=class e{options;renderer;textRenderer;constructor(e){this.options=e||kc,this.options.renderer=this.options.renderer||new Zl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ql}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},eu=class{options;block;constructor(e){this.options=e||kc}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?Xl.lex:Xl.lexInline}provideParser(){return this.block?$l.parse:$l.parseInline}},tu=new class{defaults=Oc();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=$l;Renderer=Zl;TextRenderer=Ql;Lexer=Xl;Tokenizer=Yl;Hooks=eu;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Zl(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Yl(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new eu;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];eu.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&eu.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Xl.lex(e,t??this.defaults)}parser(e,t){return $l.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer():e?Xl.lex:Xl.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser():e?$l.parse:$l.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer():e?Xl.lex:Xl.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser():e?$l.parse:$l.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Vl(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function q(e,t){return tu.parse(e,t)}q.options=q.setOptions=function(e){return tu.setOptions(e),q.defaults=tu.defaults,Ac(q.defaults),q},q.getDefaults=Oc,q.defaults=kc,q.use=function(...e){return tu.use(...e),q.defaults=tu.defaults,Ac(q.defaults),q},q.walkTokens=function(e,t){return tu.walkTokens(e,t)},q.parseInline=tu.parseInline,q.Parser=$l,q.parser=$l.parse,q.Renderer=Zl,q.TextRenderer=Ql,q.Lexer=Xl,q.lexer=Xl.lex,q.Tokenizer=Yl,q.Hooks=eu,q.parse=q,q.options,q.setOptions,q.use,q.walkTokens,q.parseInline,$l.parse,Xl.lex;var nu={ALLOWED_TAGS:`a.b.blockquote.br.button.code.del.details.div.em.h1.h2.h3.h4.hr.i.li.ol.p.pre.span.strong.summary.table.tbody.td.th.thead.tr.ul.img`.split(`.`),ALLOWED_ATTR:[`class`,`href`,`rel`,`target`,`title`,`start`,`src`,`alt`,`data-code`,`type`,`aria-label`],ADD_DATA_URI_TAGS:[`img`]},ru=!1,iu=14e4,au=4e4,ou=200,su=5e4,cu=/^data:image\/[a-z0-9.+-]+;base64,/i,lu=new Map,uu=`chat-link-tail-blur`;function du(e){let t=lu.get(e);return t===void 0?null:(lu.delete(e),lu.set(e,t),t)}function fu(e,t){if(lu.set(e,t),lu.size<=ou)return;let n=lu.keys().next().value;n&&lu.delete(n)}function pu(){ru||(ru=!0,Dc.addHook(`afterSanitizeAttributes`,e=>{if(!(e instanceof HTMLAnchorElement))return;let t=e.getAttribute(`href`);if(t){try{let n=new URL(t,window.location.href);if(n.protocol!==`http:`&&n.protocol!==`https:`&&n.protocol!==`mailto:`){e.removeAttribute(`href`);return}}catch{}e.setAttribute(`rel`,`noreferrer noopener`),e.setAttribute(`target`,`_blank`),t.toLowerCase().includes(`tail`)&&e.classList.add(uu)}}))}function mu(e){let t=e.trim();if(!t)return``;if(pu(),t.length<=su){let e=du(t);if(e!==null)return e}let n=u(t,iu),r=n.truncated?`\n\n… truncated (${n.total} chars, showing first ${n.text.length}).`:``;if(n.text.length>au){let e=vu(`${n.text}${r}`),i=Dc.sanitize(e,nu);return t.length<=su&&fu(t,i),i}let i;try{i=q.parse(`${n.text}${r}`,{renderer:hu,gfm:!0,breaks:!0})}catch(e){console.warn(`[markdown] marked.parse failed, falling back to plain text:`,e),i=`<pre class="code-block">${_u(`${n.text}${r}`)}</pre>`}let a=Dc.sanitize(i,nu);return t.length<=su&&fu(t,a),a}var hu=new q.Renderer;hu.html=({text:e})=>_u(e),hu.image=e=>{let t=gu(e.text),n=e.href?.trim()??``;return cu.test(n)?`<img class="markdown-inline-image" src="${_u(n)}" alt="${_u(t)}">`:_u(t)};function gu(e){return e?.trim()||`image`}hu.code=({text:e,lang:t,escaped:n})=>{let r=`<pre><code${t?` class="language-${_u(t)}"`:``}>${n?e:_u(e)}</code></pre>`,i=`<div class="code-block-header">${t?`<span class="code-block-lang">${_u(t)}</span>`:``}${`<button type="button" class="code-block-copy" data-code="${e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}" aria-label="Copy code"><span class="code-block-copy__idle">Copy</span><span class="code-block-copy__done">Copied!</span></button>`}</div>`,a=e.trim();if(t===`json`||!t&&(a.startsWith(`{`)&&a.endsWith(`}`)||a.startsWith(`[`)&&a.endsWith(`]`))){let t=e.split(`
`).length;return`<details class="json-collapse"><summary>${t>1?`JSON &middot; ${t} lines`:`JSON`}</summary><div class="code-block-wrapper">${i}${r}</div></details>`}return`<div class="code-block-wrapper">${i}${r}</div>`};function _u(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function vu(e){return`<div class="markdown-plain-text-fallback">${_u(e.replace(/\r\n?/g,`
`))}</div>`}var yu=`data:`,bu=new Set([`http:`,`https:`,`blob:`]),xu=new Set([`image/svg+xml`]);function Su(e){if(!e.toLowerCase().startsWith(yu))return!1;let t=e.indexOf(`,`);if(t<5)return!1;let n=e.slice(5,t).split(`;`)[0]?.trim().toLowerCase()??``;return n.startsWith(`image/`)?!xu.has(n):!1}function Cu(e,t,n={}){let r=e.trim();if(!r)return null;if(n.allowDataImage===!0&&Su(r))return r;if(r.toLowerCase().startsWith(yu))return null;try{let e=new URL(r,t);return bu.has(e.protocol.toLowerCase())?e.toString():null}catch{return null}}function wu(e,t={}){let n=Cu(e,t.baseHref??window.location.href,t);if(!n)return null;let r=window.open(n,`_blank`,`noopener,noreferrer`);return r&&(r.opener=null),r}var Tu=/\p{Script=Hebrew}|\p{Script=Arabic}|\p{Script=Syriac}|\p{Script=Thaana}|\p{Script=Nko}|\p{Script=Samaritan}|\p{Script=Mandaic}|\p{Script=Adlam}|\p{Script=Phoenician}|\p{Script=Lydian}/u;function Eu(e,t=/[\s\p{P}\p{S}]/u){if(!e)return`ltr`;for(let n of e)if(!t.test(n))return Tu.test(n)?`rtl`:`ltr`;return`ltr`}var Du=[{id:`read`,label:`read`,description:`Read file contents`,sectionId:`fs`,profiles:[`coding`]},{id:`write`,label:`write`,description:`Create or overwrite files`,sectionId:`fs`,profiles:[`coding`]},{id:`edit`,label:`edit`,description:`Make precise edits`,sectionId:`fs`,profiles:[`coding`]},{id:`apply_patch`,label:`apply_patch`,description:`Patch files (OpenAI)`,sectionId:`fs`,profiles:[`coding`]},{id:`exec`,label:`exec`,description:`Run shell commands`,sectionId:`runtime`,profiles:[`coding`]},{id:`process`,label:`process`,description:`Manage background processes`,sectionId:`runtime`,profiles:[`coding`]},{id:`web_search`,label:`web_search`,description:`Search the web`,sectionId:`web`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`web_fetch`,label:`web_fetch`,description:`Fetch web content`,sectionId:`web`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`memory_search`,label:`memory_search`,description:`Semantic search`,sectionId:`memory`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`memory_get`,label:`memory_get`,description:`Read memory files`,sectionId:`memory`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`sessions_list`,label:`sessions_list`,description:`List sessions`,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`sessions_history`,label:`sessions_history`,description:`Session history`,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`sessions_send`,label:`sessions_send`,description:`Send to session`,sectionId:`sessions`,profiles:[`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`sessions_spawn`,label:`sessions_spawn`,description:`Spawn sub-agent`,sectionId:`sessions`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`sessions_yield`,label:`sessions_yield`,description:`End turn to receive sub-agent results`,sectionId:`sessions`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`subagents`,label:`subagents`,description:`Manage sub-agents`,sectionId:`sessions`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`session_status`,label:`session_status`,description:`Session status`,sectionId:`sessions`,profiles:[`minimal`,`coding`,`messaging`],includeInOpenClawGroup:!0},{id:`browser`,label:`browser`,description:`Control web browser`,sectionId:`ui`,profiles:[],includeInOpenClawGroup:!0},{id:`canvas`,label:`canvas`,description:`Control canvases`,sectionId:`ui`,profiles:[],includeInOpenClawGroup:!0},{id:`message`,label:`message`,description:`Send messages`,sectionId:`messaging`,profiles:[`messaging`],includeInOpenClawGroup:!0},{id:`cron`,label:`cron`,description:`Schedule tasks`,sectionId:`automation`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`gateway`,label:`gateway`,description:`Gateway control`,sectionId:`automation`,profiles:[],includeInOpenClawGroup:!0},{id:`nodes`,label:`nodes`,description:`Nodes + devices`,sectionId:`nodes`,profiles:[],includeInOpenClawGroup:!0},{id:`agents_list`,label:`agents_list`,description:`List agents`,sectionId:`agents`,profiles:[],includeInOpenClawGroup:!0},{id:`image`,label:`image`,description:`Image understanding`,sectionId:`media`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`image_generate`,label:`image_generate`,description:`Image generation`,sectionId:`media`,profiles:[`coding`],includeInOpenClawGroup:!0},{id:`tts`,label:`tts`,description:`Text-to-speech conversion`,sectionId:`media`,profiles:[],includeInOpenClawGroup:!0}];new Map(Du.map(e=>[e.id,e]));function Ou(e){return Du.filter(t=>t.profiles.includes(e)).map(e=>e.id)}var ku={minimal:{allow:Ou(`minimal`)},coding:{allow:Ou(`coding`)},messaging:{allow:Ou(`messaging`)},full:{}};function Au(){let e=new Map;for(let t of Du){let n=`group:${t.sectionId}`,r=e.get(n)??[];r.push(t.id),e.set(n,r)}let t=Du.filter(e=>e.includeInOpenClawGroup).map(e=>e.id);return{"group:openclaw":t,...Object.fromEntries(e.entries())}}var ju=Au();function Mu(e){if(!e)return;let t=ku[e];if(t&&!(!t.allow&&!t.deny))return{allow:t.allow?[...t.allow]:void 0,deny:t.deny?[...t.deny]:void 0}}var Nu={bash:`exec`,"apply-patch":`apply_patch`},Pu={...ju};function Fu(e){let t=e.trim().toLowerCase();return Nu[t]??t}function Iu(e){return e?e.map(Fu).filter(Boolean):[]}function Lu(e){let t=Iu(e),n=[];for(let e of t){let t=Pu[e];if(t){n.push(...t);continue}n.push(e)}return Array.from(new Set(n))}function Ru(e){return Mu(e)}var zu=[{id:`fs`,label:`Files`,tools:[{id:`read`,label:`read`,description:`Read file contents`},{id:`write`,label:`write`,description:`Create or overwrite files`},{id:`edit`,label:`edit`,description:`Make precise edits`},{id:`apply_patch`,label:`apply_patch`,description:`Patch files (OpenAI)`}]},{id:`runtime`,label:`Runtime`,tools:[{id:`exec`,label:`exec`,description:`Run shell commands`},{id:`process`,label:`process`,description:`Manage background processes`}]},{id:`web`,label:`Web`,tools:[{id:`web_search`,label:`web_search`,description:`Search the web`},{id:`web_fetch`,label:`web_fetch`,description:`Fetch web content`}]},{id:`memory`,label:`Memory`,tools:[{id:`memory_search`,label:`memory_search`,description:`Semantic search`},{id:`memory_get`,label:`memory_get`,description:`Read memory files`}]},{id:`sessions`,label:`Sessions`,tools:[{id:`sessions_list`,label:`sessions_list`,description:`List sessions`},{id:`sessions_history`,label:`sessions_history`,description:`Session history`},{id:`sessions_send`,label:`sessions_send`,description:`Send to session`},{id:`sessions_spawn`,label:`sessions_spawn`,description:`Spawn sub-agent`},{id:`session_status`,label:`session_status`,description:`Session status`}]},{id:`ui`,label:`UI`,tools:[{id:`browser`,label:`browser`,description:`Control web browser`},{id:`canvas`,label:`canvas`,description:`Control canvases`}]},{id:`messaging`,label:`Messaging`,tools:[{id:`message`,label:`message`,description:`Send messages`}]},{id:`automation`,label:`Automation`,tools:[{id:`cron`,label:`cron`,description:`Schedule tasks`},{id:`gateway`,label:`gateway`,description:`Gateway control`}]},{id:`nodes`,label:`Nodes`,tools:[{id:`nodes`,label:`nodes`,description:`Nodes + devices`}]},{id:`agents`,label:`Agents`,tools:[{id:`agents_list`,label:`agents_list`,description:`List agents`}]},{id:`media`,label:`Media`,tools:[{id:`image`,label:`image`,description:`Image understanding`}]}],Bu=[{id:`minimal`,label:`Minimal`},{id:`coding`,label:`Coding`},{id:`messaging`,label:`Messaging`},{id:`full`,label:`Full`}];function Vu(e){return e?.groups?.length?e.groups.map(e=>({id:e.id,label:e.label,source:e.source,pluginId:e.pluginId,tools:e.tools.map(e=>({id:e.id,label:e.label,description:e.description,source:e.source,pluginId:e.pluginId,optional:e.optional,defaultProfiles:[...e.defaultProfiles]}))})):zu}function Hu(e){return e?.profiles?.length?e.profiles:Bu}function Uu(e){return e.name?.trim()||e.identity?.name?.trim()||e.id}var Wu=/^(https?:\/\/|data:image\/|\/)/i;function Gu(e,t){let n=[t?.avatar?.trim(),e.identity?.avatarUrl?.trim(),e.identity?.avatar?.trim()];for(let e of n)if(e&&Wu.test(e))return e;return null}function Ku(e){let t=e?.trim()?e.replace(/\/$/,``):``;return t?`${t}/favicon.svg`:`favicon.svg`}function qu(e,t){return t&&e===t?`default`:null}function Ju(e,t){let n=e;return{entry:(n?.agents?.list??[]).find(e=>e?.id===t),defaults:n?.agents?.defaults,globalTools:n?.tools}}function Yu(e,t,n,r,i){let a=Ju(t,e.id),o=(n&&n.agentId===e.id?n.workspace:null)||a.entry?.workspace||a.defaults?.workspace||`default`,s=a.entry?.model?Xu(a.entry?.model):Xu(a.defaults?.model),c=i?.name?.trim()||e.identity?.name?.trim()||e.name?.trim()||a.entry?.name||e.id,l=Gu(e,i)?`custom`:`—`,u=Array.isArray(a.entry?.skills)?a.entry?.skills:null,d=u?.length??null;return{workspace:o,model:s,identityName:c,identityAvatar:l,skillsLabel:u?`${d} selected`:`all skills`,isDefault:!!(r&&e.id===r)}}function Xu(e){if(!e)return`-`;if(typeof e==`string`)return e.trim()||`-`;if(typeof e==`object`&&e){let t=e,n=t.primary?.trim();if(n){let e=Array.isArray(t.fallbacks)?t.fallbacks.length:0;return e>0?`${n} (+${e} fallback)`:n}}return`-`}function Zu(e){let t=e.match(/^(.+) \(\+\d+ fallback\)$/);return t?t[1]:e}function Qu(e){if(!e)return null;if(typeof e==`string`)return e.trim()||null;if(typeof e==`object`&&e){let t=e;return(typeof t.primary==`string`?t.primary:typeof t.model==`string`?t.model:typeof t.id==`string`?t.id:typeof t.value==`string`?t.value:null)?.trim()||null}return null}function $u(e){if(!e||typeof e==`string`)return null;if(typeof e==`object`&&e){let t=e,n=Array.isArray(t.fallbacks)?t.fallbacks:Array.isArray(t.fallback)?t.fallback:null;return n?n.filter(e=>typeof e==`string`):null}return null}function ed(e,t){return $u(e)??$u(t)}function td(e,t){if(typeof t!=`string`)return;let n=t.trim();n&&e.add(n)}function nd(e,t){if(!t)return;if(typeof t==`string`){td(e,t);return}if(typeof t!=`object`)return;let n=t;td(e,n.primary),td(e,n.model),td(e,n.id),td(e,n.value);let r=Array.isArray(n.fallbacks)?n.fallbacks:Array.isArray(n.fallback)?n.fallback:[];for(let t of r)td(e,t)}function rd(e){let t=Array.from(e),n=Array.from({length:t.length},()=>``),r=(e,r,i)=>{let a=e,o=r,s=e;for(;a<r&&o<i;)n[s++]=t[a].localeCompare(t[o])<=0?t[a++]:t[o++];for(;a<r;)n[s++]=t[a++];for(;o<i;)n[s++]=t[o++];for(let r=e;r<i;r+=1)t[r]=n[r]},i=(e,t)=>{if(t-e<=1)return;let n=e+t>>>1;i(e,n),i(n,t),r(e,n,t)};return i(0,t.length),t}function id(e){if(!e||typeof e!=`object`)return[];let t=e.agents;if(!t||typeof t!=`object`)return[];let n=new Set,r=t.defaults;if(r&&typeof r==`object`){let e=r;nd(n,e.model);let t=e.models;if(t&&typeof t==`object`)for(let e of Object.keys(t))td(n,e)}let i=t.list;if(i&&typeof i==`object`)for(let e of Object.values(i))!e||typeof e!=`object`||nd(n,e.model);return rd(n)}function ad(e){return e.split(`,`).map(e=>e.trim()).filter(Boolean)}function od(e){let t=e?.agents?.defaults?.models;if(!t||typeof t!=`object`)return[];let n=[];for(let[e,r]of Object.entries(t)){let t=e.trim();if(!t)continue;let i=r&&typeof r==`object`&&`alias`in r&&typeof r.alias==`string`?r.alias?.trim():void 0,a=i&&i!==t?`${i} (${t})`:t;n.push({value:t,label:a})}return n}function sd(e,t,r){let a=new Set,o=[],s=(e,t)=>{let n=e.toLowerCase();a.has(n)||(a.add(n),o.push({value:e,label:t}))};for(let t of od(e))s(t.value,t.label);if(r)for(let e of r){let t=e.provider?.trim();s(t?`${t}/${e.id}`:e.id,t?`${e.id} · ${t}`:e.id)}return t&&!a.has(t.toLowerCase())&&o.unshift({value:t,label:`Current (${t})`}),o.length===0?i:o.map(e=>n`<option value=${e.value}>${e.label}</option>`)}function cd(e){let t=Fu(e);if(!t)return{kind:`exact`,value:``};if(t===`*`)return{kind:`all`};if(!t.includes(`*`))return{kind:`exact`,value:t};let n=t.replace(/[.*+?^${}()|[\\]\\]/g,`\\$&`);return{kind:`regex`,value:RegExp(`^${n.replaceAll(`\\*`,`.*`)}$`)}}function ld(e){return Array.isArray(e)?Lu(e).map(cd).filter(e=>e.kind!==`exact`||e.value.length>0):[]}function ud(e,t){for(let n of t)if(n.kind===`all`||n.kind===`exact`&&e===n.value||n.kind===`regex`&&n.value.test(e))return!0;return!1}function dd(e,t){if(!t)return!0;let n=Fu(e);if(ud(n,ld(t.deny)))return!1;let r=ld(t.allow);return!!(r.length===0||ud(n,r)||n===`apply_patch`&&ud(`exec`,r))}function fd(e,t){if(!Array.isArray(t)||t.length===0)return!1;let n=Fu(e),r=ld(t);return!!(ud(n,r)||n===`apply_patch`&&ud(`exec`,r))}function pd(e){return Ru(e)??void 0}var md=1500,hd=2e3,gd=`Copy as markdown`,_d=`Copied`,vd=`Copy failed`;async function yd(e){if(!e)return!1;try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function bd(e,t){e.title=t,e.setAttribute(`aria-label`,t)}function xd(e){let t=e.label??gd;return n`
    <button
      class="btn btn--xs chat-copy-btn"
      type="button"
      title=${t}
      aria-label=${t}
      @click=${async n=>{let r=n.currentTarget;if(!r||r.dataset.copying===`1`)return;r.dataset.copying=`1`,r.setAttribute(`aria-busy`,`true`),r.disabled=!0;let i=await yd(e.text());if(r.isConnected){if(delete r.dataset.copying,r.removeAttribute(`aria-busy`),r.disabled=!1,!i){r.dataset.error=`1`,bd(r,vd),window.setTimeout(()=>{r.isConnected&&(delete r.dataset.error,bd(r,t))},hd);return}r.dataset.copied=`1`,bd(r,_d),window.setTimeout(()=>{r.isConnected&&(delete r.dataset.copied,bd(r,t))},md)}}}
    >
      <span class="chat-copy-btn__icon" aria-hidden="true">
        <span class="chat-copy-btn__icon-copy">${W.copy}</span>
        <span class="chat-copy-btn__icon-check">${W.check}</span>
      </span>
    </button>
  `}function Sd(e){return xd({text:()=>e,label:gd})}function Cd(e){let t=e,n=typeof t.role==`string`?t.role:`unknown`,r=typeof t.toolCallId==`string`||typeof t.tool_call_id==`string`,i=t.content,a=Array.isArray(i)?i:null,o=Array.isArray(a)&&a.some(e=>{let t=e,n=(typeof t.type==`string`?t.type:``).toLowerCase();return n===`toolresult`||n===`tool_result`}),s=typeof t.toolName==`string`||typeof t.tool_name==`string`;(r||o||s)&&(n=`toolResult`);let c=[];typeof t.content==`string`?c=[{type:`text`,text:t.content}]:Array.isArray(t.content)?c=t.content.map(e=>({type:e.type||`text`,text:e.text,name:e.name,args:e.args||e.arguments})):typeof t.text==`string`&&(c=[{type:`text`,text:t.text}]);let l=typeof t.timestamp==`number`?t.timestamp:Date.now(),u=typeof t.id==`string`?t.id:void 0,d=typeof t.senderLabel==`string`&&t.senderLabel.trim()?t.senderLabel.trim():null;return(n===`user`||n===`User`)&&(c=c.map(e=>e.type===`text`&&typeof e.text==`string`?{...e,text:ss(e.text)}:e)),{role:n,content:c,timestamp:l,id:u,senderLabel:d}}function wd(e){let t=e.toLowerCase();return e===`user`||e===`User`?e:e===`assistant`?`assistant`:e===`system`?`system`:t===`toolresult`||t===`tool_result`||t===`tool`||t===`function`?`tool`:e}function Td(e){let t=e,n=typeof t.role==`string`?t.role.toLowerCase():``;return n===`toolresult`||n===`tool_result`}function Ed(){let e=globalThis;return e.SpeechRecognition??e.webkitSpeechRecognition??null}function Dd(){return Ed()!==null}var Od=null;function kd(e){let t=Ed();if(!t)return e.onError?.(`Speech recognition is not supported in this browser`),!1;Ad();let n=new t;return n.continuous=!0,n.interimResults=!0,n.lang=navigator.language||`en-US`,n.addEventListener(`start`,()=>e.onStart?.()),n.addEventListener(`result`,t=>{let n=t,r=``,i=``;for(let e=n.resultIndex;e<n.results.length;e++){let t=n.results[e];if(!t?.[0])continue;let a=t[0].transcript;t.isFinal?i+=a:r+=a}i?e.onTranscript(i,!0):r&&e.onTranscript(r,!1)}),n.addEventListener(`error`,t=>{let n=t;n.error===`aborted`||n.error===`no-speech`||e.onError?.(n.error)}),n.addEventListener(`end`,()=>{Od===n&&(Od=null),e.onEnd?.()}),Od=n,n.start(),!0}function Ad(){if(Od){let e=Od;Od=null;try{e.stop()}catch{}}}function jd(){return`speechSynthesis`in globalThis}var Md=null;function Nd(e,t){if(!jd())return t?.onError?.(`Speech synthesis is not supported in this browser`),!1;Pd();let n=Id(e);if(!n.trim())return!1;let r=new SpeechSynthesisUtterance(n);return r.rate=1,r.pitch=1,r.addEventListener(`start`,()=>t?.onStart?.()),r.addEventListener(`end`,()=>{Md===r&&(Md=null),t?.onEnd?.()}),r.addEventListener(`error`,e=>{Md===r&&(Md=null),!(e.error===`canceled`||e.error===`interrupted`)&&t?.onError?.(e.error)}),Md=r,speechSynthesis.speak(r),!0}function Pd(){Md&&=null,jd()&&speechSynthesis.cancel()}function Fd(){return jd()&&speechSynthesis.speaking}function Id(e){return e.replace(/```[\s\S]*?```/g,``).replace(/`[^`]+`/g,``).replace(/!\[.*?\]\(.*?\)/g,``).replace(/\[([^\]]+)\]\(.*?\)/g,`$1`).replace(/^#{1,6}\s+/gm,``).replace(/\*{1,3}(.*?)\*{1,3}/g,`$1`).replace(/_{1,3}(.*?)_{1,3}/g,`$1`).replace(/^>\s?/gm,``).replace(/^[-*_]{3,}\s*$/gm,``).replace(/^\s*[-*+]\s+/gm,``).replace(/^\s*\d+\.\s+/gm,``).replace(/<[^>]+>/g,``).replace(/\n{3,}/g,`

`).trim()}var Ld={version:1,fallback:{emoji:`🧩`,detailKeys:[`command`,`path`,`url`,`targetUrl`,`targetId`,`ref`,`element`,`node`,`nodeId`,`id`,`requestId`,`to`,`channelId`,`guildId`,`userId`,`name`,`query`,`pattern`,`messageId`]},tools:{bash:{emoji:`🛠️`,title:`Bash`,detailKeys:[`command`]},process:{emoji:`🧰`,title:`Process`,detailKeys:[`sessionId`]},read:{emoji:`📖`,title:`Read`,detailKeys:[`path`]},write:{emoji:`✍️`,title:`Write`,detailKeys:[`path`]},edit:{emoji:`📝`,title:`Edit`,detailKeys:[`path`]},attach:{emoji:`📎`,title:`Attach`,detailKeys:[`path`,`url`,`fileName`]},browser:{emoji:`🌐`,title:`Browser`,actions:{status:{label:`status`},start:{label:`start`},stop:{label:`stop`},tabs:{label:`tabs`},open:{label:`open`,detailKeys:[`targetUrl`]},focus:{label:`focus`,detailKeys:[`targetId`]},close:{label:`close`,detailKeys:[`targetId`]},snapshot:{label:`snapshot`,detailKeys:[`targetUrl`,`targetId`,`ref`,`element`,`format`]},screenshot:{label:`screenshot`,detailKeys:[`targetUrl`,`targetId`,`ref`,`element`]},navigate:{label:`navigate`,detailKeys:[`targetUrl`,`targetId`]},console:{label:`console`,detailKeys:[`level`,`targetId`]},pdf:{label:`pdf`,detailKeys:[`targetId`]},upload:{label:`upload`,detailKeys:[`paths`,`ref`,`inputRef`,`element`,`targetId`]},dialog:{label:`dialog`,detailKeys:[`accept`,`promptText`,`targetId`]},act:{label:`act`,detailKeys:[`request.kind`,`request.ref`,`request.selector`,`request.text`,`request.value`]}}},canvas:{emoji:`🖼️`,title:`Canvas`,actions:{present:{label:`present`,detailKeys:[`target`,`node`,`nodeId`]},hide:{label:`hide`,detailKeys:[`node`,`nodeId`]},navigate:{label:`navigate`,detailKeys:[`url`,`node`,`nodeId`]},eval:{label:`eval`,detailKeys:[`javaScript`,`node`,`nodeId`]},snapshot:{label:`snapshot`,detailKeys:[`format`,`node`,`nodeId`]},a2ui_push:{label:`A2UI push`,detailKeys:[`jsonlPath`,`node`,`nodeId`]},a2ui_reset:{label:`A2UI reset`,detailKeys:[`node`,`nodeId`]}}},nodes:{emoji:`📱`,title:`Nodes`,actions:{status:{label:`status`},describe:{label:`describe`,detailKeys:[`node`,`nodeId`]},pending:{label:`pending`},approve:{label:`approve`,detailKeys:[`requestId`]},reject:{label:`reject`,detailKeys:[`requestId`]},notify:{label:`notify`,detailKeys:[`node`,`nodeId`,`title`,`body`]},camera_snap:{label:`camera snap`,detailKeys:[`node`,`nodeId`,`facing`,`deviceId`]},camera_list:{label:`camera list`,detailKeys:[`node`,`nodeId`]},camera_clip:{label:`camera clip`,detailKeys:[`node`,`nodeId`,`facing`,`duration`,`durationMs`]},screen_record:{label:`screen record`,detailKeys:[`node`,`nodeId`,`duration`,`durationMs`,`fps`,`screenIndex`]}}},cron:{emoji:`⏰`,title:`Cron`,actions:{status:{label:`status`},list:{label:`list`},add:{label:`add`,detailKeys:[`job.name`,`job.id`,`job.schedule`,`job.cron`]},update:{label:`update`,detailKeys:[`id`]},remove:{label:`remove`,detailKeys:[`id`]},run:{label:`run`,detailKeys:[`id`]},runs:{label:`runs`,detailKeys:[`id`]},wake:{label:`wake`,detailKeys:[`text`,`mode`]}}},gateway:{emoji:`🔌`,title:`Gateway`,actions:{restart:{label:`restart`,detailKeys:[`reason`,`delayMs`]}}},whatsapp_login:{emoji:`🟢`,title:`WhatsApp Login`,actions:{start:{label:`start`},wait:{label:`wait`}}},discord:{emoji:`💬`,title:`Discord`,actions:{react:{label:`react`,detailKeys:[`channelId`,`messageId`,`emoji`]},reactions:{label:`reactions`,detailKeys:[`channelId`,`messageId`]},sticker:{label:`sticker`,detailKeys:[`to`,`stickerIds`]},poll:{label:`poll`,detailKeys:[`question`,`to`]},permissions:{label:`permissions`,detailKeys:[`channelId`]},readMessages:{label:`read messages`,detailKeys:[`channelId`,`limit`]},sendMessage:{label:`send`,detailKeys:[`to`,`content`]},editMessage:{label:`edit`,detailKeys:[`channelId`,`messageId`]},deleteMessage:{label:`delete`,detailKeys:[`channelId`,`messageId`]},threadCreate:{label:`thread create`,detailKeys:[`channelId`,`name`]},threadList:{label:`thread list`,detailKeys:[`guildId`,`channelId`]},threadReply:{label:`thread reply`,detailKeys:[`channelId`,`content`]},pinMessage:{label:`pin`,detailKeys:[`channelId`,`messageId`]},unpinMessage:{label:`unpin`,detailKeys:[`channelId`,`messageId`]},listPins:{label:`list pins`,detailKeys:[`channelId`]},searchMessages:{label:`search`,detailKeys:[`guildId`,`content`]},memberInfo:{label:`member`,detailKeys:[`guildId`,`userId`]},roleInfo:{label:`roles`,detailKeys:[`guildId`]},emojiList:{label:`emoji list`,detailKeys:[`guildId`]},roleAdd:{label:`role add`,detailKeys:[`guildId`,`userId`,`roleId`]},roleRemove:{label:`role remove`,detailKeys:[`guildId`,`userId`,`roleId`]},channelInfo:{label:`channel`,detailKeys:[`channelId`]},channelList:{label:`channels`,detailKeys:[`guildId`]},voiceStatus:{label:`voice`,detailKeys:[`guildId`,`userId`]},eventList:{label:`events`,detailKeys:[`guildId`]},eventCreate:{label:`event create`,detailKeys:[`guildId`,`name`]},timeout:{label:`timeout`,detailKeys:[`guildId`,`userId`]},kick:{label:`kick`,detailKeys:[`guildId`,`userId`]},ban:{label:`ban`,detailKeys:[`guildId`,`userId`]}}}}};function Rd(e){return e&&typeof e==`object`?e:void 0}function zd(e){return(e??`tool`).trim()}function Bd(e){let t=e.replace(/_/g,` `).trim();return t?t.split(/\s+/).map(e=>e.length<=2&&e.toUpperCase()===e?e:`${e.at(0)?.toUpperCase()??``}${e.slice(1)}`).join(` `):`Tool`}function Vd(e){let t=e?.trim();if(t)return t.replace(/_/g,` `)}function Hd(e){if(!e||typeof e!=`object`)return;let t=e.action;if(typeof t==`string`)return t.trim()||void 0}function Ud(e){return Sf({toolKey:e.toolKey,args:e.args,meta:e.meta,action:Hd(e.args),spec:e.spec,fallbackDetailKeys:e.fallbackDetailKeys,detailMode:e.detailMode,detailCoerce:e.detailCoerce,detailMaxEntries:e.detailMaxEntries,detailFormatKey:e.detailFormatKey})}function Wd(e,t={}){let n=t.maxStringChars??160,r=t.maxArrayEntries??3;if(e!=null){if(typeof e==`string`){let t=e.trim();if(!t)return;let r=t.split(/\r?\n/)[0]?.trim()??``;return r?r.length>n?`${r.slice(0,Math.max(0,n-3))}…`:r:void 0}if(typeof e==`boolean`)return!e&&!t.includeFalse?void 0:e?`true`:`false`;if(typeof e==`number`)return Number.isFinite(e)?e===0&&!t.includeZero?void 0:String(e):t.includeNonFinite?String(e):void 0;if(Array.isArray(e)){let n=e.map(e=>Wd(e,t)).filter(e=>!!e);if(n.length===0)return;let i=n.slice(0,r).join(`, `);return n.length>r?`${i}…`:i}}}function Gd(e,t){if(!e||typeof e!=`object`)return;let n=e;for(let e of t.split(`.`)){if(!e||!n||typeof n!=`object`)return;n=n[e]}return n}function Kd(e){let t=Rd(e);if(t)for(let e of[t.path,t.file_path,t.filePath]){if(typeof e!=`string`)continue;let t=e.trim();if(t)return t}}function qd(e){let t=Rd(e);if(!t)return;let n=Kd(t);if(!n)return;let r=typeof t.offset==`number`&&Number.isFinite(t.offset)?Math.floor(t.offset):void 0,i=typeof t.limit==`number`&&Number.isFinite(t.limit)?Math.floor(t.limit):void 0,a=r===void 0?void 0:Math.max(1,r),o=i===void 0?void 0:Math.max(1,i);return a!==void 0&&o!==void 0?`${o===1?`line`:`lines`} ${a}-${a+o-1} from ${n}`:a===void 0?o===void 0?`from ${n}`:`first ${o} ${o===1?`line`:`lines`} of ${n}`:`from line ${a} in ${n}`}function Jd(e,t){let n=Rd(t);if(!n)return;let r=Kd(n)??(typeof n.url==`string`?n.url.trim():void 0);if(!r)return;if(e===`attach`)return`from ${r}`;let i=e===`edit`?`in`:`to`,a=typeof n.content==`string`?n.content:typeof n.newText==`string`?n.newText:typeof n.new_string==`string`?n.new_string:void 0;return a&&a.length>0?`${i} ${r} (${a.length} chars)`:`${i} ${r}`}function Yd(e){let t=Rd(e);if(!t)return;let n=typeof t.query==`string`?t.query.trim():void 0,r=typeof t.count==`number`&&Number.isFinite(t.count)&&t.count>0?Math.floor(t.count):void 0;if(n)return r===void 0?`for "${n}"`:`for "${n}" (top ${r})`}function Xd(e){let t=Rd(e);if(!t)return;let n=typeof t.url==`string`?t.url.trim():void 0;if(!n)return;let r=typeof t.extractMode==`string`?t.extractMode.trim():void 0,i=typeof t.maxChars==`number`&&Number.isFinite(t.maxChars)&&t.maxChars>0?Math.floor(t.maxChars):void 0,a=[r?`mode ${r}`:void 0,i===void 0?void 0:`max ${i} chars`].filter(e=>!!e).join(`, `);return a?`from ${n} (${a})`:`from ${n}`}function Zd(e){if(!e)return e;let t=e.trim();return t.length>=2&&(t.startsWith(`"`)&&t.endsWith(`"`)||t.startsWith(`'`)&&t.endsWith(`'`))?t.slice(1,-1).trim():t}function Qd(e,t=48){if(!e)return[];let n=[],r=``,i,a=!1;for(let o=0;o<e.length;o+=1){let s=e[o];if(a){r+=s,a=!1;continue}if(s===`\\`){a=!0;continue}if(i){s===i?i=void 0:r+=s;continue}if(s===`"`||s===`'`){i=s;continue}if(/\s/.test(s)){if(!r)continue;if(n.push(r),n.length>=t)return n;r=``;continue}r+=s}return r&&n.push(r),n}function $d(e){if(!e)return;let t=Zd(e)??e;return(t.split(/[/]/).at(-1)??t).trim().toLowerCase()}function ef(e,t){let n=new Set(t);for(let r=0;r<e.length;r+=1){let i=e[r];if(i){if(n.has(i)){let t=e[r+1];if(t&&!t.startsWith(`-`))return t;continue}for(let e of t)if(e.startsWith(`--`)&&i.startsWith(`${e}=`))return i.slice(e.length+1)}}}function tf(e,t=1,n=[]){let r=[],i=new Set(n);for(let n=t;n<e.length;n+=1){let t=e[n];if(t){if(t===`--`){for(let t=n+1;t<e.length;t+=1){let n=e[t];n&&r.push(n)}break}if(t.startsWith(`--`)){if(t.includes(`=`))continue;i.has(t)&&(n+=1);continue}if(t.startsWith(`-`)){i.has(t)&&(n+=1);continue}r.push(t)}}return r}function nf(e,t=1,n=[]){return tf(e,t,n)[0]}function rf(e){if(e.length===0)return e;let t=0;if($d(e[0])===`env`){for(t=1;t<e.length;){let n=e[t];if(!n)break;if(n.startsWith(`-`)){t+=1;continue}if(/^[A-Za-z_][A-Za-z0-9_]*=/.test(n)){t+=1;continue}break}return e.slice(t)}for(;t<e.length&&/^[A-Za-z_][A-Za-z0-9_]*=/.test(e[t]);)t+=1;return e.slice(t)}function af(e){let t=Qd(e,10);if(t.length<3)return e;let n=$d(t[0]);if(!(n===`bash`||n===`sh`||n===`zsh`||n===`fish`))return e;let r=t.findIndex((e,t)=>t>0&&(e===`-c`||e===`-lc`||e===`-ic`));if(r===-1)return e;let i=t.slice(r+1).join(` `).trim();return i?Zd(i)??e:e}function of(e,t){let n,r=!1;for(let i=0;i<e.length;i+=1){let a=e[i];if(r){r=!1;continue}if(a===`\\`){r=!0;continue}if(n){a===n&&(n=void 0);continue}if(a===`"`||a===`'`){n=a;continue}if(t(a,i)===!1)return}}function sf(e){let t=[],n=0;return of(e,(r,i)=>r===`;`?(t.push(e.slice(n,i)),n=i+1,!0):(r===`&`||r===`|`)&&e[i+1]===r?(t.push(e.slice(n,i)),n=i+2,!0):!0),t.push(e.slice(n)),t.map(e=>e.trim()).filter(e=>e.length>0)}function cf(e){let t=[],n=0;return of(e,(r,i)=>(r===`|`&&e[i-1]!==`|`&&e[i+1]!==`|`&&(t.push(e.slice(n,i)),n=i+1),!0)),t.push(e.slice(n)),t.map(e=>e.trim()).filter(e=>e.length>0)}function lf(e){let t=Qd(e,3),n=$d(t[0]);if(n===`cd`||n===`pushd`)return t[1]||void 0}function uf(e){let t=$d(Qd(e,2)[0]);return t===`cd`||t===`pushd`||t===`popd`}function df(e){return $d(Qd(e,2)[0])===`popd`}function ff(e){let t=e.trim(),n;for(let e=0;e<4;e+=1){let r;of(t,(e,n)=>{if(e===`&`&&t[n+1]===`&`)return r={index:n,length:2},!1;if(e===`|`&&t[n+1]===`|`)return r={index:n,length:2,isOr:!0},!1;if(e===`;`||e===`
`)return r={index:n,length:1},!1});let i=(r?t.slice(0,r.index):t).trim(),a=(r?!r.isOr:e>0)&&uf(i);if(!(i.startsWith(`set `)||i.startsWith(`export `)||i.startsWith(`unset `)||a)||(a&&(n=df(i)?void 0:lf(i)??n),t=r?t.slice(r.index+r.length).trimStart():``,!t))break}return{command:t.trim(),chdirPath:n}}function pf(e){if(e.length===0)return`run command`;let t=$d(e[0])??`command`;if(t===`git`){let t=new Set([`-C`,`-c`,`--git-dir`,`--work-tree`,`--namespace`,`--config-env`]),n=ef(e,[`-C`]),r;for(let n=1;n<e.length;n+=1){let i=e[n];if(i){if(i===`--`){r=nf(e,n+1);break}if(i.startsWith(`--`)){if(i.includes(`=`))continue;t.has(i)&&(n+=1);continue}if(i.startsWith(`-`)){t.has(i)&&(n+=1);continue}r=i;break}}let i={status:`check git status`,diff:`check git diff`,log:`view git history`,show:`show git object`,branch:`list git branches`,checkout:`switch git branch`,switch:`switch git branch`,commit:`create git commit`,pull:`pull git changes`,push:`push git changes`,fetch:`fetch git changes`,merge:`merge git changes`,rebase:`rebase git branch`,add:`stage git changes`,restore:`restore git files`,reset:`reset git state`,stash:`stash git changes`};return r&&i[r]?i[r]:!r||r.startsWith(`/`)||r.startsWith(`~`)||r.includes(`/`)?n?`run git command in ${n}`:`run git command`:`run git ${r}`}if(t===`grep`||t===`rg`||t===`ripgrep`){let t=tf(e,1,[`-e`,`--regexp`,`-f`,`--file`,`-m`,`--max-count`,`-A`,`--after-context`,`-B`,`--before-context`,`-C`,`--context`]),n=ef(e,[`-e`,`--regexp`])??t[0],r=t.length>1?t.at(-1):void 0;return n?r?`search "${n}" in ${r}`:`search "${n}"`:`search text`}if(t===`find`){let t=e[1]&&!e[1].startsWith(`-`)?e[1]:`.`,n=ef(e,[`-name`,`-iname`]);return n?`find files named "${n}" in ${t}`:`find files in ${t}`}if(t===`ls`){let t=nf(e,1);return t?`list files in ${t}`:`list files`}if(t===`head`||t===`tail`){let n=ef(e,[`-n`,`--lines`])??e.slice(1).find(e=>/^-\d+$/.test(e))?.slice(1),r=tf(e,1,[`-n`,`--lines`]),i=r.at(-1);i&&/^\d+$/.test(i)&&r.length===1&&(i=void 0);let a=t===`head`?`first`:`last`,o=n===`1`?`line`:`lines`;return n&&i?`show ${a} ${n} ${o} of ${i}`:n?`show ${a} ${n} ${o}`:i?`show ${i}`:`show ${t} output`}if(t===`cat`){let t=nf(e,1);return t?`show ${t}`:`show output`}if(t===`sed`){let t=ef(e,[`-e`,`--expression`]),n=tf(e,1,[`-e`,`--expression`,`-f`,`--file`]),r=t??n[0],i=t?n[0]:n[1];if(r){let e=(Zd(r)??r).replace(/\s+/g,``),t=e.match(/^([0-9]+),([0-9]+)p$/);if(t)return i?`print lines ${t[1]}-${t[2]} from ${i}`:`print lines ${t[1]}-${t[2]}`;let n=e.match(/^([0-9]+)p$/);if(n)return i?`print line ${n[1]} from ${i}`:`print line ${n[1]}`}return i?`run sed on ${i}`:`run sed transform`}if(t===`printf`||t===`echo`)return`print text`;if(t===`cp`||t===`mv`){let n=tf(e,1,[`-t`,`--target-directory`,`-S`,`--suffix`]),r=n[0],i=n[1],a=t===`cp`?`copy`:`move`;return r&&i?`${a} ${r} to ${i}`:r?`${a} ${r}`:`${a} files`}if(t===`rm`){let t=nf(e,1);return t?`remove ${t}`:`remove files`}if(t===`mkdir`){let t=nf(e,1);return t?`create folder ${t}`:`create folder`}if(t===`touch`){let t=nf(e,1);return t?`create file ${t}`:`create file`}if(t===`curl`||t===`wget`){let t=e.find(e=>/^https?:\/\//i.test(e));return t?`fetch ${t}`:`fetch url`}if(t===`npm`||t===`pnpm`||t===`yarn`||t===`bun`){let n=tf(e,1,[`--prefix`,`-C`,`--cwd`,`--config`]),r=n[0]??`command`;return{install:`install dependencies`,test:`run tests`,build:`run build`,start:`start app`,lint:`run lint`,run:n[1]?`run ${n[1]}`:`run script`}[r]??`run ${t} ${r}`}if(t===`node`||t===`python`||t===`python3`||t===`ruby`||t===`php`){if(e.slice(1).find(e=>e.startsWith(`<<`)))return`run ${t} inline script (heredoc)`;if((t===`node`?ef(e,[`-e`,`--eval`]):t===`python`||t===`python3`?ef(e,[`-c`]):void 0)!==void 0)return`run ${t} inline script`;let n=nf(e,1,t===`node`?[`-e`,`--eval`,`-m`]:[`-c`,`-e`,`--eval`,`-m`]);return n?t===`node`?`${e.includes(`--check`)||e.includes(`-c`)?`check js syntax for`:`run node script`} ${n}`:`run ${t} ${n}`:`run ${t}`}if(t===`openclaw`){let t=nf(e,1);return t?`run openclaw ${t}`:`run openclaw`}let n=nf(e,1);return!n||n.length>48?`run ${t}`:/^[A-Za-z0-9._/-]+$/.test(n)?`run ${t} ${n}`:`run ${t}`}function mf(e){let t=cf(e);return t.length>1?`${pf(rf(Qd(t[0])))} -> ${pf(rf(Qd(t[t.length-1])))}${t.length>2?` (+${t.length-2} steps)`:``}`:pf(rf(Qd(e)))}function hf(e){let{command:t,chdirPath:n}=ff(e);if(!t)return n?{text:``,chdirPath:n}:void 0;let r=sf(t);if(r.length===0)return;let i=r.map(e=>mf(e));return{text:i.length===1?i[0]:i.join(` → `),chdirPath:n,allGeneric:i.every(e=>_f(e))}}var gf=`check git.view git.show git.list git.switch git.create git.pull git.push git.fetch git.merge git.rebase git.stage git.restore git.reset git.stash git.search .find files.list files.show first.show last.print line.print text.copy .move .remove .create folder.create file.fetch http.install dependencies.run tests.run build.start app.run lint.run openclaw.run node script.run node .run python.run ruby.run php.run sed.run git .run npm .run pnpm .run yarn .run bun .check js syntax`.split(`.`);function _f(e){return e===`run command`?!0:e.startsWith(`run `)?!gf.some(t=>e.startsWith(t)):!1}function vf(e,t=120){let n=e.replace(/\s*\n\s*/g,` `).replace(/\s{2,}/g,` `).trim();return n.length<=t?n:`${n.slice(0,Math.max(0,t-1))}…`}function yf(e){let t=Rd(e);if(!t)return;let n=typeof t.command==`string`?t.command.trim():void 0;if(!n)return;let r=af(n),i=hf(r)??hf(n),a=i?.text||`run command`,o=(typeof t.workdir==`string`?t.workdir:typeof t.cwd==`string`?t.cwd:void 0)?.trim()||i?.chdirPath||void 0,s=vf(r);if(i?.allGeneric!==!1&&_f(a))return o?`${s} (in ${o})`:s;let c=o?`${a} (in ${o})`:a;return s&&s!==c&&s!==a?`${c} · \`${s}\``:c}function bf(e,t){if(!(!e||!t))return e.actions?.[t]??void 0}function xf(e,t,n){if(n.mode===`first`){for(let r of t){let t=Wd(Gd(e,r),n.coerce);if(t)return t}return}let r=[];for(let i of t){let t=Wd(Gd(e,i),n.coerce);t&&r.push({label:n.formatKey?n.formatKey(i):i,value:t})}if(r.length===0)return;if(r.length===1)return r[0].value;let i=new Set,a=[];for(let e of r){let t=`${e.label}:${e.value}`;i.has(t)||(i.add(t),a.push(e))}if(a.length!==0)return a.slice(0,n.maxEntries??8).map(e=>`${e.label} ${e.value}`).join(` · `)}function Sf(e){let t=bf(e.spec,e.action),n=e.toolKey===`web_search`?`search`:e.toolKey===`web_fetch`?`fetch`:e.toolKey.replace(/_/g,` `).replace(/\./g,` `),r=Vd(t?.label??e.action??n),i;e.toolKey===`exec`&&(i=yf(e.args)),!i&&e.toolKey===`read`&&(i=qd(e.args)),!i&&(e.toolKey===`write`||e.toolKey===`edit`||e.toolKey===`attach`)&&(i=Jd(e.toolKey,e.args)),!i&&e.toolKey===`web_search`&&(i=Yd(e.args)),!i&&e.toolKey===`web_fetch`&&(i=Xd(e.args));let a=t?.detailKeys??e.spec?.detailKeys??e.fallbackDetailKeys??[];return!i&&a.length>0&&(i=xf(e.args,a,{mode:e.detailMode,coerce:e.detailCoerce,maxEntries:e.detailMaxEntries,formatKey:e.detailFormatKey})),!i&&e.meta&&(i=e.meta),{verb:r,detail:i}}function Cf(e,t={}){if(!e)return;let n=e.includes(` · `)?e.split(` · `).map(e=>e.trim()).filter(e=>e.length>0).join(`, `):e;if(n)return t.prefixWithWith?`with ${n}`:n}var wf={"🧩":`puzzle`,"🛠️":`wrench`,"🧰":`wrench`,"📖":`fileText`,"✍️":`edit`,"📝":`penLine`,"📎":`paperclip`,"🌐":`globe`,"📺":`monitor`,"🧾":`fileText`,"🔐":`settings`,"💻":`monitor`,"🔌":`plug`,"💬":`messageSquare`},Tf={icon:`messageSquare`,title:`Slack`,actions:{react:{label:`react`,detailKeys:[`channelId`,`messageId`,`emoji`]},reactions:{label:`reactions`,detailKeys:[`channelId`,`messageId`]},sendMessage:{label:`send`,detailKeys:[`to`,`content`]},editMessage:{label:`edit`,detailKeys:[`channelId`,`messageId`]},deleteMessage:{label:`delete`,detailKeys:[`channelId`,`messageId`]},readMessages:{label:`read messages`,detailKeys:[`channelId`,`limit`]},pinMessage:{label:`pin`,detailKeys:[`channelId`,`messageId`]},unpinMessage:{label:`unpin`,detailKeys:[`channelId`,`messageId`]},listPins:{label:`list pins`,detailKeys:[`channelId`]},memberInfo:{label:`member`,detailKeys:[`userId`]},emojiList:{label:`emoji list`}}};function Ef(e){return e?wf[e]??`puzzle`:`puzzle`}function Df(e){return{icon:Ef(e?.emoji),title:e?.title,label:e?.label,detailKeys:e?.detailKeys,actions:e?.actions}}var Of=Ld,kf=Df(Of.fallback??{emoji:`🧩`}),Af=Object.fromEntries(Object.entries(Of.tools??{}).map(([e,t])=>[e,Df(t)]));Af.slack=Tf;function jf(e){if(!e)return e;for(let t of[{re:/^\/Users\/[^/]+(\/|$)/,replacement:`~$1`},{re:/^\/home\/[^/]+(\/|$)/,replacement:`~$1`},{re:/^C:\\Users\\[^\\]+(\\|$)/i,replacement:`~$1`}])if(t.re.test(e))return e.replace(t.re,t.replacement);return e}function Mf(e){let t=zd(e.name),n=t.toLowerCase(),r=Af[n],i=r?.icon??kf.icon??`puzzle`,a=r?.title??Bd(t),o=r?.label??a,{verb:s,detail:c}=Ud({toolKey:n,args:e.args,meta:e.meta,spec:r,fallbackDetailKeys:kf.detailKeys,detailMode:`first`,detailCoerce:{includeFalse:!0,includeZero:!0}});return c&&=jf(c),{name:t,icon:i,title:a,label:o,verb:s,detail:c}}function Nf(e){return Cf(e.detail,{prefixWithWith:!0})}function Pf(e){let t=e.trim();if(t.startsWith(`{`)||t.startsWith(`[`))try{let e=JSON.parse(t);return"```json\n"+JSON.stringify(e,null,2)+"\n```"}catch{}return e}function Ff(e){let t=e.split(`
`),n=t.slice(0,2),r=n.join(`
`);return r.length>100?r.slice(0,100)+`…`:n.length<t.length?r+`…`:r}function If(e){let t=e,n=Rf(t.content),r=[];for(let e of n){let t=(typeof e.type==`string`?e.type:``).toLowerCase();([`toolcall`,`tool_call`,`tooluse`,`tool_use`].includes(t)||typeof e.name==`string`&&e.arguments!=null)&&r.push({kind:`call`,name:e.name??`tool`,args:zf(e.arguments??e.args)})}for(let e of n){let t=(typeof e.type==`string`?e.type:``).toLowerCase();if(t!==`toolresult`&&t!==`tool_result`)continue;let n=Bf(e),i=typeof e.name==`string`?e.name:`tool`;r.push({kind:`result`,name:i,text:n})}if(Td(e)&&!r.some(e=>e.kind===`result`)){let n=typeof t.toolName==`string`&&t.toolName||typeof t.tool_name==`string`&&t.tool_name||`tool`,i=gs(e)??void 0;r.push({kind:`result`,name:n,text:i})}return r}function Lf(e,t){let r=Mf({name:e.name,args:e.args}),a=Nf(r),o=!!e.text?.trim(),s=!!t,c=s?()=>{if(o){t(Pf(e.text));return}t(`## ${r.label}\n\n${a?`**Command:** \`${a}\`\n\n`:``}*No output — tool completed successfully.*`)}:void 0,l=o&&(e.text?.length??0)<=80,u=o&&!l,d=o&&l,f=!o;return n`
    <div
      class="chat-tool-card ${s?`chat-tool-card--clickable`:``}"
      @click=${c}
      role=${s?`button`:i}
      tabindex=${s?`0`:i}
      @keydown=${s?e=>{e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),c?.())}:i}
    >
      <div class="chat-tool-card__header">
        <div class="chat-tool-card__title">
          <span class="chat-tool-card__icon">${W[r.icon]}</span>
          <span>${r.label}</span>
        </div>
        ${s?n`<span class="chat-tool-card__action">${o?`View`:``} ${W.check}</span>`:i}
        ${f&&!s?n`<span class="chat-tool-card__status">${W.check}</span>`:i}
      </div>
      ${a?n`<div class="chat-tool-card__detail">${a}</div>`:i}
      ${f?n`
              <div class="chat-tool-card__status-text muted">Completed</div>
            `:i}
      ${u?n`<div class="chat-tool-card__preview mono">${Ff(e.text)}</div>`:i}
      ${d?n`<div class="chat-tool-card__inline mono">${e.text}</div>`:i}
    </div>
  `}function Rf(e){return Array.isArray(e)?e.filter(Boolean):[]}function zf(e){if(typeof e!=`string`)return e;let t=e.trim();if(!t||!t.startsWith(`{`)&&!t.startsWith(`[`))return e;try{return JSON.parse(t)}catch{return e}}function Bf(e){if(typeof e.text==`string`)return e.text;if(typeof e.content==`string`)return e.content}function Vf(e){let t=e.content,n=[];if(Array.isArray(t))for(let e of t){if(typeof e!=`object`||!e)continue;let t=e;if(t.type===`image`){let e=t.source;if(e?.type===`base64`&&typeof e.data==`string`){let t=e.data,r=e.media_type||`image/png`,i=t.startsWith(`data:`)?t:`data:${r};base64,${t}`;n.push({url:i})}else typeof t.url==`string`&&n.push({url:t.url})}else if(t.type===`image_url`){let e=t.image_url;typeof e?.url==`string`&&n.push({url:e.url})}}return n}function Hf(e,t){return n`
    <div class="chat-group assistant">
      ${$f(`assistant`,e,t)}
      <div class="chat-group-messages">
        <div class="chat-bubble chat-reading-indicator" aria-hidden="true">
          <span class="chat-reading-indicator__dots">
            <span></span><span></span><span></span>
          </span>
        </div>
      </div>
    </div>
  `}function Uf(e,t,r,i,a){let o=new Date(t).toLocaleTimeString([],{hour:`numeric`,minute:`2-digit`}),s=i?.name??`Assistant`;return n`
    <div class="chat-group assistant">
      ${$f(`assistant`,i,a)}
      <div class="chat-group-messages">
        ${sp({role:`assistant`,content:[{type:`text`,text:e}],timestamp:t},{isStreaming:!0,showReasoning:!1},r)}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${s}</span>
          <span class="chat-group-timestamp">${o}</span>
        </div>
      </div>
    </div>
  `}function Wf(e,t){let r=wd(e.role),a=t.assistantName??`Assistant`,o=e.senderLabel?.trim(),s=r===`user`?o??`You`:r===`assistant`?a:r===`tool`?`Tool`:r,c=r===`user`?`user`:r===`assistant`?`assistant`:r===`tool`?`tool`:`other`,l=new Date(e.timestamp).toLocaleTimeString([],{hour:`numeric`,minute:`2-digit`}),u=Gf(e,t.contextWindow??null);return n`
    <div class="chat-group ${c}">
      ${$f(e.role,{name:a,avatar:t.assistantAvatar??null},t.basePath)}
      <div class="chat-group-messages">
        ${e.messages.map((n,r)=>sp(n.message,{isStreaming:e.isStreaming&&r===e.messages.length-1,showReasoning:t.showReasoning,showToolCalls:t.showToolCalls??!0},t.onOpenSidebar))}
        <div class="chat-group-footer">
          <span class="chat-sender-name">${s}</span>
          <span class="chat-group-timestamp">${l}</span>
          ${qf(u)}
          ${r===`assistant`&&jd()?Qf(e):i}
          ${t.onDelete?Zf(t.onDelete,r===`user`?`left`:`right`):i}
        </div>
      </div>
    </div>
  `}function Gf(e,t){let n=0,r=0,i=0,a=0,o=0,s=null,c=!1;for(let{message:t}of e.messages){let e=t;if(e.role!==`assistant`)continue;let l=e.usage;l&&(c=!0,n+=l.input??l.inputTokens??0,r+=l.output??l.outputTokens??0,i+=l.cacheRead??l.cache_read_input_tokens??0,a+=l.cacheWrite??l.cache_creation_input_tokens??0);let u=e.cost;u?.total&&(o+=u.total),typeof e.model==`string`&&e.model!==`gateway-injected`&&(s=e.model)}if(!c&&!s)return null;let l=t&&n>0?Math.min(Math.round(n/t*100),100):null;return{input:n,output:r,cacheRead:i,cacheWrite:a,cost:o,model:s,contextPercent:l}}function Kf(e){return e>=1e6?`${(e/1e6).toFixed(1).replace(/\.0$/,``)}M`:e>=1e3?`${(e/1e3).toFixed(1).replace(/\.0$/,``)}k`:String(e)}function qf(e){if(!e)return i;let t=[];if(e.input&&t.push(n`<span class="msg-meta__tokens">↑${Kf(e.input)}</span>`),e.output&&t.push(n`<span class="msg-meta__tokens">↓${Kf(e.output)}</span>`),e.cacheRead&&t.push(n`<span class="msg-meta__cache">R${Kf(e.cacheRead)}</span>`),e.cacheWrite&&t.push(n`<span class="msg-meta__cache">W${Kf(e.cacheWrite)}</span>`),e.cost>0&&t.push(n`<span class="msg-meta__cost">$${e.cost.toFixed(4)}</span>`),e.contextPercent!==null){let r=e.contextPercent,i=r>=90?`msg-meta__ctx msg-meta__ctx--danger`:r>=75?`msg-meta__ctx msg-meta__ctx--warn`:`msg-meta__ctx`;t.push(n`<span class="${i}">${r}% ctx</span>`)}if(e.model){let r=e.model.includes(`/`)?e.model.split(`/`).pop():e.model;t.push(n`<span class="msg-meta__model">${r}</span>`)}return t.length===0?i:n`<span class="msg-meta">${t}</span>`}function Jf(e){let t=[];for(let{message:n}of e.messages){let e=gs(n);e?.trim()&&t.push(e.trim())}return t.join(`

`)}var Yf=`openclaw:skipDeleteConfirm`;function Xf(){try{return j()?.getItem(Yf)===`1`}catch{return!1}}function Zf(e,t){return n`
    <span class="chat-delete-wrap">
      <button
        class="chat-group-delete"
        title="Delete"
        aria-label="Delete message"
        @click=${n=>{if(Xf()){e();return}let r=n.currentTarget,i=r.closest(`.chat-delete-wrap`),a=i?.querySelector(`.chat-delete-confirm`);if(a){a.remove();return}let o=document.createElement(`div`);o.className=`chat-delete-confirm chat-delete-confirm--${t}`,o.innerHTML=`
            <p class="chat-delete-confirm__text">Delete this message?</p>
            <label class="chat-delete-confirm__remember">
              <input type="checkbox" class="chat-delete-confirm__check" />
              <span>Don't ask again</span>
            </label>
            <div class="chat-delete-confirm__actions">
              <button class="chat-delete-confirm__cancel" type="button">Cancel</button>
              <button class="chat-delete-confirm__yes" type="button">Delete</button>
            </div>
          `,i.appendChild(o);let s=o.querySelector(`.chat-delete-confirm__cancel`),c=o.querySelector(`.chat-delete-confirm__yes`),l=o.querySelector(`.chat-delete-confirm__check`);s.addEventListener(`click`,()=>o.remove()),c.addEventListener(`click`,()=>{if(l.checked)try{j()?.setItem(Yf,`1`)}catch{}o.remove(),e()});let u=e=>{!o.contains(e.target)&&e.target!==r&&(o.remove(),document.removeEventListener(`click`,u,!0))};requestAnimationFrame(()=>document.addEventListener(`click`,u,!0))}}
      >${W.trash??W.x}</button>
    </span>
  `}function Qf(e){return n`
    <button
      class="btn btn--xs chat-tts-btn"
      type="button"
      title=${Fd()?`Stop speaking`:`Read aloud`}
      aria-label=${Fd()?`Stop speaking`:`Read aloud`}
      @click=${t=>{let n=t.currentTarget;if(Fd()){Pd(),n.classList.remove(`chat-tts-btn--active`),n.title=`Read aloud`;return}let r=Jf(e);r&&(n.classList.add(`chat-tts-btn--active`),n.title=`Stop speaking`,Nd(r,{onEnd:()=>{n.isConnected&&(n.classList.remove(`chat-tts-btn--active`),n.title=`Read aloud`)},onError:()=>{n.isConnected&&(n.classList.remove(`chat-tts-btn--active`),n.title=`Read aloud`)}}))}}
    >
      ${W.volume2}
    </button>
  `}function $f(e,t,r){let i=wd(e),a=t?.name?.trim()||`Assistant`,o=t?.avatar?.trim()||``,s=i===`user`?n`
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <circle cx="12" cy="8" r="4" />
            <path d="M20 21a8 8 0 1 0-16 0" />
          </svg>
        `:i===`assistant`?n`
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16l-6.4 5.2L8 14 2 9.2h7.6z" />
            </svg>
          `:i===`tool`?n`
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path
                  d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53a7.76 7.76 0 0 0 .07-1 7.76 7.76 0 0 0-.07-.97l2.11-1.63a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.15 7.15 0 0 0-1.69-.98l-.38-2.65A.49.49 0 0 0 14 2h-4a.49.49 0 0 0-.49.42l-.38 2.65a7.15 7.15 0 0 0-1.69.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.49.49 0 0 0 .12.64L4.57 11a7.9 7.9 0 0 0 0 1.94l-2.11 1.69a.49.49 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.72 1.69.98l.38 2.65c.05.24.26.42.49.42h4c.23 0 .44-.18.49-.42l.38-2.65a7.15 7.15 0 0 0 1.69-.98l2.49 1a.5.5 0 0 0 .61-.22l2-3.46a.49.49 0 0 0-.12-.64z"
                />
              </svg>
            `:n`
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <circle cx="12" cy="12" r="10" />
                <text
                  x="12"
                  y="16.5"
                  text-anchor="middle"
                  font-size="14"
                  font-weight="600"
                  fill="var(--bg, #fff)"
                >
                  ?
                </text>
              </svg>
            `,c=i===`user`?`user`:i===`assistant`?`assistant`:i===`tool`?`tool`:`other`;return o&&i===`assistant`?ep(o)?n`<img
        class="chat-avatar ${c}"
        src="${o}"
        alt="${a}"
      />`:n`<img
      class="chat-avatar ${c} chat-avatar--logo"
      src="${Ku(r??``)}"
      alt="${a}"
    />`:i===`assistant`&&r?n`<img
      class="chat-avatar ${c} chat-avatar--logo"
      src="${Ku(r)}"
      alt="${a}"
    />`:n`<div class="chat-avatar ${c}">${s}</div>`}function ep(e){return/^https?:\/\//i.test(e)||/^data:image\//i.test(e)||e.startsWith(`/`)}function tp(e){if(e.length===0)return i;let t=e=>{wu(e,{allowDataImage:!0})};return n`
    <div class="chat-message-images">
      ${e.map(e=>n`
          <img
            src=${e.url}
            alt=${e.alt??`Attached image`}
            class="chat-message-image"
            @click=${()=>t(e.url)}
          />
        `)}
    </div>
  `}function np(e,t){let r=e.filter(e=>e.kind===`call`),i=e.filter(e=>e.kind===`result`),a=Math.max(r.length,i.length)||e.length,o=[...new Set(e.map(e=>e.name))],s=o.length<=3?o.join(`, `):`${o.slice(0,2).join(`, `)} +${o.length-2} more`;return n`
    <details class="chat-tools-collapse">
      <summary class="chat-tools-summary">
        <span class="chat-tools-summary__icon">${W.zap}</span>
        <span class="chat-tools-summary__count">${a} tool${a===1?``:`s`}</span>
        <span class="chat-tools-summary__names">${s}</span>
      </summary>
      <div class="chat-tools-collapse__body">
        ${e.map(e=>Lf(e,t))}
      </div>
    </details>
  `}var rp=2e4;function ip(e){let t=e.trim();if(t.length>rp)return null;if(t.startsWith(`{`)&&t.endsWith(`}`)||t.startsWith(`[`)&&t.endsWith(`]`))try{let e=JSON.parse(t);return{parsed:e,pretty:JSON.stringify(e,null,2)}}catch{return null}return null}function ap(e){if(Array.isArray(e))return`Array (${e.length} item${e.length===1?``:`s`})`;if(e&&typeof e==`object`){let t=Object.keys(e);return t.length<=4?`{ ${t.join(`, `)} }`:`Object (${t.length} keys)`}return`JSON`}function op(e,t){return n`
    <button
      class="btn btn--xs chat-expand-btn"
      type="button"
      title="Open in canvas"
      aria-label="Open in canvas"
      @click=${()=>t(e)}
    >
      <span class="chat-expand-btn__icon" aria-hidden="true">${W.panelRightOpen}</span>
    </button>
  `}function sp(e,t,r){let a=e,o=typeof a.role==`string`?a.role:`unknown`,s=wd(o),c=Td(e)||o.toLowerCase()===`toolresult`||o.toLowerCase()===`tool_result`||typeof a.toolCallId==`string`||typeof a.tool_call_id==`string`,l=t.showToolCalls??!0?If(e):[],u=l.length>0,d=Vf(e),f=d.length>0,p=gs(e),m=t.showReasoning&&o===`assistant`?vs(e):null,h=p?.trim()?p:null,g=m?bs(m):null,_=h,v=o===`assistant`&&!!_?.trim(),y=o===`assistant`&&!!(r&&_?.trim()),b=_&&!t.isStreaming?ip(_):null,x=[`chat-bubble`,t.isStreaming?`streaming`:``,`fade-in`].filter(Boolean).join(` `);if(!_&&u&&c)return np(l,r);let S=u&&(t.showToolCalls??!0);if(!_&&!S&&!f)return i;let C=s===`tool`||c,w=[...new Set(l.map(e=>e.name))],T=w.length<=3?w.join(`, `):`${w.slice(0,2).join(`, `)} +${w.length-2} more`,E=_&&!T?_.trim().replace(/\s+/g,` `).slice(0,120):``;return n`
    <div class="${x}">
      ${v||y?n`<div class="chat-bubble-actions">
              ${y?op(_,r):i}
              ${v?Sd(_):i}
            </div>`:i}
      ${C?n`
            <details class="chat-tool-msg-collapse">
              <summary class="chat-tool-msg-summary">
                <span class="chat-tool-msg-summary__icon">${W.zap}</span>
                <span class="chat-tool-msg-summary__label">Tool output</span>
                ${T?n`<span class="chat-tool-msg-summary__names">${T}</span>`:E?n`<span class="chat-tool-msg-summary__preview">${E}</span>`:i}
              </summary>
              <div class="chat-tool-msg-body">
                ${tp(d)}
                ${g?n`<div class="chat-thinking">${ws(mu(g))}</div>`:i}
                ${b?n`<details class="chat-json-collapse">
                        <summary class="chat-json-summary">
                          <span class="chat-json-badge">JSON</span>
                          <span class="chat-json-label">${ap(b.parsed)}</span>
                        </summary>
                        <pre class="chat-json-content"><code>${b.pretty}</code></pre>
                      </details>`:_?n`<div class="chat-text" dir="${Eu(_)}">${ws(mu(_))}</div>`:i}
                ${u?np(l,r):i}
              </div>
            </details>
          `:n`
            ${tp(d)}
            ${g?n`<div class="chat-thinking">${ws(mu(g))}</div>`:i}
            ${b?n`<details class="chat-json-collapse">
                    <summary class="chat-json-summary">
                      <span class="chat-json-badge">JSON</span>
                      <span class="chat-json-label">${ap(b.parsed)}</span>
                    </summary>
                    <pre class="chat-json-content"><code>${b.pretty}</code></pre>
                  </details>`:_?n`<div class="chat-text" dir="${Eu(_)}">${ws(mu(_))}</div>`:i}
            ${u?np(l,r):i}
          `}
    </div>
  `}var cp=50,lp=class{constructor(){this.items=[],this.cursor=-1}push(e){let t=e.trim();t&&this.items[this.items.length-1]!==t&&(this.items.push(t),this.items.length>cp&&this.items.shift(),this.cursor=-1)}up(){return this.items.length===0?null:(this.cursor<0?this.cursor=this.items.length-1:this.cursor>0&&this.cursor--,this.items[this.cursor]??null)}down(){return this.cursor<0?null:(this.cursor++,this.cursor>=this.items.length?(this.cursor=-1,null):this.items[this.cursor]??null)}reset(){this.cursor=-1}},up=`openclaw:pinned:`,dp=class{constructor(e){this._indices=new Set,this.key=up+e,this.load()}get indices(){return this._indices}has(e){return this._indices.has(e)}pin(e){this._indices.add(e),this.save()}unpin(e){this._indices.delete(e),this.save()}toggle(e){this._indices.has(e)?this.unpin(e):this.pin(e)}clear(){this._indices.clear(),this.save()}load(){try{let e=j()?.getItem(this.key);if(!e)return;let t=JSON.parse(e);Array.isArray(t)&&(this._indices=new Set(t.filter(e=>typeof e==`number`)))}catch{}}save(){try{j()?.setItem(this.key,JSON.stringify([...this._indices]))}catch{}}};function fp(e){return gs(e)??``}function pp(e,t){let n=t.trim().toLowerCase();return n?(gs(e)??``).toLowerCase().includes(n):!0}function mp(e,t,n){if(e.has(t)){let n=e.get(t);return e.delete(t),e.set(t,n),n}let r=n();for(e.set(t,r);e.size>20;){let t=e.keys().next().value;if(typeof t!=`string`)break;e.delete(t)}return r}function hp(e){if(e==null)return;let t;return t=typeof e==`string`?e.trim():typeof e==`number`||typeof e==`boolean`||typeof e==`bigint`?String(e).trim():typeof e==`symbol`||typeof e==`function`?e.toString().trim():JSON.stringify(e),t||void 0}function gp(e,t){let n=hp(e.action)?.toLowerCase(),r=hp(e.path),i=hp(e.value);return n?t.formatKnownAction(n,r)||xp(n,{path:r,value:i}):void 0}var _p=e=>gp(e,{formatKnownAction:(e,t)=>{if(e===`show`||e===`get`)return t?`${e} ${t}`:e}}),vp=e=>gp(e,{formatKnownAction:(e,t)=>{if(e===`show`||e===`get`)return t?`${e} ${t}`:e}}),yp=e=>gp(e,{formatKnownAction:(e,t)=>{if(e===`list`)return`list`;if(e===`show`||e===`get`||e===`enable`||e===`disable`)return t?`${e} ${t}`:e}}),bp=e=>gp(e,{formatKnownAction:e=>{if(e===`show`||e===`reset`)return e}});function xp(e,t){return e===`unset`?t.path?`${e} ${t.path}`:e:e===`set`&&t.path?t.value?`${e} ${t.path}=${t.value}`:`${e} ${t.path}`:e}var Sp={config:_p,mcp:vp,plugins:yp,debug:bp,queue:e=>{let t=hp(e.mode),n=hp(e.debounce),r=hp(e.cap),i=hp(e.drop),a=[];return t&&a.push(t),n&&a.push(`debounce:${n}`),r&&a.push(`cap:${r}`),i&&a.push(`drop:${i}`),a.length>0?a.join(` `):void 0},exec:e=>{let t=hp(e.host),n=hp(e.security),r=hp(e.ask),i=hp(e.node),a=[];return t&&a.push(`host=${t}`),n&&a.push(`security=${n}`),r&&a.push(`ask=${r}`),i&&a.push(`node=${i}`),a.length>0?a.join(` `):void 0}},Cp=[`off`,`minimal`,`low`,`medium`,`high`,`adaptive`],wp=/^claude-(?:opus|sonnet)-4(?:\.|-)6(?:$|[-.])/i,Tp=/claude-(?:opus|sonnet)-4(?:\.|-)6(?:$|[-.])/i,Ep=[`gpt-5.4`,`gpt-5.4-pro`,`gpt-5.4-mini`,`gpt-5.4-nano`,`gpt-5.2`],Dp=[`gpt-5.4`,`gpt-5.3-codex-spark`,`gpt-5.2-codex`,`gpt-5.1-codex`],Op=[`gpt-5.2`,`gpt-5.2-codex`];function kp(e,t){return t.some(t=>e===t||e.startsWith(`${t}-`))}function Ap(e){if(!e)return``;let t=e.trim().toLowerCase();return t===`z.ai`||t===`z-ai`?`zai`:t===`bedrock`||t===`aws-bedrock`?`amazon-bedrock`:t}function jp(e){return Ap(e)===`zai`}function Mp(e,t){let n=Ap(e),r=t?.trim().toLowerCase();return!n||!r?!1:n===`openai`?kp(r,Ep):n===`openai-codex`?kp(r,Dp):n===`github-copilot`?Op.includes(r):!1}function Np(e){if(!e)return;let t=e.trim().toLowerCase(),n=t.replace(/[\s_-]+/g,``);if(n===`adaptive`||n===`auto`)return`adaptive`;if(n===`xhigh`||n===`extrahigh`)return`xhigh`;if([`off`].includes(t))return`off`;if([`on`,`enable`,`enabled`].includes(t))return`low`;if([`min`,`minimal`].includes(t))return`minimal`;if([`low`,`thinkhard`,`think-hard`,`think_hard`].includes(t))return`low`;if([`mid`,`med`,`medium`,`thinkharder`,`think-harder`,`harder`].includes(t))return`medium`;if([`high`,`ultra`,`ultrathink`,`think-hard`,`thinkhardest`,`highest`,`max`].includes(t))return`high`;if([`think`].includes(t))return`minimal`}function Pp(e,t){return[...Cp]}function Fp(e,t){return jp(e)?[`off`,`on`]:Pp(e,t)}function Ip(e,t,n=`, `){return Fp(e,t).join(n)}function Lp(e){let t=Ap(e.provider),n=e.model.trim();return t===`anthropic`&&wp.test(n)||t===`amazon-bedrock`&&Tp.test(n)?`adaptive`:e.catalog?.find(t=>t.provider===e.provider&&t.id===e.model)?.reasoning?`low`:`off`}function Rp(e){if(!e)return;let t=e.toLowerCase();if([`off`,`false`,`no`,`0`].includes(t))return`off`;if([`full`,`all`,`everything`].includes(t))return`full`;if([`on`,`minimal`,`true`,`yes`,`1`].includes(t))return`on`}function zp(e){return Rp(e)}function Bp(e){let t=e.trim().toLowerCase();return t===`z.ai`||t===`z-ai`?`zai`:t===`opencode-zen`?`opencode`:t===`opencode-go-auth`?`opencode-go`:t===`qwen`?`qwen-portal`:t===`kimi`||t===`kimi-code`||t===`kimi-coding`?`kimi`:t===`bedrock`||t===`aws-bedrock`?`amazon-bedrock`:t===`bytedance`||t===`doubao`?`volcengine`:t}var Vp=Symbol.for(`openclaw.pluginRegistryState`),Hp=(()=>{let e=globalThis;return e[Vp]||(e[Vp]={activeRegistry:null,activeVersion:0,httpRoute:{registry:null,pinned:!1,version:0},channel:{registry:null,pinned:!1,version:0},key:null}),e[Vp]})();function Up(){return Hp.activeRegistry}function Wp(e,t){let n=Bp(t);return n?Bp(e.id)===n?!0:(e.aliases??[]).some(e=>Bp(e)===n):!1}function Gp(e){return Up()?.providers.find(t=>Wp(t.provider,e))?.provider}function Kp(e){return Gp(e.provider)?.supportsXHighThinking?.(e.context)}function qp(e,t){let n=t?.trim().toLowerCase();if(!n)return!1;if(Mp(e,n))return!0;let r=Ap(e);if(r){let e=Kp({provider:r,context:{provider:r,modelId:n}});if(typeof e==`boolean`)return e}return!1}function Jp(e,t){let n=Pp(e,t);return qp(e,t)&&n.splice(n.length-1,0,`xhigh`),n}function J(e){let t=(e.textAliases??(e.textAlias?[e.textAlias]:[])).map(e=>e.trim()).filter(Boolean),n=e.scope??(e.nativeName?t.length?`both`:`native`:`text`),r=e.acceptsArgs??!!e.args?.length,i=e.argsParsing??(e.args?.length?`positional`:`none`);return{key:e.key,nativeName:e.nativeName,description:e.description,acceptsArgs:r,args:e.args,argsParsing:i,formatArgs:e.formatArgs,argsMenu:e.argsMenu,textAliases:t,scope:n,category:e.category}}function Yp(e,t,...n){let r=e.find(e=>e.key===t);if(!r)throw Error(`registerAlias: unknown command key: ${t}`);let i=new Set(r.textAliases.map(e=>e.trim().toLowerCase()));for(let e of n){let t=e.trim();if(!t)continue;let n=t.toLowerCase();i.has(n)||(i.add(n),r.textAliases.push(t))}}function Xp(e){let t=new Set,n=new Set,r=new Set;for(let i of e){if(t.has(i.key))throw Error(`Duplicate command key: ${i.key}`);t.add(i.key);let e=i.nativeName?.trim();if(i.scope===`text`){if(e)throw Error(`Text-only command has native name: ${i.key}`);if(i.textAliases.length===0)throw Error(`Text-only command missing text alias: ${i.key}`)}else if(e){let t=e.toLowerCase();if(n.has(t))throw Error(`Duplicate native command: ${e}`);n.add(t)}else throw Error(`Native command missing native name: ${i.key}`);if(i.scope===`native`&&i.textAliases.length>0)throw Error(`Native-only command has text aliases: ${i.key}`);for(let e of i.textAliases){if(!e.startsWith(`/`))throw Error(`Command alias missing leading '/': ${e}`);let t=e.toLowerCase();if(r.has(t))throw Error(`Duplicate command alias: ${e}`);r.add(t)}}}function Zp(){let e=[J({key:`help`,nativeName:`help`,description:`Show available commands.`,textAlias:`/help`,category:`status`}),J({key:`commands`,nativeName:`commands`,description:`List all slash commands.`,textAlias:`/commands`,category:`status`}),J({key:`tools`,nativeName:`tools`,description:`List available runtime tools.`,textAlias:`/tools`,category:`status`,args:[{name:`mode`,description:`compact or verbose`,type:`string`,choices:[`compact`,`verbose`]}],argsMenu:`auto`}),J({key:`skill`,nativeName:`skill`,description:`Run a skill by name.`,textAlias:`/skill`,category:`tools`,args:[{name:`name`,description:`Skill name`,type:`string`,required:!0},{name:`input`,description:`Skill input`,type:`string`,captureRemaining:!0}]}),J({key:`status`,nativeName:`status`,description:`Show current status.`,textAlias:`/status`,category:`status`}),J({key:`allowlist`,description:`List/add/remove allowlist entries.`,textAlias:`/allowlist`,acceptsArgs:!0,scope:`text`,category:`management`}),J({key:`approve`,nativeName:`approve`,description:`Approve or deny exec requests.`,textAlias:`/approve`,acceptsArgs:!0,category:`management`}),J({key:`context`,nativeName:`context`,description:`Explain how context is built and used.`,textAlias:`/context`,acceptsArgs:!0,category:`status`}),J({key:`btw`,nativeName:`btw`,description:`Ask a side question without changing future session context.`,textAlias:`/btw`,acceptsArgs:!0,category:`tools`}),J({key:`export-session`,nativeName:`export-session`,description:`Export current session to HTML file with full system prompt.`,textAliases:[`/export-session`,`/export`],acceptsArgs:!0,category:`status`,args:[{name:`path`,description:`Output path (default: workspace)`,type:`string`,required:!1}]}),J({key:`tts`,nativeName:`tts`,description:`Control text-to-speech (TTS).`,textAlias:`/tts`,category:`media`,args:[{name:`action`,description:`TTS action`,type:`string`,choices:[{value:`on`,label:`On`},{value:`off`,label:`Off`},{value:`status`,label:`Status`},{value:`provider`,label:`Provider`},{value:`limit`,label:`Limit`},{value:`summary`,label:`Summary`},{value:`audio`,label:`Audio`},{value:`help`,label:`Help`}]},{name:`value`,description:`Provider, limit, or text`,type:`string`,captureRemaining:!0}],argsMenu:{arg:`action`,title:`TTS Actions:
• On – Enable TTS for responses
• Off – Disable TTS
• Status – Show current settings
• Provider – Set voice provider (edge, elevenlabs, openai)
• Limit – Set max characters for TTS
• Summary – Toggle AI summary for long texts
• Audio – Generate TTS from custom text
• Help – Show usage guide`}}),J({key:`whoami`,nativeName:`whoami`,description:`Show your sender id.`,textAlias:`/whoami`,category:`status`}),J({key:`session`,nativeName:`session`,description:`Manage session-level settings (for example /session idle).`,textAlias:`/session`,category:`session`,args:[{name:`action`,description:`idle | max-age`,type:`string`,choices:[`idle`,`max-age`]},{name:`value`,description:`Duration (24h, 90m) or off`,type:`string`,captureRemaining:!0}],argsMenu:`auto`}),J({key:`subagents`,nativeName:`subagents`,description:`List, kill, log, spawn, or steer subagent runs for this session.`,textAlias:`/subagents`,category:`management`,args:[{name:`action`,description:`list | kill | log | info | send | steer | spawn`,type:`string`,choices:[`list`,`kill`,`log`,`info`,`send`,`steer`,`spawn`]},{name:`target`,description:`Run id, index, or session key`,type:`string`},{name:`value`,description:`Additional input (limit/message)`,type:`string`,captureRemaining:!0}],argsMenu:`auto`}),J({key:`acp`,nativeName:`acp`,description:`Manage ACP sessions and runtime options.`,textAlias:`/acp`,category:`management`,args:[{name:`action`,description:`Action to run`,type:`string`,preferAutocomplete:!0,choices:[`spawn`,`cancel`,`steer`,`close`,`sessions`,`status`,`set-mode`,`set`,`cwd`,`permissions`,`timeout`,`model`,`reset-options`,`doctor`,`install`,`help`]},{name:`value`,description:`Action arguments`,type:`string`,captureRemaining:!0}],argsMenu:`auto`}),J({key:`focus`,nativeName:`focus`,description:`Bind this thread (Discord) or topic/conversation (Telegram) to a session target.`,textAlias:`/focus`,category:`management`,args:[{name:`target`,description:`Subagent label/index or session key/id/label`,type:`string`,captureRemaining:!0}]}),J({key:`unfocus`,nativeName:`unfocus`,description:`Remove the current thread (Discord) or topic/conversation (Telegram) binding.`,textAlias:`/unfocus`,category:`management`}),J({key:`agents`,nativeName:`agents`,description:`List thread-bound agents for this session.`,textAlias:`/agents`,category:`management`}),J({key:`kill`,nativeName:`kill`,description:`Kill a running subagent (or all).`,textAlias:`/kill`,category:`management`,args:[{name:`target`,description:`Label, run id, index, or all`,type:`string`}],argsMenu:`auto`}),J({key:`steer`,nativeName:`steer`,description:`Send guidance to a running subagent.`,textAlias:`/steer`,category:`management`,args:[{name:`target`,description:`Label, run id, or index`,type:`string`},{name:`message`,description:`Steering message`,type:`string`,captureRemaining:!0}]}),J({key:`config`,nativeName:`config`,description:`Show or set config values.`,textAlias:`/config`,category:`management`,args:[{name:`action`,description:`show | get | set | unset`,type:`string`,choices:[`show`,`get`,`set`,`unset`]},{name:`path`,description:`Config path`,type:`string`},{name:`value`,description:`Value for set`,type:`string`,captureRemaining:!0}],argsParsing:`none`,formatArgs:Sp.config}),J({key:`mcp`,nativeName:`mcp`,description:`Show or set OpenClaw MCP servers.`,textAlias:`/mcp`,category:`management`,args:[{name:`action`,description:`show | get | set | unset`,type:`string`,choices:[`show`,`get`,`set`,`unset`]},{name:`path`,description:`MCP server name`,type:`string`},{name:`value`,description:`JSON config for set`,type:`string`,captureRemaining:!0}],argsParsing:`none`,formatArgs:Sp.mcp}),J({key:`plugins`,nativeName:`plugins`,description:`List, show, enable, or disable plugins.`,textAliases:[`/plugins`,`/plugin`],category:`management`,args:[{name:`action`,description:`list | show | get | enable | disable`,type:`string`,choices:[`list`,`show`,`get`,`enable`,`disable`]},{name:`path`,description:`Plugin id or name`,type:`string`}],argsParsing:`none`,formatArgs:Sp.plugins}),J({key:`debug`,nativeName:`debug`,description:`Set runtime debug overrides.`,textAlias:`/debug`,category:`management`,args:[{name:`action`,description:`show | reset | set | unset`,type:`string`,choices:[`show`,`reset`,`set`,`unset`]},{name:`path`,description:`Debug path`,type:`string`},{name:`value`,description:`Value for set`,type:`string`,captureRemaining:!0}],argsParsing:`none`,formatArgs:Sp.debug}),J({key:`usage`,nativeName:`usage`,description:`Usage footer or cost summary.`,textAlias:`/usage`,category:`options`,args:[{name:`mode`,description:`off, tokens, full, or cost`,type:`string`,choices:[`off`,`tokens`,`full`,`cost`]}],argsMenu:`auto`}),J({key:`stop`,nativeName:`stop`,description:`Stop the current run.`,textAlias:`/stop`,category:`session`}),J({key:`restart`,nativeName:`restart`,description:`Restart OpenClaw.`,textAlias:`/restart`,category:`tools`}),J({key:`activation`,nativeName:`activation`,description:`Set group activation mode.`,textAlias:`/activation`,category:`management`,args:[{name:`mode`,description:`mention or always`,type:`string`,choices:[`mention`,`always`]}],argsMenu:`auto`}),J({key:`send`,nativeName:`send`,description:`Set send policy.`,textAlias:`/send`,category:`management`,args:[{name:`mode`,description:`on, off, or inherit`,type:`string`,choices:[`on`,`off`,`inherit`]}],argsMenu:`auto`}),J({key:`reset`,nativeName:`reset`,description:`Reset the current session.`,textAlias:`/reset`,acceptsArgs:!0,category:`session`}),J({key:`new`,nativeName:`new`,description:`Start a new session.`,textAlias:`/new`,acceptsArgs:!0,category:`session`}),J({key:`compact`,nativeName:`compact`,description:`Compact the session context.`,textAlias:`/compact`,category:`session`,args:[{name:`instructions`,description:`Extra compaction instructions`,type:`string`,captureRemaining:!0}]}),J({key:`think`,nativeName:`think`,description:`Set thinking level.`,textAlias:`/think`,category:`options`,args:[{name:`level`,description:`off, minimal, low, medium, high, xhigh`,type:`string`,choices:({provider:e,model:t})=>Jp(e,t)}],argsMenu:`auto`}),J({key:`verbose`,nativeName:`verbose`,description:`Toggle verbose mode.`,textAlias:`/verbose`,category:`options`,args:[{name:`mode`,description:`on or off`,type:`string`,choices:[`on`,`off`]}],argsMenu:`auto`}),J({key:`fast`,nativeName:`fast`,description:`Toggle fast mode.`,textAlias:`/fast`,category:`options`,args:[{name:`mode`,description:`status, on, or off`,type:`string`,choices:[`status`,`on`,`off`]}],argsMenu:`auto`}),J({key:`reasoning`,nativeName:`reasoning`,description:`Toggle reasoning visibility.`,textAlias:`/reasoning`,category:`options`,args:[{name:`mode`,description:`on, off, or stream`,type:`string`,choices:[`on`,`off`,`stream`]}],argsMenu:`auto`}),J({key:`elevated`,nativeName:`elevated`,description:`Toggle elevated mode.`,textAlias:`/elevated`,category:`options`,args:[{name:`mode`,description:`on, off, ask, or full`,type:`string`,choices:[`on`,`off`,`ask`,`full`]}],argsMenu:`auto`}),J({key:`exec`,nativeName:`exec`,description:`Set exec defaults for this session.`,textAlias:`/exec`,category:`options`,args:[{name:`host`,description:`sandbox, gateway, or node`,type:`string`,choices:[`sandbox`,`gateway`,`node`]},{name:`security`,description:`deny, allowlist, or full`,type:`string`,choices:[`deny`,`allowlist`,`full`]},{name:`ask`,description:`off, on-miss, or always`,type:`string`,choices:[`off`,`on-miss`,`always`]},{name:`node`,description:`Node id or name`,type:`string`}],argsParsing:`none`,formatArgs:Sp.exec}),J({key:`model`,nativeName:`model`,description:`Show or set the model.`,textAlias:`/model`,category:`options`,args:[{name:`model`,description:`Model id (provider/model or id)`,type:`string`}]}),J({key:`models`,nativeName:`models`,description:`List model providers or provider models.`,textAlias:`/models`,argsParsing:`none`,acceptsArgs:!0,category:`options`}),J({key:`queue`,nativeName:`queue`,description:`Adjust queue settings.`,textAlias:`/queue`,category:`options`,args:[{name:`mode`,description:`queue mode`,type:`string`,choices:[`steer`,`interrupt`,`followup`,`collect`,`steer-backlog`]},{name:`debounce`,description:`debounce duration (e.g. 500ms, 2s)`,type:`string`},{name:`cap`,description:`queue cap`,type:`number`},{name:`drop`,description:`drop policy`,type:`string`,choices:[`old`,`new`,`summarize`]}],argsParsing:`none`,formatArgs:Sp.queue}),J({key:`bash`,description:`Run host shell commands (host-only).`,textAlias:`/bash`,scope:`text`,category:`tools`,args:[{name:`command`,description:`Shell command`,type:`string`,captureRemaining:!0}]})];return Yp(e,`whoami`,`/id`),Yp(e,`think`,`/thinking`,`/t`),Yp(e,`verbose`,`/v`),Yp(e,`reasoning`,`/reason`),Yp(e,`elevated`,`/elev`),Yp(e,`steer`,`/tell`),Xp(e),e}var Qp={help:`book`,status:`barChart`,usage:`barChart`,export:`download`,export_session:`download`,tools:`terminal`,skill:`zap`,commands:`book`,new:`plus`,reset:`refresh`,compact:`loader`,stop:`stop`,clear:`trash`,focus:`eye`,unfocus:`eye`,model:`brain`,models:`brain`,think:`brain`,verbose:`terminal`,fast:`zap`,agents:`monitor`,subagents:`folder`,kill:`x`,steer:`send`,tts:`volume2`},$p=new Set([`help`,`new`,`reset`,`stop`,`compact`,`focus`,`model`,`think`,`fast`,`verbose`,`export-session`,`usage`,`agents`,`kill`]),em=[{key:`clear`,name:`clear`,description:`Clear chat history`,icon:`trash`,category:`session`,executeLocal:!0}],tm={help:`tools`,commands:`tools`,tools:`tools`,skill:`tools`,status:`tools`,export_session:`tools`,usage:`tools`,tts:`tools`,agents:`agents`,subagents:`agents`,kill:`agents`,steer:`agents`,session:`session`,stop:`session`,reset:`session`,new:`session`,compact:`session`,focus:`session`,unfocus:`session`,model:`model`,models:`model`,think:`model`,verbose:`model`,fast:`model`,reasoning:`model`,elevated:`model`,queue:`model`};function nm(e){return e.key.replace(/[:.-]/g,`_`)}function rm(e){return e.textAliases.map(e=>e.trim()).filter(e=>e.startsWith(`/`)).map(e=>e.slice(1))}function im(e){let t=rm(e);return t.length===0?null:t[0]??null}function am(e){if(e.args?.length)return e.args.map(e=>{let t=`<${e.name}>`;return e.required?t:`[${e.name}]`}).join(` `)}function om(e){return typeof e==`string`?e:e.value}function sm(e){let t=e.args?.[0];if(!t||typeof t.choices==`function`)return;let n=t.choices?.map(om).filter(Boolean);return n?.length?n:void 0}function cm(e){return tm[nm(e)]??`tools`}function lm(e){return Qp[nm(e)]??`terminal`}function um(e){let t=im(e);return t?{key:e.key,name:t,aliases:rm(e).filter(e=>e!==t),description:e.description,args:am(e),icon:lm(e),category:cm(e),executeLocal:$p.has(e.key),argOptions:sm(e)}:null}var dm=[...Zp().map(um).filter(e=>e!==null),...em],fm=[`session`,`model`,`tools`,`agents`],pm={session:`Session`,model:`Model`,agents:`Agents`,tools:`Tools`};function mm(e){let t=e.toLowerCase();return(t?dm.filter(e=>e.name.startsWith(t)||e.aliases?.some(e=>e.toLowerCase().startsWith(t))||e.description.toLowerCase().includes(t)):dm).toSorted((e,n)=>{let r=fm.indexOf(e.category??`session`),i=fm.indexOf(n.category??`session`);if(r!==i)return r-i;if(t){let r=e.name.startsWith(t)?0:1,i=n.name.startsWith(t)?0:1;if(r!==i)return r-i}return 0})}function hm(e){let t=e.trim();if(!t.startsWith(`/`))return null;let n=t.slice(1),r=n.search(/[\s:]/u),i=r===-1?n:n.slice(0,r),a=r===-1?``:n.slice(r).trimStart();a.startsWith(`:`)&&(a=a.slice(1).trimStart());let o=a.trim();if(!i)return null;let s=i.toLowerCase(),c=dm.find(e=>e.name===s||e.aliases?.some(e=>e.toLowerCase()===s));return c?{command:c,args:o}:null}function gm(e){return n`
    <div class="sidebar-panel">
      <div class="sidebar-header">
        <div class="sidebar-title">Tool Output</div>
        <button @click=${e.onClose} class="btn" title="Close sidebar">
          ${W.x}
        </button>
      </div>
      <div class="sidebar-content">
        ${e.error?n`
              <div class="callout danger">${e.error}</div>
              <button @click=${e.onViewRawText} class="btn" style="margin-top: 12px;">
                View Raw Text
              </button>
            `:e.content?n`<div class="sidebar-markdown">${ws(mu(e.content))}</div>`:n`
                  <div class="muted">No content available</div>
                `}
      </div>
    </div>
  `}function Y(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var _m=class extends c{constructor(...e){super(...e),this.splitRatio=.6,this.minRatio=.4,this.maxRatio=.7,this.isDragging=!1,this.startX=0,this.startRatio=0,this.handleMouseDown=e=>{this.isDragging=!0,this.startX=e.clientX,this.startRatio=this.splitRatio,this.classList.add(`dragging`),document.addEventListener(`mousemove`,this.handleMouseMove),document.addEventListener(`mouseup`,this.handleMouseUp),e.preventDefault()},this.handleMouseMove=e=>{if(!this.isDragging)return;let t=this.parentElement;if(!t)return;let n=t.getBoundingClientRect().width,r=(e.clientX-this.startX)/n,i=this.startRatio+r;i=Math.max(this.minRatio,Math.min(this.maxRatio,i)),this.dispatchEvent(new CustomEvent(`resize`,{detail:{splitRatio:i},bubbles:!0,composed:!0}))},this.handleMouseUp=()=>{this.isDragging=!1,this.classList.remove(`dragging`),document.removeEventListener(`mousemove`,this.handleMouseMove),document.removeEventListener(`mouseup`,this.handleMouseUp)}}static{this.styles=r`
    :host {
      width: 4px;
      cursor: col-resize;
      background: var(--border, #333);
      transition: background 150ms ease-out;
      flex-shrink: 0;
      position: relative;
    }
    :host::before {
      content: "";
      position: absolute;
      top: 0;
      left: -4px;
      right: -4px;
      bottom: 0;
    }
    :host(:hover) {
      background: var(--accent, #007bff);
    }
    :host(.dragging) {
      background: var(--accent, #007bff);
    }
  `}render(){return i}connectedCallback(){super.connectedCallback(),this.addEventListener(`mousedown`,this.handleMouseDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mousedown`,this.handleMouseDown),document.removeEventListener(`mousemove`,this.handleMouseMove),document.removeEventListener(`mouseup`,this.handleMouseUp)}};Y([x({type:Number})],_m.prototype,`splitRatio`,void 0),Y([x({type:Number})],_m.prototype,`minRatio`,void 0),Y([x({type:Number})],_m.prototype,`maxRatio`,void 0),_m=Y([v(`resizable-divider`)],_m);var vm=5e3,ym=8e3,bm=new Map,xm=new Map,Sm=new Map;function Cm(e){return mp(bm,e,()=>new lp)}function wm(e){return mp(xm,e,()=>new dp(e))}function Tm(e){return mp(Sm,e,()=>new es(e))}function Em(){return{sttRecording:!1,sttInterimText:``,slashMenuOpen:!1,slashMenuItems:[],slashMenuIndex:0,slashMenuMode:`command`,slashMenuCommand:null,slashMenuArgItems:[],searchOpen:!1,searchQuery:``,pinnedExpanded:!1}}var X=Em();function Dm(){X.sttRecording&&Ad(),Object.assign(X,Em())}function Om(e){e.style.height=`auto`,e.style.height=`${Math.min(e.scrollHeight,150)}px`}function km(e){return e?e.active?n`
      <div class="compaction-indicator compaction-indicator--active" role="status" aria-live="polite">
        ${W.loader} Compacting context...
      </div>
    `:e.completedAt&&Date.now()-e.completedAt<vm?n`
        <div class="compaction-indicator compaction-indicator--complete" role="status" aria-live="polite">
          ${W.check} Context compacted
        </div>
      `:i:i}function Am(e){if(!e)return i;let t=e.phase??`active`;if(Date.now()-e.occurredAt>=ym)return i;let r=[`Selected: ${e.selected}`,t===`cleared`?`Active: ${e.selected}`:`Active: ${e.active}`,t===`cleared`&&e.previous?`Previous fallback: ${e.previous}`:null,e.reason?`Reason: ${e.reason}`:null,e.attempts.length>0?`Attempts: ${e.attempts.slice(0,3).join(` | `)}`:null].filter(Boolean).join(` • `),a=t===`cleared`?`Fallback cleared: ${e.selected}`:`Fallback active: ${e.active}`;return n`
    <div class=${t===`cleared`?`compaction-indicator compaction-indicator--fallback-cleared`:`compaction-indicator compaction-indicator--fallback`} role="status" aria-live="polite" title=${r}>
      ${t===`cleared`?W.check:W.brain} ${a}
    </div>
  `}function jm(e){let t=e.trim().replace(/^#/,``);return/^[0-9a-fA-F]{6}$/.test(t)?[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]:null}var Mm=null;function Nm(){if(Mm)return Mm;let e=getComputedStyle(document.documentElement),t=e.getPropertyValue(`--warn`).trim()||`#f59e0b`,n=e.getPropertyValue(`--danger`).trim()||`#ef4444`;return Mm={warnHex:t,dangerHex:n,warnRgb:jm(t)??[245,158,11],dangerRgb:jm(n)??[239,68,68]},Mm}function Pm(e,t){if(e?.totalTokensFresh===!1)return i;let r=e?.totalTokens??0,a=e?.contextTokens??t??0;if(!r||!a)return i;let o=r/a;if(o<.85)return i;let s=Math.min(Math.round(o*100),100),{warnRgb:c,dangerRgb:l}=Nm(),[u,d,f]=c,[p,m,h]=l,g=Math.min(Math.max((o-.85)/.1,0),1),_=Math.round(u+(p-u)*g),v=Math.round(d+(m-d)*g),y=Math.round(f+(h-f)*g);return n`
    <div class="context-notice" role="status" style="--ctx-color:${`rgb(${_}, ${v}, ${y})`};--ctx-bg:${`rgba(${_}, ${v}, ${y}, ${.08+.08*g})`}">
      <svg class="context-notice__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <span>${s}% context used</span>
      <span class="context-notice__detail">${Fm(r)} / ${Fm(a)}</span>
    </div>
  `}function Fm(e){return e>=1e6?`${(e/1e6).toFixed(1).replace(/\.0$/,``)}M`:e>=1e3?`${(e/1e3).toFixed(1).replace(/\.0$/,``)}k`:String(e)}function Im(){return`att-${Date.now()}-${Math.random().toString(36).slice(2,9)}`}function Lm(e,t){let n=e.clipboardData?.items;if(!n||!t.onAttachmentsChange)return;let r=[];for(let e=0;e<n.length;e++){let t=n[e];t.type.startsWith(`image/`)&&r.push(t)}if(r.length!==0){e.preventDefault();for(let e of r){let n=e.getAsFile();if(!n)continue;let r=new FileReader;r.addEventListener(`load`,()=>{let e=r.result,i={id:Im(),dataUrl:e,mimeType:n.type},a=t.attachments??[];t.onAttachmentsChange?.([...a,i])}),r.readAsDataURL(n)}}}function Rm(e,t){let n=e.target;if(!n.files||!t.onAttachmentsChange)return;let r=t.attachments??[],i=[],a=0;for(let e of n.files){if(!Qo(e.type))continue;a++;let n=new FileReader;n.addEventListener(`load`,()=>{i.push({id:Im(),dataUrl:n.result,mimeType:e.type}),a--,a===0&&t.onAttachmentsChange?.([...r,...i])}),n.readAsDataURL(e)}n.value=``}function zm(e,t){e.preventDefault();let n=e.dataTransfer?.files;if(!n||!t.onAttachmentsChange)return;let r=t.attachments??[],i=[],a=0;for(let e of n){if(!Qo(e.type))continue;a++;let n=new FileReader;n.addEventListener(`load`,()=>{i.push({id:Im(),dataUrl:n.result,mimeType:e.type}),a--,a===0&&t.onAttachmentsChange?.([...r,...i])}),n.readAsDataURL(e)}}function Bm(e){let t=e.attachments??[];return t.length===0?i:n`
    <div class="chat-attachments-preview">
      ${t.map(t=>n`
          <div class="chat-attachment-thumb">
            <img src=${t.dataUrl} alt="Attachment preview" />
            <button
              class="chat-attachment-remove"
              type="button"
              aria-label="Remove attachment"
              @click=${()=>{let n=(e.attachments??[]).filter(e=>e.id!==t.id);e.onAttachmentsChange?.(n)}}
            >&times;</button>
          </div>
        `)}
    </div>
  `}function Vm(){X.slashMenuMode=`command`,X.slashMenuCommand=null,X.slashMenuArgItems=[],X.slashMenuItems=[]}function Hm(e,t){let n=e.match(/^\/(\S+)\s(.*)$/);if(n){let e=n[1].toLowerCase(),r=n[2].toLowerCase(),i=dm.find(t=>t.name===e);if(i?.argOptions?.length){let e=r?i.argOptions.filter(e=>e.toLowerCase().startsWith(r)):i.argOptions;if(e.length>0){X.slashMenuMode=`args`,X.slashMenuCommand=i,X.slashMenuArgItems=e,X.slashMenuOpen=!0,X.slashMenuIndex=0,X.slashMenuItems=[],t();return}}X.slashMenuOpen=!1,Vm(),t();return}let r=e.match(/^\/(\S*)$/);if(r){let e=mm(r[1]);X.slashMenuItems=e,X.slashMenuOpen=e.length>0,X.slashMenuIndex=0,X.slashMenuMode=`command`,X.slashMenuCommand=null,X.slashMenuArgItems=[]}else X.slashMenuOpen=!1,Vm();t()}function Um(e,t,n){if(e.argOptions?.length){t.onDraftChange(`/${e.name} `),X.slashMenuMode=`args`,X.slashMenuCommand=e,X.slashMenuArgItems=e.argOptions,X.slashMenuOpen=!0,X.slashMenuIndex=0,X.slashMenuItems=[],n();return}X.slashMenuOpen=!1,Vm(),e.executeLocal&&!e.args?(t.onDraftChange(`/${e.name}`),n(),t.onSend()):(t.onDraftChange(`/${e.name} `),n())}function Wm(e,t,n){if(e.argOptions?.length){t.onDraftChange(`/${e.name} `),X.slashMenuMode=`args`,X.slashMenuCommand=e,X.slashMenuArgItems=e.argOptions,X.slashMenuOpen=!0,X.slashMenuIndex=0,X.slashMenuItems=[],n();return}X.slashMenuOpen=!1,Vm(),t.onDraftChange(e.args?`/${e.name} `:`/${e.name}`),n()}function Gm(e,t,n,r){let i=X.slashMenuCommand?.name??``;X.slashMenuOpen=!1,Vm(),t.onDraftChange(`/${i} ${e}`),n(),r&&t.onSend()}function Km(e){return e.length<100?null:`~${Math.ceil(e.length/4)} tokens`}function qm(e){xs(e.messages,e.assistantName)}var Jm=[`What can you do?`,`Summarize my recent sessions`,`Help me configure a channel`,`Check system health`];function Ym(e){let t=e.assistantName||`Assistant`,r=Gu({identity:{avatar:e.assistantAvatar??void 0,avatarUrl:e.assistantAvatarUrl??void 0}}),i=Ku(e.basePath??``);return n`
    <div class="agent-chat__welcome" style="--agent-color: var(--accent)">
      <div class="agent-chat__welcome-glow"></div>
      ${r?n`<img src=${r} alt=${t} style="width:56px; height:56px; border-radius:50%; object-fit:cover;" />`:n`<div class="agent-chat__avatar agent-chat__avatar--logo"><img src=${i} alt="OpenClaw" /></div>`}
      <h2>${t}</h2>
      <div class="agent-chat__badges">
        <span class="agent-chat__badge"><img src=${i} alt="" /> Ready to chat</span>
      </div>
      <p class="agent-chat__hint">
        Type a message below &middot; <kbd>/</kbd> for commands
      </p>
      <div class="agent-chat__suggestions">
        ${Jm.map(t=>n`
            <button
              type="button"
              class="agent-chat__suggestion"
              @click=${()=>{e.onDraftChange(t),e.onSend()}}
            >${t}</button>
          `)}
      </div>
    </div>
  `}function Xm(e){return X.searchOpen?n`
    <div class="agent-chat__search-bar">
      ${W.search}
      <input
        type="text"
        placeholder="Search messages..."
        aria-label="Search messages"
        .value=${X.searchQuery}
        @input=${t=>{X.searchQuery=t.target.value,e()}}
      />
      <button class="btn btn--ghost" aria-label="Close search" @click=${()=>{X.searchOpen=!1,X.searchQuery=``,e()}}>
        ${W.x}
      </button>
    </div>
  `:i}function Zm(e,t,r){let a=Array.isArray(e.messages)?e.messages:[],o=[];for(let e of t.indices){let t=a[e];if(!t)continue;let n=fp(t),r=typeof t.role==`string`?t.role:`unknown`;o.push({index:e,text:n,role:r})}return o.length===0?i:n`
    <div class="agent-chat__pinned">
      <button class="agent-chat__pinned-toggle" @click=${()=>{X.pinnedExpanded=!X.pinnedExpanded,r()}}>
        ${W.bookmark}
        ${o.length} pinned
        <span class="collapse-chevron ${X.pinnedExpanded?``:`collapse-chevron--collapsed`}">${W.chevronDown}</span>
      </button>
      ${X.pinnedExpanded?n`
            <div class="agent-chat__pinned-list">
              ${o.map(({index:e,text:i,role:a})=>n`
                <div class="agent-chat__pinned-item">
                  <span class="agent-chat__pinned-role">${a===`user`?`You`:`Assistant`}</span>
                  <span class="agent-chat__pinned-text">${i.slice(0,100)}${i.length>100?`...`:``}</span>
                  <button class="btn btn--ghost" @click=${()=>{t.unpin(e),r()}} title="Unpin">
                    ${W.x}
                  </button>
                </div>
              `)}
            </div>
          `:i}
    </div>
  `}function Qm(e,t){if(!X.slashMenuOpen)return i;if(X.slashMenuMode===`args`&&X.slashMenuCommand&&X.slashMenuArgItems.length>0)return n`
      <div class="slash-menu" role="listbox" aria-label="Command arguments">
        <div class="slash-menu-group">
          <div class="slash-menu-group__label">/${X.slashMenuCommand.name} ${X.slashMenuCommand.description}</div>
          ${X.slashMenuArgItems.map((r,a)=>n`
              <div
                class="slash-menu-item ${a===X.slashMenuIndex?`slash-menu-item--active`:``}"
                role="option"
                aria-selected=${a===X.slashMenuIndex}
                @click=${()=>Gm(r,t,e,!0)}
                @mouseenter=${()=>{X.slashMenuIndex=a,e()}}
              >
                ${X.slashMenuCommand?.icon?n`<span class="slash-menu-icon">${W[X.slashMenuCommand.icon]}</span>`:i}
                <span class="slash-menu-name">${r}</span>
                <span class="slash-menu-desc">/${X.slashMenuCommand?.name} ${r}</span>
              </div>
            `)}
        </div>
        <div class="slash-menu-footer">
          <kbd>↑↓</kbd> navigate
          <kbd>Tab</kbd> fill
          <kbd>Enter</kbd> run
          <kbd>Esc</kbd> close
        </div>
      </div>
    `;if(X.slashMenuItems.length===0)return i;let r=new Map;for(let e=0;e<X.slashMenuItems.length;e++){let t=X.slashMenuItems[e],n=t.category??`session`,i=r.get(n);i||(i=[],r.set(n,i)),i.push({cmd:t,globalIdx:e})}let a=[];for(let[o,s]of r)a.push(n`
      <div class="slash-menu-group">
        <div class="slash-menu-group__label">${pm[o]}</div>
        ${s.map(({cmd:r,globalIdx:a})=>n`
            <div
              class="slash-menu-item ${a===X.slashMenuIndex?`slash-menu-item--active`:``}"
              role="option"
              aria-selected=${a===X.slashMenuIndex}
              @click=${()=>Um(r,t,e)}
              @mouseenter=${()=>{X.slashMenuIndex=a,e()}}
            >
              ${r.icon?n`<span class="slash-menu-icon">${W[r.icon]}</span>`:i}
              <span class="slash-menu-name">/${r.name}</span>
              ${r.args?n`<span class="slash-menu-args">${r.args}</span>`:i}
              <span class="slash-menu-desc">${r.description}</span>
              ${r.argOptions?.length?n`<span class="slash-menu-badge">${r.argOptions.length} options</span>`:r.executeLocal&&!r.args?n`
                        <span class="slash-menu-badge">instant</span>
                      `:i}
            </div>
          `)}
      </div>
    `);return n`
    <div class="slash-menu" role="listbox" aria-label="Slash commands">
      ${a}
      <div class="slash-menu-footer">
        <kbd>↑↓</kbd> navigate
        <kbd>Tab</kbd> fill
        <kbd>Enter</kbd> select
        <kbd>Esc</kbd> close
      </div>
    </div>
  `}function $m(e){let t=e.connected,r=e.sending||e.stream!==null,a=!!(e.canAbort&&e.onAbort),o=e.sessions?.sessions?.find(t=>t.key===e.sessionKey),s=o?.reasoningLevel??`off`,c=e.showThinking&&s!==`off`,l={name:e.assistantName,avatar:Gu({identity:{avatar:e.assistantAvatar??void 0,avatarUrl:e.assistantAvatarUrl??void 0}})??null},u=wm(e.sessionKey),d=Tm(e.sessionKey),f=Cm(e.sessionKey),p=(e.attachments?.length??0)>0,m=Km(e.draft),h=e.connected?p?`Add a message or paste more images...`:`Message ${e.assistantName||`agent`} (Enter to send)`:`Connect to the gateway to start chatting...`,g=e.onRequestUpdate??(()=>{}),_=e.getDraft??(()=>e.draft),v=e.splitRatio??.6,y=!!(e.sidebarOpen&&e.onCloseSidebar),b=e=>{let t=e.target.closest(`.code-block-copy`);if(!t)return;let n=t.dataset.code??``;navigator.clipboard.writeText(n).then(()=>{t.classList.add(`copied`),setTimeout(()=>t.classList.remove(`copied`),1500)},()=>{})},x=nh(e),S=x.length===0&&!e.loading,C=n`
    <div
      class="chat-thread"
      role="log"
      aria-live="polite"
      @scroll=${e.onChatScroll}
      @click=${b}
    >
      <div class="chat-thread-inner">
      ${e.loading?n`
              <div class="chat-loading-skeleton" aria-label="Loading chat">
                <div class="chat-line assistant">
                  <div class="chat-msg">
                    <div class="chat-bubble">
                      <div class="skeleton skeleton-line skeleton-line--long" style="margin-bottom: 8px"></div>
                      <div class="skeleton skeleton-line skeleton-line--medium" style="margin-bottom: 8px"></div>
                      <div class="skeleton skeleton-line skeleton-line--short"></div>
                    </div>
                  </div>
                </div>
                <div class="chat-line user" style="margin-top: 12px">
                  <div class="chat-msg">
                    <div class="chat-bubble">
                      <div class="skeleton skeleton-line skeleton-line--medium"></div>
                    </div>
                  </div>
                </div>
                <div class="chat-line assistant" style="margin-top: 12px">
                  <div class="chat-msg">
                    <div class="chat-bubble">
                      <div class="skeleton skeleton-line skeleton-line--long" style="margin-bottom: 8px"></div>
                      <div class="skeleton skeleton-line skeleton-line--short"></div>
                    </div>
                  </div>
                </div>
              </div>
            `:i}
      ${S&&!X.searchOpen?Ym(e):i}
      ${S&&X.searchOpen?n`
              <div class="agent-chat__empty">No matching messages</div>
            `:i}
      ${Xo(x,e=>e.key,t=>t.kind===`divider`?n`
              <div class="chat-divider" role="separator" data-ts=${String(t.timestamp)}>
                <span class="chat-divider__line"></span>
                <span class="chat-divider__label">${t.label}</span>
                <span class="chat-divider__line"></span>
              </div>
            `:t.kind===`reading-indicator`?Hf(l,e.basePath):t.kind===`stream`?Uf(t.text,t.startedAt,e.onOpenSidebar,l,e.basePath):t.kind===`group`?d.has(t.key)?i:Wf(t,{onOpenSidebar:e.onOpenSidebar,showReasoning:c,showToolCalls:e.showToolCalls,assistantName:e.assistantName,assistantAvatar:l.avatar,basePath:e.basePath,contextWindow:o?.contextTokens??e.sessions?.defaults?.contextTokens??null,onDelete:()=>{d.delete(t.key),g()}}):i)}
      </div>
    </div>
  `;return n`
    <section
      class="card chat"
      @drop=${t=>zm(t,e)}
      @dragover=${e=>e.preventDefault()}
    >
      ${e.disabledReason?n`<div class="callout">${e.disabledReason}</div>`:i}
      ${e.error?n`<div class="callout danger">${e.error}</div>`:i}

      ${e.focusMode?n`
            <button
              class="chat-focus-exit"
              type="button"
              @click=${e.onToggleFocusMode}
              aria-label="Exit focus mode"
              title="Exit focus mode"
            >
              ${W.x}
            </button>
          `:i}

      ${Xm(g)}
      ${Zm(e,u,g)}

      <div class="chat-split-container ${y?`chat-split-container--open`:``}">
        <div
          class="chat-main"
          style="flex: ${y?`0 0 ${v*100}%`:`1 1 100%`}"
        >
          ${C}
        </div>

        ${y?n`
              <resizable-divider
                .splitRatio=${v}
                @resize=${t=>e.onSplitRatioChange?.(t.detail.splitRatio)}
              ></resizable-divider>
              <div class="chat-sidebar">
                ${gm({content:e.sidebarContent??null,error:e.sidebarError??null,onClose:e.onCloseSidebar,onViewRawText:()=>{!e.sidebarContent||!e.onOpenSidebar||e.onOpenSidebar(`\`\`\`\n${e.sidebarContent}\n\`\`\``)}})}
              </div>
            `:i}
      </div>

      ${e.queue.length?n`
            <div class="chat-queue" role="status" aria-live="polite">
              <div class="chat-queue__title">Queued (${e.queue.length})</div>
              <div class="chat-queue__list">
                ${e.queue.map(t=>n`
                    <div class="chat-queue__item">
                      <div class="chat-queue__text">
                        ${t.text||(t.attachments?.length?`Image (${t.attachments.length})`:``)}
                      </div>
                      <button
                        class="btn chat-queue__remove"
                        type="button"
                        aria-label="Remove queued message"
                        @click=${()=>e.onQueueRemove(t.id)}
                      >
                        ${W.x}
                      </button>
                    </div>
                  `)}
              </div>
            </div>
          `:i}

      ${Am(e.fallbackStatus)}
      ${km(e.compactionStatus)}
      ${Pm(o,e.sessions?.defaults?.contextTokens??null)}

      ${e.showNewMessages?n`
            <button
              class="chat-new-messages"
              type="button"
              @click=${e.onScrollToBottom}
            >
              ${W.arrowDown} New messages
            </button>
          `:i}

      <!-- Input bar -->
      <div class="agent-chat__input">
        ${Qm(g,e)}
        ${Bm(e)}

        <input
          type="file"
          accept=${Zo}
          multiple
          class="agent-chat__file-input"
          @change=${t=>Rm(t,e)}
        />

        ${X.sttRecording&&X.sttInterimText?n`<div class="agent-chat__stt-interim">${X.sttInterimText}</div>`:i}

        <textarea
          ${Jo(e=>e&&Om(e))}
          .value=${e.draft}
          dir=${Eu(e.draft)}
          ?disabled=${!e.connected}
          @keydown=${n=>{if(X.slashMenuOpen&&X.slashMenuMode===`args`&&X.slashMenuArgItems.length>0){let t=X.slashMenuArgItems.length;switch(n.key){case`ArrowDown`:n.preventDefault(),X.slashMenuIndex=(X.slashMenuIndex+1)%t,g();return;case`ArrowUp`:n.preventDefault(),X.slashMenuIndex=(X.slashMenuIndex-1+t)%t,g();return;case`Tab`:n.preventDefault(),Gm(X.slashMenuArgItems[X.slashMenuIndex],e,g,!1);return;case`Enter`:n.preventDefault(),Gm(X.slashMenuArgItems[X.slashMenuIndex],e,g,!0);return;case`Escape`:n.preventDefault(),X.slashMenuOpen=!1,Vm(),g();return}}if(X.slashMenuOpen&&X.slashMenuItems.length>0){let t=X.slashMenuItems.length;switch(n.key){case`ArrowDown`:n.preventDefault(),X.slashMenuIndex=(X.slashMenuIndex+1)%t,g();return;case`ArrowUp`:n.preventDefault(),X.slashMenuIndex=(X.slashMenuIndex-1+t)%t,g();return;case`Tab`:n.preventDefault(),Wm(X.slashMenuItems[X.slashMenuIndex],e,g);return;case`Enter`:n.preventDefault(),Um(X.slashMenuItems[X.slashMenuIndex],e,g);return;case`Escape`:n.preventDefault(),X.slashMenuOpen=!1,Vm(),g();return}}if(!e.draft.trim()){if(n.key===`ArrowUp`){let t=f.up();t!==null&&(n.preventDefault(),e.onDraftChange(t));return}if(n.key===`ArrowDown`){let t=f.down();n.preventDefault(),e.onDraftChange(t??``);return}}if((n.metaKey||n.ctrlKey)&&!n.shiftKey&&n.key===`f`){n.preventDefault(),X.searchOpen=!X.searchOpen,X.searchOpen||(X.searchQuery=``),g();return}if(n.key===`Enter`&&!n.shiftKey){if(n.isComposing||n.keyCode===229||!e.connected)return;n.preventDefault(),t&&(e.draft.trim()&&f.push(e.draft),e.onSend())}}}
          @input=${t=>{let n=t.target;Om(n),Hm(n.value,g),f.reset(),e.onDraftChange(n.value)}}
          @paste=${t=>Lm(t,e)}
          placeholder=${X.sttRecording?`Listening...`:h}
          rows="1"
        ></textarea>

        <div class="agent-chat__toolbar">
          <div class="agent-chat__toolbar-left">
            <button
              class="agent-chat__input-btn"
              @click=${()=>{document.querySelector(`.agent-chat__file-input`)?.click()}}
              title="Attach file"
              aria-label="Attach file"
              ?disabled=${!e.connected}
            >
              ${W.paperclip}
            </button>

            ${Dd()?n`
                  <button
                    class="agent-chat__input-btn ${X.sttRecording?`agent-chat__input-btn--recording`:``}"
                    @click=${()=>{X.sttRecording?(Ad(),X.sttRecording=!1,X.sttInterimText=``,g()):kd({onTranscript:(t,n)=>{if(n){let n=_(),r=n&&!n.endsWith(` `)?` `:``;e.onDraftChange(n+r+t),X.sttInterimText=``}else X.sttInterimText=t;g()},onStart:()=>{X.sttRecording=!0,g()},onEnd:()=>{X.sttRecording=!1,X.sttInterimText=``,g()},onError:()=>{X.sttRecording=!1,X.sttInterimText=``,g()}})&&(X.sttRecording=!0,g())}}
                    title=${X.sttRecording?`Stop recording`:`Voice input`}
                    ?disabled=${!e.connected}
                  >
                    ${X.sttRecording?W.micOff:W.mic}
                  </button>
                `:i}

            ${m?n`<span class="agent-chat__token-count">${m}</span>`:i}
          </div>

          <div class="agent-chat__toolbar-right">
            ${i}
            ${a?i:n`
                    <button
                      class="btn btn--ghost"
                      @click=${e.onNewSession}
                      title="New session"
                      aria-label="New session"
                    >
                      ${W.plus}
                    </button>
                  `}
            <button class="btn btn--ghost" @click=${()=>qm(e)} title="Export" aria-label="Export chat" ?disabled=${e.messages.length===0}>
              ${W.download}
            </button>

            ${a&&(r||e.sending)?n`
                  <button class="chat-send-btn chat-send-btn--stop" @click=${e.onAbort} title="Stop" aria-label="Stop generating">
                    ${W.stop}
                  </button>
                `:n`
                  <button
                    class="chat-send-btn"
                    @click=${()=>{e.draft.trim()&&f.push(e.draft),e.onSend()}}
                    ?disabled=${!e.connected||e.sending}
                    title=${r?`Queue`:`Send`}
                    aria-label=${r?`Queue message`:`Send message`}
                  >
                    ${W.send}
                  </button>
                `}
          </div>
        </div>
      </div>
    </section>
  `}var eh=200;function th(e){let t=[],n=null;for(let r of e){if(r.kind!==`message`){n&&=(t.push(n),null),t.push(r);continue}let e=Cd(r.message),i=wd(e.role),a=i.toLowerCase()===`user`?e.senderLabel??null:null,o=e.timestamp||Date.now();!n||n.role!==i||i.toLowerCase()===`user`&&n.senderLabel!==a?(n&&t.push(n),n={kind:`group`,key:`group:${i}:${r.key}`,role:i,senderLabel:a,messages:[{message:r.message,key:r.key}],timestamp:o,isStreaming:!1}):n.messages.push({message:r.message,key:r.key})}return n&&t.push(n),t}function nh(e){let t=[],n=Array.isArray(e.messages)?e.messages:[],r=Array.isArray(e.toolMessages)?e.toolMessages:[],i=Math.max(0,n.length-eh);i>0&&t.push({kind:`message`,key:`chat:history:notice`,message:{role:`system`,content:`Showing last ${eh} messages (${i} hidden).`,timestamp:Date.now()}});for(let r=i;r<n.length;r++){let i=n[r],a=Cd(i),o=i.__openclaw;if(o&&o.kind===`compaction`){t.push({kind:`divider`,key:typeof o.id==`string`?`divider:compaction:${o.id}`:`divider:compaction:${a.timestamp}:${r}`,label:`Compaction`,timestamp:a.timestamp??Date.now()});continue}!e.showToolCalls&&a.role.toLowerCase()===`toolresult`||X.searchOpen&&X.searchQuery.trim()&&!pp(i,X.searchQuery)||t.push({kind:`message`,key:rh(i,r),message:i})}let a=e.streamSegments??[],o=Math.max(a.length,r.length);for(let i=0;i<o;i++)i<a.length&&a[i].text.trim().length>0&&t.push({kind:`stream`,key:`stream-seg:${e.sessionKey}:${i}`,text:a[i].text,startedAt:a[i].ts}),i<r.length&&e.showToolCalls&&t.push({kind:`message`,key:rh(r[i],i+n.length),message:r[i]});if(e.stream!==null){let n=`stream:${e.sessionKey}:${e.streamStartedAt??`live`}`;e.stream.trim().length>0?t.push({kind:`stream`,key:n,text:e.stream,startedAt:e.streamStartedAt??Date.now()}):t.push({kind:`reading-indicator`,key:n})}return th(t)}function rh(e,t){let n=e,r=typeof n.toolCallId==`string`?n.toolCallId:``;if(r)return`tool:${r}`;let i=typeof n.id==`string`?n.id:``;if(i)return`msg:${i}`;let a=typeof n.messageId==`string`?n.messageId:``;if(a)return`msg:${a}`;let o=typeof n.timestamp==`number`?n.timestamp:null,s=typeof n.role==`string`?n.role:`unknown`;return o==null?`msg:${s}:${t}`:`msg:${s}:${o}:${t}`}function ih(e,t){let n={...t,lastActiveSessionKey:t.lastActiveSessionKey?.trim()||t.sessionKey.trim()||`main`};e.settings=n,Co(n),(t.theme!==e.theme||t.themeMode!==e.themeMode)&&(e.theme=t.theme,e.themeMode=t.themeMode,_h(e,ro(t.theme,t.themeMode))),gh(t.borderRadius),e.applySessionKey=e.settings.lastActiveSessionKey}function ah(e,t){let n=t.trim();n&&e.settings.lastActiveSessionKey!==n&&ih(e,{...e.settings,lastActiveSessionKey:n})}function oh(e){if(!window.location.search&&!window.location.hash)return;let t=new URL(window.location.href),n=new URLSearchParams(t.search),r=new URLSearchParams(t.hash.startsWith(`#`)?t.hash.slice(1):t.hash),i=n.get(`gatewayUrl`)??r.get(`gatewayUrl`),a=i?.trim()??``,o=!!(a&&a!==e.settings.gatewayUrl),s=r.get(`token`)??n.get(`token`),c=n.get(`password`)??r.get(`password`),l=n.get(`session`)??r.get(`session`),u=!!(s?.trim()&&!l?.trim()&&!o),d=!1;if(n.has(`token`)&&(n.delete(`token`),d=!0),s!=null){let t=s.trim();t&&o?e.pendingGatewayToken=t:t&&t!==e.settings.token&&ih(e,{...e.settings,token:t}),r.delete(`token`),d=!0}if(u&&(e.sessionKey=`main`,ih(e,{...e.settings,sessionKey:`main`,lastActiveSessionKey:`main`})),c!=null&&(n.delete(`password`),r.delete(`password`),d=!0),l!=null){let t=l.trim();t&&(e.sessionKey=t,ih(e,{...e.settings,sessionKey:t,lastActiveSessionKey:t}))}if(i!=null&&(o?(e.pendingGatewayUrl=a,s?.trim()||(e.pendingGatewayToken=null)):(e.pendingGatewayUrl=null,e.pendingGatewayToken=null),n.delete(`gatewayUrl`),r.delete(`gatewayUrl`),d=!0),!d)return;t.search=n.toString();let f=r.toString();t.hash=f?`#${f}`:``,window.history.replaceState({},``,t.toString())}function sh(e,t){Sh(e,t,{refreshPolicy:`always`,syncUrl:!0})}function ch(e,t,n){Eo({nextTheme:ro(t,e.themeMode),applyTheme:()=>{ih(e,{...e.settings,theme:t})},context:n,currentTheme:e.themeResolved}),vh(e)}function lh(e,t,n){Eo({nextTheme:ro(e.theme,t),applyTheme:()=>{ih(e,{...e.settings,themeMode:t})},context:n,currentTheme:e.themeResolved}),vh(e)}async function uh(e){if(e.tab===`overview`&&await Th(e),e.tab===`channels`&&await Ah(e),e.tab===`instances`&&await sa(e),e.tab===`usage`&&await La(e),e.tab===`sessions`&&await la(e),e.tab===`cron`&&await jh(e),e.tab===`skills`&&await ma(e),e.tab===`agents`){await si(e),await zn(e);let t=e.agentsList?.agents?.map(e=>e.id)??[];t.length>0&&Xr(e,t);let n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id;n&&(Yr(e,n),e.agentsPanel===`skills`&&Zr(e,n),e.agentsPanel===`channels`&&dn(e,!1),e.agentsPanel===`cron`&&jh(e))}e.tab===`nodes`&&(await Hr(e),await Yi(e),await zn(e),await na(e)),e.tab===`chat`&&(await Zg(e),yr(e,!e.chatHasAutoScrolled)),(e.tab===`config`||e.tab===`communications`||e.tab===`appearance`||e.tab===`automation`||e.tab===`infrastructure`||e.tab===`aiAgents`)&&(await Bn(e),await zn(e)),e.tab===`debug`&&(await Pr(e),e.eventLog=e.eventLogBuffer),e.tab===`logs`&&(e.logsAtBottom=!0,await Vr(e,{reset:!0}),br(e,!0))}function dh(){if(typeof window>`u`)return``;let e=window.__OPENCLAW_CONTROL_UI_BASE_PATH__;return typeof e==`string`&&e.trim()?Ua(e):qa(window.location.pathname)}function fh(e){e.theme=e.settings.theme??`claw`,e.themeMode=e.settings.themeMode??`system`,_h(e,ro(e.theme,e.themeMode)),gh(e.settings.borderRadius??50),vh(e)}function ph(e){vh(e)}function mh(e){e.systemThemeCleanup?.(),e.systemThemeCleanup=null}var hh={sm:6,md:10,lg:14,xl:20,full:9999,default:10};function gh(e){if(typeof document>`u`)return;let t=document.documentElement,n=e/50;t.style.setProperty(`--radius-sm`,`${Math.round(hh.sm*n)}px`),t.style.setProperty(`--radius-md`,`${Math.round(hh.md*n)}px`),t.style.setProperty(`--radius-lg`,`${Math.round(hh.lg*n)}px`),t.style.setProperty(`--radius-xl`,`${Math.round(hh.xl*n)}px`),t.style.setProperty(`--radius-full`,`${Math.round(hh.full*n)}px`),t.style.setProperty(`--radius`,`${Math.round(hh.default*n)}px`)}function _h(e,t){if(e.themeResolved=t,typeof document>`u`)return;let n=document.documentElement,r=t.endsWith(`light`)?`light`:`dark`;n.dataset.theme=t,n.dataset.themeMode=r,n.style.colorScheme=r}function vh(e){if(e.themeMode!==`system`){e.systemThemeCleanup?.(),e.systemThemeCleanup=null;return}if(e.systemThemeCleanup||typeof globalThis.matchMedia!=`function`)return;let t=globalThis.matchMedia(`(prefers-color-scheme: light)`),n=()=>{e.themeMode===`system`&&_h(e,ro(e.theme,`system`))};if(typeof t.addEventListener==`function`){t.addEventListener(`change`,n),e.systemThemeCleanup=()=>t.removeEventListener(`change`,n);return}typeof t.addListener==`function`&&(t.addListener(n),e.systemThemeCleanup=()=>t.removeListener(n))}function yh(e,t){if(typeof window>`u`)return;let n=Ka(window.location.pathname,e.basePath)??`chat`;xh(e,n),Ch(e,n,t)}function bh(e){if(typeof window>`u`)return;let t=Ka(window.location.pathname,e.basePath);if(!t)return;let n=new URL(window.location.href).searchParams.get(`session`)?.trim();n&&(e.sessionKey=n,ih(e,{...e.settings,sessionKey:n,lastActiveSessionKey:n})),xh(e,t)}function xh(e,t){Sh(e,t,{refreshPolicy:`connected`})}function Sh(e,t,n){let r=e.tab;e.tab!==t&&(e.tab=t),r===`chat`&&t!==`chat`&&Dm(),t===`chat`&&(e.chatHasAutoScrolled=!1),t===`logs`?Gr(e):Kr(e),t===`debug`?qr(e):Jr(e),(n.refreshPolicy===`always`||e.connected)&&uh(e),n.syncUrl&&Ch(e,t,!1)}function Ch(e,t,n){if(typeof window>`u`)return;let r=Wa(Ga(t,e.basePath)),i=Wa(window.location.pathname),a=new URL(window.location.href);t===`chat`&&e.sessionKey?a.searchParams.set(`session`,e.sessionKey):a.searchParams.delete(`session`),i!==r&&(a.pathname=r),n?window.history.replaceState({},``,a.toString()):window.history.pushState({},``,a.toString())}function wh(e,t,n){if(typeof window>`u`)return;let r=new URL(window.location.href);r.searchParams.set(`session`,t),n?window.history.replaceState({},``,r.toString()):window.history.pushState({},``,r.toString())}async function Th(e){let t=e;await Promise.allSettled([dn(t,!1),sa(t),la(t),xi(t),Si(t),Pr(t),ma(t),La(t),Oh(t)]),kh(t)}function Eh(e){return e?.scopes?Nr({role:e.role??`operator`,requestedScopes:[`operator.read`],allowedScopes:e.scopes}):!1}function Dh(e){return e?Object.values(e).some(e=>Array.isArray(e)&&e.length>0):!1}async function Oh(e){if(!(!e.client||!e.connected))try{let t=await e.client.request(`logs.tail`,{cursor:e.overviewLogCursor||void 0,limit:100,maxBytes:5e4}),n=Array.isArray(t.lines)?t.lines.filter(e=>typeof e==`string`):[];e.overviewLogLines=[...e.overviewLogLines,...n].slice(-500),typeof t.cursor==`number`&&(e.overviewLogCursor=t.cursor)}catch{}}function kh(e){let t=[];e.lastError&&t.push({severity:`error`,icon:`x`,title:`Gateway Error`,description:e.lastError});let n=e.hello?.auth??null;n?.scopes&&!Eh(n)&&t.push({severity:`warning`,icon:`key`,title:`Missing operator.read scope`,description:`This connection does not have the operator.read scope. Some features may be unavailable.`,href:`https://docs.openclaw.ai/web/dashboard`,external:!0});let r=e.skillsReport?.skills??[],i=r.filter(e=>!e.disabled&&Dh(e.missing));if(i.length>0){let e=i.slice(0,3).map(e=>e.name),n=i.length>3?` +${i.length-3} more`:``;t.push({severity:`warning`,icon:`zap`,title:`Skills with missing dependencies`,description:`${e.join(`, `)}${n}`})}let a=r.filter(e=>e.blockedByAllowlist);a.length>0&&t.push({severity:`warning`,icon:`shield`,title:`${a.length} skill${a.length>1?`s`:``} blocked`,description:a.map(e=>e.name).join(`, `)});let o=e.cronJobs??[],s=o.filter(e=>e.state?.lastStatus===`error`);s.length>0&&t.push({severity:`error`,icon:`clock`,title:`${s.length} cron job${s.length>1?`s`:``} failed`,description:s.map(e=>e.name).join(`, `)});let c=Date.now(),l=o.filter(e=>e.enabled&&e.state?.nextRunAtMs!=null&&c-e.state.nextRunAtMs>3e5);l.length>0&&t.push({severity:`warning`,icon:`clock`,title:`${l.length} overdue job${l.length>1?`s`:``}`,description:l.map(e=>e.name).join(`, `)}),e.attentionItems=t}async function Ah(e){await Promise.all([dn(e,!0),Bn(e),zn(e)])}async function jh(e){let t=e,n=t.cronRunsScope===`job`?t.cronRunsJobId:null;await Promise.all([dn(t,!1),xi(t),Si(t),Hi(t,n)])}var Mh=50,Nh=80,Ph=12e4;function Fh(e){return typeof e==`string`&&e.trim()||null}function Ih(e,t){let n=Fh(t);if(!n)return null;let r=Fh(e);if(r){let e=`${r}/`;if(n.toLowerCase().startsWith(e.toLowerCase())){let t=n.slice(e.length).trim();if(t)return`${r}/${t}`}return`${r}/${n}`}let i=n.indexOf(`/`);if(i>0){let e=n.slice(0,i).trim(),t=n.slice(i+1).trim();if(e&&t)return`${e}/${t}`}return n}function Lh(e){return Array.isArray(e)?e.map(e=>Fh(e)).filter(e=>!!e):[]}function Rh(e){if(!Array.isArray(e))return[];let t=[];for(let n of e){if(!n||typeof n!=`object`)continue;let e=n,r=Fh(e.provider),i=Fh(e.model);if(!r||!i)continue;let a=Fh(e.reason)?.replace(/_/g,` `)??Fh(e.code)??(typeof e.status==`number`?`HTTP ${e.status}`:null)??Fh(e.error)??`error`;t.push({provider:r,model:i,reason:a})}return t}function zh(e){if(!e||typeof e!=`object`)return null;let t=e;if(typeof t.text==`string`)return t.text;let n=t.content;if(!Array.isArray(n))return null;let r=n.map(e=>{if(!e||typeof e!=`object`)return null;let t=e;return t.type===`text`&&typeof t.text==`string`?t.text:null}).filter(e=>!!e);return r.length===0?null:r.join(`
`)}function Bh(e){if(e==null)return null;if(typeof e==`number`||typeof e==`boolean`)return String(e);let t=zh(e),n;if(typeof e==`string`)n=e;else if(t)n=t;else try{n=JSON.stringify(e,null,2)}catch{n=String(e)}let r=u(n,Ph);return r.truncated?`${r.text}\n\n… truncated (${r.total} chars, showing first ${r.text.length}).`:r.text}function Vh(e){let t=[];return t.push({type:`toolcall`,name:e.name,arguments:e.args??{}}),e.output&&t.push({type:`toolresult`,name:e.name,text:e.output}),{role:`assistant`,toolCallId:e.toolCallId,runId:e.runId,content:t,timestamp:e.startedAt}}function Hh(e){if(e.toolStreamOrder.length<=Mh)return;let t=e.toolStreamOrder.length-Mh,n=e.toolStreamOrder.splice(0,t);for(let t of n)e.toolStreamById.delete(t)}function Uh(e){e.chatToolMessages=e.toolStreamOrder.map(t=>e.toolStreamById.get(t)?.message).filter(e=>!!e)}function Wh(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),Uh(e)}function Gh(e,t=!1){if(t){Wh(e);return}e.toolStreamSyncTimer??=window.setTimeout(()=>Wh(e),Nh)}function Kh(e){e.toolStreamSyncTimer!=null&&(clearTimeout(e.toolStreamSyncTimer),e.toolStreamSyncTimer=null),e.toolStreamById.clear(),e.toolStreamOrder=[],e.chatToolMessages=[],e.chatStreamSegments=[]}var qh=5e3,Jh=8e3;function Yh(e,t){let n=t.data??{},r=typeof n.phase==`string`?n.phase:``;e.compactionClearTimer!=null&&(window.clearTimeout(e.compactionClearTimer),e.compactionClearTimer=null),r===`start`?e.compactionStatus={active:!0,startedAt:Date.now(),completedAt:null}:r===`end`&&(e.compactionStatus={active:!1,startedAt:e.compactionStatus?.startedAt??null,completedAt:Date.now()},e.compactionClearTimer=window.setTimeout(()=>{e.compactionStatus=null,e.compactionClearTimer=null},qh))}function Xh(e,t,n){let r=typeof t.sessionKey==`string`?t.sessionKey:void 0;return r&&r!==e.sessionKey?{accepted:!1}:!e.chatRunId&&n?.allowSessionScopedWhenIdle&&r?{accepted:!0,sessionKey:r}:!r&&e.chatRunId&&t.runId!==e.chatRunId||e.chatRunId&&t.runId!==e.chatRunId||!e.chatRunId?{accepted:!1}:{accepted:!0,sessionKey:r}}function Zh(e,t){let n=t.data??{},r=t.stream===`fallback`?`fallback`:Fh(n.phase);if(t.stream===`lifecycle`&&r!==`fallback`&&r!==`fallback_cleared`||!Xh(e,t,{allowSessionScopedWhenIdle:!0}).accepted)return;let i=Ih(n.selectedProvider,n.selectedModel)??Ih(n.fromProvider,n.fromModel),a=Ih(n.activeProvider,n.activeModel)??Ih(n.toProvider,n.toModel),o=Ih(n.previousActiveProvider,n.previousActiveModel)??Fh(n.previousActiveModel);if(!i||!a||r===`fallback`&&i===a)return;let s=Fh(n.reasonSummary)??Fh(n.reason),c=(()=>{let e=Lh(n.attemptSummaries);return e.length>0?e:Rh(n.attempts).map(e=>`${Ih(e.provider,e.model)??`${e.provider}/${e.model}`}: ${e.reason}`)})();e.fallbackClearTimer!=null&&(window.clearTimeout(e.fallbackClearTimer),e.fallbackClearTimer=null),e.fallbackStatus={phase:r===`fallback_cleared`?`cleared`:`active`,selected:i,active:r===`fallback_cleared`?i:a,previous:r===`fallback_cleared`?o??(a===i?void 0:a):void 0,reason:s??void 0,attempts:c,occurredAt:Date.now()},e.fallbackClearTimer=window.setTimeout(()=>{e.fallbackStatus=null,e.fallbackClearTimer=null},Jh)}function Qh(e,t){if(!t)return;if(t.stream===`compaction`){Yh(e,t);return}if(t.stream===`lifecycle`||t.stream===`fallback`){Zh(e,t);return}if(t.stream!==`tool`)return;let n=typeof t.sessionKey==`string`?t.sessionKey:void 0;if(n&&n!==e.sessionKey)return;let r=t.data??{},i=typeof r.toolCallId==`string`?r.toolCallId:``;if(!i)return;let a=typeof r.name==`string`?r.name:`tool`,o=typeof r.phase==`string`?r.phase:``,s=o===`start`?r.args:void 0,c=o===`update`?Bh(r.partialResult):o===`result`?Bh(r.result):void 0,l=Date.now(),u=e.toolStreamById.get(i);u?(u.name=a,s!==void 0&&(u.args=s),c!==void 0&&(u.output=c||void 0),u.updatedAt=l):(e.chatStream&&e.chatStream.trim().length>0&&(e.chatStreamSegments=[...e.chatStreamSegments,{text:e.chatStream,ts:l}],e.chatStream=null,e.chatStreamStartedAt=null),u={toolCallId:i,runId:t.runId,sessionKey:n,name:a,args:s,output:c||void 0,startedAt:typeof t.ts==`number`?t.ts:l,updatedAt:l,message:{}},e.toolStreamById.set(i,u),e.toolStreamOrder.push(i)),u.message=Vh(u),Hh(e),Gh(e,o===`result`)}async function $h(e,t,n,r,i={}){switch(n){case`help`:return eg();case`new`:return{content:`Starting new session...`,action:`new-session`};case`reset`:return{content:`Resetting session...`,action:`reset`};case`stop`:return{content:`Stopping current run...`,action:`stop`};case`clear`:return{content:`Chat history cleared.`,action:`clear`};case`focus`:return{content:`Toggled focus mode.`,action:`toggle-focus`};case`compact`:return await tg(e,t);case`model`:return await ng(e,t,r,i);case`think`:return await rg(e,t,r);case`fast`:return await ag(e,t,r);case`verbose`:return await ig(e,t,r);case`export-session`:return{content:`Exporting session...`,action:`export`};case`usage`:return await og(e,t);case`agents`:return await sg(e);case`kill`:return await cg(e,t,r);default:return{content:`Unknown command: \`/${n}\``}}}function eg(){let e=[`**Available Commands**
`],t=``;for(let n of dm){let r=n.category??`session`;r!==t&&(t=r,e.push(`**${r.charAt(0).toUpperCase()+r.slice(1)}**`));let i=n.args?` ${n.args}`:``,a=n.executeLocal?``:` *(agent)*`;e.push(`\`/${n.name}${i}\` — ${n.description}${a}`)}return e.push("\nType `/` to open the command menu."),{content:e.join(`
`)}}async function tg(e,t){try{return await e.request(`sessions.compact`,{key:t}),{content:`Context compacted successfully.`,action:`refresh`}}catch(e){return{content:`Compaction failed: ${String(e)}`}}}async function ng(e,t,n,r){let i=r.chatModelCatalog??r.modelCatalog;if(!n)try{let[n,r]=await Promise.all([e.request(`sessions.list`,{}),i?Promise.resolve(i):vg(e)]),a=gg(n,t)?.model||n?.defaults?.model||`default`,o=r.map(e=>e.id),s=[`**Current model:** \`${a}\``];return o.length>0&&s.push(`**Available:** ${o.slice(0,10).map(e=>`\`${e}\``).join(`, `)}${o.length>10?` +${o.length-10} more`:``}`),{content:s.join(`
`)}}catch(e){return{content:`Failed to get model info: ${String(e)}`}}try{let[r,a]=await Promise.all([e.request(`sessions.patch`,{key:t,model:n.trim()}),i?Promise.resolve(i):vg(e,{allowFailure:!0})]),o=ri(r.resolved?.model??n.trim(),r.resolved?.modelProvider,a).value;return{content:`Model set to \`${n.trim()}\`.`,action:`refresh`,sessionPatch:{modelOverride:$r(o)}}}catch(e){return{content:`Failed to set model: ${String(e)}`}}}async function rg(e,t,n){let r=n.trim();if(!r)try{let{session:n,models:r}=await _g(e,t);return{content:mg(`Current thinking level: ${yg(n,r)}.`,Ip(n?.modelProvider,n?.model))}}catch(e){return{content:`Failed to get thinking level: ${String(e)}`}}let i=Np(r);if(!i)try{let n=await hg(e,t);return{content:`Unrecognized thinking level "${r}". Valid levels: ${Ip(n?.modelProvider,n?.model)}.`}}catch(e){return{content:`Failed to validate thinking level: ${String(e)}`}}try{return await e.request(`sessions.patch`,{key:t,thinkingLevel:i}),{content:`Thinking level set to **${i}**.`,action:`refresh`}}catch(e){return{content:`Failed to set thinking level: ${String(e)}`}}}async function ig(e,t,n){let r=n.trim();if(!r)try{return{content:mg(`Current verbose level: ${zp((await hg(e,t))?.verboseLevel)??`off`}.`,`on, full, off`)}}catch(e){return{content:`Failed to get verbose level: ${String(e)}`}}let i=zp(r);if(!i)return{content:`Unrecognized verbose level "${r}". Valid levels: off, on, full.`};try{return await e.request(`sessions.patch`,{key:t,verboseLevel:i}),{content:`Verbose mode set to **${i}**.`,action:`refresh`}}catch(e){return{content:`Failed to set verbose mode: ${String(e)}`}}}async function ag(e,t,n){let r=n.trim().toLowerCase();if(!r||r===`status`)try{return{content:mg(`Current fast mode: ${bg(await hg(e,t))}.`,`status, on, off`)}}catch(e){return{content:`Failed to get fast mode: ${String(e)}`}}if(r!==`on`&&r!==`off`)return{content:`Unrecognized fast mode "${n.trim()}". Valid levels: status, on, off.`};try{return await e.request(`sessions.patch`,{key:t,fastMode:r===`on`}),{content:`Fast mode ${r===`on`?`enabled`:`disabled`}.`,action:`refresh`}}catch(e){return{content:`Failed to set fast mode: ${String(e)}`}}}async function og(e,t){try{let n=gg(await e.request(`sessions.list`,{}),t);if(!n)return{content:`No active session.`};let r=n.inputTokens??0,i=n.outputTokens??0,a=n.totalTokens??r+i,o=n.contextTokens??0,s=o>0?Math.round(r/o*100):null,c=[`**Session Usage**`,`Input: **${xg(r)}** tokens`,`Output: **${xg(i)}** tokens`,`Total: **${xg(a)}** tokens`];return s!==null&&c.push(`Context: **${s}%** of ${xg(o)}`),n.model&&c.push(`Model: \`${n.model}\``),{content:c.join(`
`)}}catch(e){return{content:`Failed to get usage: ${String(e)}`}}}async function sg(e){try{let t=await e.request(`agents.list`,{}),n=t?.agents??[];if(n.length===0)return{content:`No agents configured.`};let r=[`**Agents** (${n.length})\n`];for(let e of n){let n=e.id===t?.defaultId,i=e.identity?.name||e.name||e.id,a=n?` *(default)*`:``;r.push(`- \`${e.id}\` — ${i}${a}`)}return{content:r.join(`
`)}}catch(e){return{content:`Failed to list agents: ${String(e)}`}}}async function cg(e,t,n){let r=n.trim();if(!r)return{content:"Usage: `/kill <id|all>`"};try{let n=lg((await e.request(`sessions.list`,{}))?.sessions??[],t,r);if(n.length===0)return{content:r.toLowerCase()===`all`?`No active sub-agent sessions found.`:`No matching sub-agent sessions found for \`${r}\`.`};let i=await Promise.allSettled(n.map(t=>e.request(`chat.abort`,{sessionKey:t}))),a=i.filter(e=>e.status===`rejected`),o=i.filter(e=>e.status===`fulfilled`&&e.value?.aborted!==!1).length;if(o===0){if(a.length===0)return{content:r.toLowerCase()===`all`?`No active sub-agent runs to abort.`:`No active runs matched \`${r}\`.`};throw a[0]?.reason??Error(`abort failed`)}return r.toLowerCase()===`all`?{content:o===n.length?`Aborted ${o} sub-agent session${o===1?``:`s`}.`:`Aborted ${o} of ${n.length} sub-agent sessions.`}:{content:o===n.length?`Aborted ${o} matching sub-agent session${o===1?``:`s`} for \`${r}\`.`:`Aborted ${o} of ${n.length} matching sub-agent sessions for \`${r}\`.`}}catch(e){return{content:`Failed to abort: ${String(e)}`}}}function lg(e,t,n){let r=n.trim().toLowerCase();if(!r)return[];let i=new Set,a=t.trim().toLowerCase(),o=C(a)?.agentId??(a===`main`?`main`:void 0),s=dg(e);for(let t of e){let e=t?.key?.trim();if(!e||!w(e))continue;let n=e.toLowerCase(),c=C(n),l=ug(n,a,s,o,c?.agentId);(r===`all`&&l||l&&n===r||l&&((c?.agentId??``)===r||n.endsWith(`:subagent:${r}`)||n===`subagent:${r}`))&&i.add(e)}return[...i]}function ug(e,t,n,r,i){if(!r||i!==r)return!1;let a=pg(t,r),o=new Set,s=fg(n.get(e)?.spawnedBy);for(;s&&!o.has(s);){if(a.has(s))return!0;o.add(s),s=fg(n.get(s)?.spawnedBy)}return w(t)?e.startsWith(`${t}:subagent:`):!1}function dg(e){let t=new Map;for(let n of e){let e=fg(n?.key);e&&t.set(e,n)}return t}function fg(e){return e?.trim().toLowerCase()||void 0}function pg(e,t){let n=new Set([e]);if(t===`main`){let t=`agent:${T}:main`;e===`main`?n.add(t):e===t&&n.add(E)}return n}function mg(e,t){return`${e}\nOptions: ${t}.`}async function hg(e,t){return gg(await e.request(`sessions.list`,{}),t)}function gg(e,t){let n=fg(t),r=C(n??``)?.agentId??(n===`main`?`main`:void 0),i=n?pg(n,r):new Set;return e?.sessions?.find(e=>{let t=fg(e.key);return t?i.has(t):!1})}async function _g(e,t){let[n,r]=await Promise.all([e.request(`sessions.list`,{}),vg(e)]);return{session:gg(n,t),models:r}}async function vg(e,t){try{return(await e.request(`models.list`,{}))?.models??[]}catch(e){if(t?.allowFailure)return[];throw e}}function yg(e,t){return Np(e?.thinkingLevel)||(!e?.modelProvider||!e.model?`off`:Lp({provider:e.modelProvider,model:e.model,catalog:t}))}function bg(e){return e?.fastMode===!0?`on`:`off`}function xg(e){return e>=1e6?`${(e/1e6).toFixed(1).replace(/\.0$/,``)}M`:e>=1e3?`${(e/1e3).toFixed(1).replace(/\.0$/,``)}k`:String(e)}function Sg(e){return typeof e==`string`?e:e instanceof Error&&typeof e.message==`string`?e.message:`unknown error`}function Cg(e){let t=Sg(e.message);switch(Qt(e)){case R.AUTH_TOKEN_MISMATCH:return`gateway token mismatch`;case R.AUTH_UNAUTHORIZED:return`gateway auth failed`;case R.AUTH_RATE_LIMITED:return`too many failed authentication attempts`;case R.PAIRING_REQUIRED:return`gateway pairing required`;case R.CONTROL_UI_DEVICE_IDENTITY_REQUIRED:return`device identity required (use HTTPS/localhost or allow insecure auth explicitly)`;case R.CONTROL_UI_ORIGIN_NOT_ALLOWED:return`origin not allowed (open the Control UI from the gateway host or allow it in gateway.controlUi.allowedOrigins)`;case R.AUTH_TOKEN_MISSING:return`gateway token missing`;default:break}let n=t.trim().toLowerCase();return n===`fetch failed`||n===`failed to fetch`||n===`connect failed`?`gateway connect failed`:t}function wg(e){return e&&typeof e==`object`?Cg(e):Sg(e)}var Tg=/^\s*NO_REPLY\s*$/;function Eg(e){return Tg.test(e)}function Dg(e){if(!e||typeof e!=`object`)return!1;let t=e;if((typeof t.role==`string`?t.role.toLowerCase():``)!==`assistant`)return!1;if(typeof t.text==`string`)return Eg(t.text);let n=hs(e);return typeof n==`string`&&Eg(n)}function Og(e){let t=e;t.toolStreamById instanceof Map&&Array.isArray(t.toolStreamOrder)&&Array.isArray(t.chatToolMessages)&&Array.isArray(t.chatStreamSegments)&&Kh(t)}async function kg(e){if(!(!e.client||!e.connected)){e.chatLoading=!0,e.lastError=null;try{let t=await e.client.request(`chat.history`,{sessionKey:e.sessionKey,limit:200});e.chatMessages=(Array.isArray(t.messages)?t.messages:[]).filter(e=>!Dg(e)),e.chatThinkingLevel=t.thinkingLevel??null,Og(e),e.chatStream=null,e.chatStreamStartedAt=null}catch(t){ln(t)?(e.chatMessages=[],e.chatThinkingLevel=null,e.lastError=un(`existing chat history`)):e.lastError=String(t)}finally{e.chatLoading=!1}}}function Ag(e){let t=/^data:([^;]+);base64,(.+)$/.exec(e);return t?{mimeType:t[1],content:t[2]}:null}function jg(e,t){if(!e||typeof e!=`object`)return null;let n=e,r=n.role;if(typeof r==`string`){if((t.roleCaseSensitive?r:r.toLowerCase())!==`assistant`)return null}else if(t.roleRequirement===`required`)return null;return t.requireContentArray?Array.isArray(n.content)?n:null:!(`content`in n)&&!(t.allowTextField&&`text`in n)?null:n}function Mg(e){return jg(e,{roleRequirement:`required`,roleCaseSensitive:!0,requireContentArray:!0})}function Ng(e){return jg(e,{roleRequirement:`optional`,allowTextField:!0})}async function Pg(e,t,n){if(!e.client||!e.connected)return null;let r=t.trim(),i=n&&n.length>0;if(!r&&!i)return null;let a=Date.now(),o=[];if(r&&o.push({type:`text`,text:r}),i)for(let e of n)o.push({type:`image`,source:{type:`base64`,media_type:e.mimeType,data:e.dataUrl}});e.chatMessages=[...e.chatMessages,{role:`user`,content:o,timestamp:a}],e.chatSending=!0,e.lastError=null;let s=Xt();e.chatRunId=s,e.chatStream=``,e.chatStreamStartedAt=a;let c=i?n.map(e=>{let t=Ag(e.dataUrl);return t?{type:`image`,mimeType:t.mimeType,content:t.content}:null}).filter(e=>e!==null):void 0;try{return await e.client.request(`chat.send`,{sessionKey:e.sessionKey,message:r,deliver:!1,idempotencyKey:s,attachments:c}),s}catch(t){let n=wg(t);return e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,e.lastError=n,e.chatMessages=[...e.chatMessages,{role:`assistant`,content:[{type:`text`,text:`Error: `+n}],timestamp:Date.now()}],null}finally{e.chatSending=!1}}async function Fg(e){if(!e.client||!e.connected)return!1;let t=e.chatRunId;try{return await e.client.request(`chat.abort`,t?{sessionKey:e.sessionKey,runId:t}:{sessionKey:e.sessionKey}),!0}catch(t){return e.lastError=wg(t),!1}}function Ig(e,t){if(!t||t.sessionKey!==e.sessionKey)return null;if(t.runId&&e.chatRunId&&t.runId!==e.chatRunId){if(t.state===`final`){let n=Ng(t.message);return n&&!Dg(n)?(e.chatMessages=[...e.chatMessages,n],null):`final`}return null}if(t.state===`delta`){let n=hs(t.message);if(typeof n==`string`&&!Eg(n)){let t=e.chatStream??``;(!t||n.length>=t.length)&&(e.chatStream=n)}}else if(t.state===`final`){let n=Ng(t.message);n&&!Dg(n)?e.chatMessages=[...e.chatMessages,n]:e.chatStream?.trim()&&!Eg(e.chatStream)&&(e.chatMessages=[...e.chatMessages,{role:`assistant`,content:[{type:`text`,text:e.chatStream}],timestamp:Date.now()}]),e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null}else if(t.state===`aborted`){let n=Mg(t.message);if(n&&!Dg(n))e.chatMessages=[...e.chatMessages,n];else{let t=e.chatStream??``;t.trim()&&!Eg(t)&&(e.chatMessages=[...e.chatMessages,{role:`assistant`,content:[{type:`text`,text:t}],timestamp:Date.now()}])}e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null}else t.state===`error`&&(e.chatStream=null,e.chatRunId=null,e.chatStreamStartedAt=null,e.lastError=t.errorMessage??`chat error`);return t.state}async function Lg(e){try{return(await e.request(`models.list`,{}))?.models??[]}catch{return[]}}function Rg(e){return e.chatSending||!!e.chatRunId}function zg(e){let t=e.trim();if(!t)return!1;let n=t.toLowerCase();return n===`/stop`?!0:n===`stop`||n===`esc`||n===`abort`||n===`wait`||n===`exit`}function Bg(e){let t=e.trim();if(!t)return!1;let n=t.toLowerCase();return n===`/new`||n===`/reset`?!0:n.startsWith(`/new `)||n.startsWith(`/reset `)}async function Vg(e){e.connected&&(e.chatMessage=``,await Fg(e))}function Hg(e,t,n,r,i){let a=t.trim(),o=!!(n&&n.length>0);!a&&!o||(e.chatQueue=[...e.chatQueue,{id:Xt(),text:a,createdAt:Date.now(),attachments:o?n?.map(e=>({...e})):void 0,refreshSessions:r,localCommandArgs:i?.args,localCommandName:i?.name}])}async function Ug(e,t,n){Kh(e),Cr(e);let r=await Pg(e,t,n?.attachments),i=!!r;return!i&&n?.previousDraft!=null&&(e.chatMessage=n.previousDraft),!i&&n?.previousAttachments&&(e.chatAttachments=n.previousAttachments),i&&ah(e,e.sessionKey),i&&n?.restoreDraft&&n.previousDraft?.trim()&&(e.chatMessage=n.previousDraft),i&&n?.restoreAttachments&&n.previousAttachments?.length&&(e.chatAttachments=n.previousAttachments),yr(e,!0),i&&!e.chatRunId&&Wg(e),i&&n?.refreshSessions&&r&&e.refreshSessionsAfterChat.add(r),i}async function Wg(e){if(!e.connected||Rg(e))return;let[t,...n]=e.chatQueue;if(!t)return;e.chatQueue=n;let r=!1;try{t.localCommandName?(await Jg(e,t.localCommandName,t.localCommandArgs??``),r=!0):r=await Ug(e,t.text,{attachments:t.attachments,refreshSessions:t.refreshSessions})}catch(t){e.lastError=String(t)}r?e.chatQueue.length>0&&Wg(e):e.chatQueue=[t,...e.chatQueue]}function Gg(e,t){e.chatQueue=e.chatQueue.filter(e=>e.id!==t)}async function Kg(e,t,n){if(!e.connected)return;let r=e.chatMessage,i=(t??e.chatMessage).trim(),a=e.chatAttachments??[],o=t==null?a:[],s=o.length>0;if(!i&&!s)return;if(zg(i)){await Vg(e);return}let c=hm(i);if(c?.command.executeLocal){if(Rg(e)&&qg(c.command.key)){t??(e.chatMessage=``,e.chatAttachments=[]),Hg(e,i,void 0,Bg(i),{args:c.args,name:c.command.key});return}let a=t==null?r:void 0;t??(e.chatMessage=``,e.chatAttachments=[]),await Jg(e,c.command.key,c.args,{previousDraft:a,restoreDraft:!!(t&&n?.restoreDraft)});return}let l=Bg(i);if(t??(e.chatMessage=``,e.chatAttachments=[]),Rg(e)){Hg(e,i,o,l);return}await Ug(e,i,{previousDraft:t==null?r:void 0,restoreDraft:!!(t&&n?.restoreDraft),attachments:s?o:void 0,previousAttachments:t==null?a:void 0,restoreAttachments:!!(t&&n?.restoreDraft),refreshSessions:l})}function qg(e){return![`stop`,`focus`,`export-session`].includes(e)}async function Jg(e,t,n,r){switch(t){case`stop`:await Vg(e);return;case`new`:await Ug(e,`/new`,{refreshSessions:!0,previousDraft:r?.previousDraft,restoreDraft:r?.restoreDraft});return;case`reset`:await Ug(e,`/reset`,{refreshSessions:!0,previousDraft:r?.previousDraft,restoreDraft:r?.restoreDraft});return;case`clear`:await Yg(e);return;case`focus`:e.onSlashAction?.(`toggle-focus`);return;case`export-session`:e.onSlashAction?.(`export`);return}if(!e.client)return;let i=e.sessionKey,a=await $h(e.client,i,t,n,{chatModelCatalog:e.chatModelCatalog});a.content&&Xg(e,a.content),a.sessionPatch&&`modelOverride`in a.sessionPatch&&(e.chatModelOverrides={...e.chatModelOverrides,[i]:a.sessionPatch.modelOverride??null},e.onSlashAction?.(`refresh-tools-effective`)),a.action===`refresh`&&await Zg(e),yr(e)}async function Yg(e){if(!(!e.client||!e.connected)){try{await e.client.request(`sessions.reset`,{key:e.sessionKey}),e.chatMessages=[],e.chatStream=null,e.chatRunId=null,await kg(e)}catch(t){e.lastError=String(t)}yr(e)}}function Xg(e,t){e.chatMessages=[...e.chatMessages,{role:`system`,content:t,timestamp:Date.now()}]}async function Zg(e,t){await Promise.all([kg(e),la(e,{activeMinutes:0,limit:0,includeGlobal:!0,includeUnknown:!0}),n_(e),Qg(e)]),t?.scheduleScroll!==!1&&yr(e)}async function Qg(e){if(!e.client||!e.connected){e.chatModelsLoading=!1,e.chatModelCatalog=[];return}e.chatModelsLoading=!0;try{e.chatModelCatalog=await Lg(e.client)}finally{e.chatModelsLoading=!1}}var $g=Wg;function e_(e){let t=C(e.sessionKey);return t?.agentId?t.agentId:(e.hello?.snapshot)?.sessionDefaults?.defaultAgentId?.trim()||`main`}function t_(e,t){let n=Ua(e),r=encodeURIComponent(t);return n?`${n}/avatar/${r}?meta=1`:`avatar/${r}?meta=1`}async function n_(e){if(!e.connected){e.chatAvatarUrl=null;return}let t=e_(e);if(!t){e.chatAvatarUrl=null;return}e.chatAvatarUrl=null;let n=t_(e.basePath,t);try{let t=await fetch(n,{method:`GET`});if(!t.ok){e.chatAvatarUrl=null;return}let r=await t.json();e.chatAvatarUrl=(typeof r.avatarUrl==`string`?r.avatarUrl.trim():``)||null}catch{e.chatAvatarUrl=null}}function r_(e){if(!e||e.state!==`final`)return!1;if(!e.message||typeof e.message!=`object`)return!0;let t=e.message,n=typeof t.role==`string`?t.role.toLowerCase():``;return!!(n&&n!==`assistant`)}function i_(e,t){if(typeof e!=`string`)return;let n=e.trim();if(n)return n.length<=t?n:n.slice(0,t)}var a_=50,o_=200;function s_(e){let t=i_(e?.name,a_)??`Assistant`,n=i_(e?.avatar??void 0,o_)??null;return{agentId:typeof e?.agentId==`string`&&e.agentId.trim()?e.agentId.trim():null,name:t,avatar:n}}async function c_(e,t){if(!e.client||!e.connected)return;let n=t?.sessionKey?.trim()||e.sessionKey.trim(),r=n?{sessionKey:n}:{};try{let t=await e.client.request(`agent.identity.get`,r);if(!t)return;let n=s_(t);e.assistantName=n.name,e.assistantAvatar=n.avatar,e.assistantAgentId=n.agentId??null}catch{}}function l_(e){return typeof e==`object`&&!!e}function u_(e){if(!l_(e))return null;let t=typeof e.id==`string`?e.id.trim():``,n=e.request;if(!t||!l_(n))return null;let r=typeof n.command==`string`?n.command.trim():``;if(!r)return null;let i=typeof e.createdAtMs==`number`?e.createdAtMs:0,a=typeof e.expiresAtMs==`number`?e.expiresAtMs:0;return!i||!a?null:{id:t,request:{command:r,cwd:typeof n.cwd==`string`?n.cwd:null,host:typeof n.host==`string`?n.host:null,security:typeof n.security==`string`?n.security:null,ask:typeof n.ask==`string`?n.ask:null,agentId:typeof n.agentId==`string`?n.agentId:null,resolvedPath:typeof n.resolvedPath==`string`?n.resolvedPath:null,sessionKey:typeof n.sessionKey==`string`?n.sessionKey:null},createdAtMs:i,expiresAtMs:a}}function d_(e){if(!l_(e))return null;let t=typeof e.id==`string`?e.id.trim():``;return t?{id:t,decision:typeof e.decision==`string`?e.decision:null,resolvedBy:typeof e.resolvedBy==`string`?e.resolvedBy:null,ts:typeof e.ts==`number`?e.ts:null}:null}function f_(e){let t=Date.now();return e.filter(e=>e.expiresAtMs>t)}function p_(e,t){let n=f_(e).filter(e=>e.id!==t.id);return n.push(t),n}function m_(e,t){return f_(e).filter(e=>e.id!==t)}var h_={ok:!1,ts:0,durationMs:0,heartbeatSeconds:0,defaultAgentId:``,agents:[],sessions:{path:``,count:0,recent:[]}};async function g_(e){try{return await e.request(`health`,{})??h_}catch{return h_}}async function __(e){if(!(!e.client||!e.connected)&&!e.healthLoading){e.healthLoading=!0,e.healthError=null;try{e.healthResult=await g_(e.client)}catch(t){e.healthError=String(t)}finally{e.healthLoading=!1}}}function v_(e){return/^(?:typeerror:\s*)?(?:fetch failed|failed to fetch)$/i.test(e.trim())}function y_(e){let t=e.serverVersion?.trim();if(!t)return;let n=e.pageUrl??(typeof window>`u`?void 0:window.location.href);if(n)try{let r=new URL(n),i=new URL(e.gatewayUrl,r);return!new Set([`ws:`,`wss:`,`http:`,`https:`]).has(i.protocol)||i.host!==r.host?void 0:t}catch{return}}function b_(e,t){let n=(e??``).trim(),r=t.mainSessionKey?.trim();if(!r)return n;if(!n)return r;let i=t.mainKey?.trim()||`main`,a=t.defaultAgentId?.trim();return n===`main`||n===i||a&&(n===`agent:${a}:main`||n===`agent:${a}:${i}`)?r:n}function x_(e,t){if(!t?.mainSessionKey)return;let n=b_(e.sessionKey,t),r=b_(e.settings.sessionKey,t),i=b_(e.settings.lastActiveSessionKey,t),a=n||r||e.sessionKey,o={...e.settings,sessionKey:r||a,lastActiveSessionKey:i||a},s=o.sessionKey!==e.settings.sessionKey||o.lastActiveSessionKey!==e.settings.lastActiveSessionKey;a!==e.sessionKey&&(e.sessionKey=a),s&&ih(e,o)}function S_(e){let t=e;t.pendingShutdownMessage=null,e.lastError=null,e.lastErrorCode=null,e.hello=null,e.connected=!1,e.execApprovalQueue=[],e.execApprovalError=null;let n=e.client,r=y_({gatewayUrl:e.settings.gatewayUrl,serverVersion:e.serverVersion}),i=new cn({url:e.settings.gatewayUrl,token:e.settings.token.trim()?e.settings.token:void 0,password:e.password.trim()?e.password:void 0,clientName:`openclaw-control-ui`,clientVersion:r,mode:`webchat`,instanceId:e.clientInstanceId,onHello:n=>{e.client===i&&(t.pendingShutdownMessage=null,e.connected=!0,e.lastError=null,e.lastErrorCode=null,e.hello=n,D_(e,n),e.chatRunId=null,e.chatStream=null,e.chatStreamStartedAt=null,Kh(e),ca(e),c_(e),si(e),__(e),Hr(e,{quiet:!0}),Yi(e,{quiet:!0}),uh(e))},onClose:({code:n,reason:r,error:a})=>{if(e.client===i)if(e.connected=!1,e.lastErrorCode=Qt(a)??(typeof a?.code==`string`?a.code:null),n!==1012){if(a?.message){e.lastError=e.lastErrorCode&&v_(a.message)?wg({message:a.message,details:a.details,code:a.code}):a.message;return}e.lastError=t.pendingShutdownMessage??`disconnected (${n}): ${r||`no reason`}`}else e.lastError=t.pendingShutdownMessage??null,e.lastErrorCode=null},onEvent:t=>{e.client===i&&C_(e,t)},onGap:({expected:t,received:n})=>{e.client===i&&(e.lastError=`event gap detected (expected seq ${t}, got ${n}); refresh recommended`,e.lastErrorCode=null)}});e.client=i,n?.stop(),i.start()}function C_(e,t){try{E_(e,t)}catch(e){console.error(`[gateway] handleGatewayEvent error:`,t.event,e)}}function w_(e,t,n){if(n!==`final`&&n!==`error`&&n!==`aborted`)return!1;let r=e,i=r.toolStreamOrder.length>0;Kh(r),$g(e);let a=t?.runId;return a&&e.refreshSessionsAfterChat.has(a)&&(e.refreshSessionsAfterChat.delete(a),n===`final`&&la(e,{activeMinutes:120})),i&&n===`final`?(kg(e),!0):!1}function T_(e,t){t?.sessionKey&&ah(e,t.sessionKey);let n=Ig(e,t),r=w_(e,t,n);n===`final`&&!r&&r_(t)&&kg(e)}function E_(e,t){if(e.eventLogBuffer=[{ts:Date.now(),event:t.event,payload:t.payload},...e.eventLogBuffer].slice(0,250),(e.tab===`debug`||e.tab===`overview`)&&(e.eventLog=e.eventLogBuffer),t.event===`agent`){if(e.onboarding)return;Qh(e,t.payload);return}if(t.event===`chat`){T_(e,t.payload);return}if(t.event===`presence`){let n=t.payload;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence,e.presenceError=null,e.presenceStatus=null);return}if(t.event===`shutdown`){let n=t.payload,r=n&&typeof n.reason==`string`&&n.reason.trim()?n.reason.trim():`gateway stopping`,i=typeof n?.restartExpectedMs==`number`?`Restarting: ${r}`:`Disconnected: ${r}`;e.pendingShutdownMessage=i,e.lastError=i,e.lastErrorCode=null;return}if(t.event===`sessions.changed`){la(e);return}if(t.event===`cron`&&e.tab===`cron`&&jh(e),(t.event===`device.pair.requested`||t.event===`device.pair.resolved`)&&Yi(e,{quiet:!0}),t.event===`exec.approval.requested`){let n=u_(t.payload);if(n){e.execApprovalQueue=p_(e.execApprovalQueue,n),e.execApprovalError=null;let t=Math.max(0,n.expiresAtMs-Date.now()+500);window.setTimeout(()=>{e.execApprovalQueue=m_(e.execApprovalQueue,n.id)},t)}return}if(t.event===`exec.approval.resolved`){let n=d_(t.payload);n&&(e.execApprovalQueue=m_(e.execApprovalQueue,n.id));return}t.event===`update.available`&&(e.updateAvailable=t.payload?.updateAvailable??null)}function D_(e,t){let n=t.snapshot;n?.presence&&Array.isArray(n.presence)&&(e.presenceEntries=n.presence),n?.health&&(e.debugHealth=n.health,e.healthResult=n.health),n?.sessionDefaults&&x_(e,n.sessionDefaults),e.updateAvailable=n?.updateAvailable??null}var O_=`/__openclaw/control-ui-config.json`;async function k_(e){if(typeof window>`u`||typeof fetch!=`function`)return;let t=Ua(e.basePath??``),n=t?`${t}${O_}`:O_;try{let t=await fetch(n,{method:`GET`,headers:{Accept:`application/json`},credentials:`same-origin`});if(!t.ok)return;let r=await t.json(),i=s_({agentId:r.assistantAgentId??null,name:r.assistantName,avatar:r.assistantAvatar??null});e.assistantName=i.name,e.assistantAvatar=i.avatar,e.assistantAgentId=i.agentId??null,e.serverVersion=r.serverVersion??null}catch{}}function A_(e){let t=++e.connectGeneration;e.basePath=dh(),oh(e);let n=k_(e);yh(e,!0),fh(e),ph(e),window.addEventListener(`popstate`,e.popStateHandler),n.finally(()=>{e.connectGeneration===t&&S_(e)}),Ur(e),e.tab===`logs`&&Gr(e),e.tab===`debug`&&qr(e)}function j_(e){Tr(e)}function M_(e){e.connectGeneration+=1,window.removeEventListener(`popstate`,e.popStateHandler),Wr(e),Kr(e),Jr(e),e.client?.stop(),e.client=null,e.connected=!1,mh(e),e.topbarObserver?.disconnect(),e.topbarObserver=null}function N_(e,t){if(!(e.tab===`chat`&&e.chatManualRefreshInFlight)){if(e.tab===`chat`&&(t.has(`chatMessages`)||t.has(`chatToolMessages`)||t.has(`chatStream`)||t.has(`chatLoading`)||t.has(`tab`))){let n=t.has(`tab`),r=t.has(`chatLoading`)&&t.get(`chatLoading`)===!0&&!e.chatLoading,i=t.get(`chatStream`),a=t.has(`chatStream`)&&i==null&&typeof e.chatStream==`string`;yr(e,n||r||a||!e.chatHasAutoScrolled)}e.tab===`logs`&&(t.has(`logsEntries`)||t.has(`logsAutoFollow`)||t.has(`tab`))&&e.logsAutoFollow&&e.logsAtBottom&&br(e,t.has(`tab`)||t.has(`logsAutoFollow`))}}var P_=new Set([`agent`,`channel`,`chat`,`provider`,`model`,`tool`,`label`,`key`,`session`,`id`,`has`,`mintokens`,`maxtokens`,`mincost`,`maxcost`,`minmessages`,`maxmessages`]),F_=e=>e.trim().toLowerCase(),I_=e=>{let t=e.replace(/[.+^${}()|[\]\\]/g,`\\$&`).replace(/\*/g,`.*`).replace(/\?/g,`.`);return RegExp(`^${t}$`,`i`)},L_=e=>{let t=e.trim().toLowerCase();if(!t)return null;t.startsWith(`$`)&&(t=t.slice(1));let n=1;t.endsWith(`k`)?(n=1e3,t=t.slice(0,-1)):t.endsWith(`m`)&&(n=1e6,t=t.slice(0,-1));let r=Number(t);return Number.isFinite(r)?r*n:null},R_=e=>(e.match(/"[^"]+"|\S+/g)??[]).map(e=>{let t=e.replace(/^"|"$/g,``),n=t.indexOf(`:`);return n>0?{key:t.slice(0,n),value:t.slice(n+1),raw:t}:{value:t,raw:t}}),z_=e=>[e.label,e.key,e.sessionId].filter(e=>!!e).map(e=>e.toLowerCase()),B_=e=>{let t=new Set;e.modelProvider&&t.add(e.modelProvider.toLowerCase()),e.providerOverride&&t.add(e.providerOverride.toLowerCase()),e.origin?.provider&&t.add(e.origin.provider.toLowerCase());for(let n of e.usage?.modelUsage??[])n.provider&&t.add(n.provider.toLowerCase());return Array.from(t)},V_=e=>{let t=new Set;e.model&&t.add(e.model.toLowerCase());for(let n of e.usage?.modelUsage??[])n.model&&t.add(n.model.toLowerCase());return Array.from(t)},H_=e=>(e.usage?.toolUsage?.tools??[]).map(e=>e.name.toLowerCase()),U_=(e,t)=>{let n=F_(t.value??``);if(!n)return!0;if(!t.key)return z_(e).some(e=>e.includes(n));switch(F_(t.key)){case`agent`:return e.agentId?.toLowerCase().includes(n)??!1;case`channel`:return e.channel?.toLowerCase().includes(n)??!1;case`chat`:return e.chatType?.toLowerCase().includes(n)??!1;case`provider`:return B_(e).some(e=>e.includes(n));case`model`:return V_(e).some(e=>e.includes(n));case`tool`:return H_(e).some(e=>e.includes(n));case`label`:return e.label?.toLowerCase().includes(n)??!1;case`key`:case`session`:case`id`:if(n.includes(`*`)||n.includes(`?`)){let t=I_(n);return t.test(e.key)||(e.sessionId?t.test(e.sessionId):!1)}return e.key.toLowerCase().includes(n)||(e.sessionId?.toLowerCase().includes(n)??!1);case`has`:switch(n){case`tools`:return(e.usage?.toolUsage?.totalCalls??0)>0;case`errors`:return(e.usage?.messageCounts?.errors??0)>0;case`context`:return!!e.contextWeight;case`usage`:return!!e.usage;case`model`:return V_(e).length>0;case`provider`:return B_(e).length>0;default:return!0}case`mintokens`:{let t=L_(n);return t===null?!0:(e.usage?.totalTokens??0)>=t}case`maxtokens`:{let t=L_(n);return t===null?!0:(e.usage?.totalTokens??0)<=t}case`mincost`:{let t=L_(n);return t===null?!0:(e.usage?.totalCost??0)>=t}case`maxcost`:{let t=L_(n);return t===null?!0:(e.usage?.totalCost??0)<=t}case`minmessages`:{let t=L_(n);return t===null?!0:(e.usage?.messageCounts?.total??0)>=t}case`maxmessages`:{let t=L_(n);return t===null?!0:(e.usage?.messageCounts?.total??0)<=t}default:return!0}},W_=(e,t)=>{let n=R_(t);if(n.length===0)return{sessions:e,warnings:[]};let r=[];for(let e of n){if(!e.key)continue;let t=F_(e.key);if(!P_.has(t)){r.push(`Unknown filter: ${e.key}`);continue}if(e.value===``&&r.push(`Missing value for ${e.key}`),t===`has`){let t=new Set([`tools`,`errors`,`context`,`usage`,`model`,`provider`]);e.value&&!t.has(F_(e.value))&&r.push(`Unknown has:${e.value}`)}[`mintokens`,`maxtokens`,`mincost`,`maxcost`,`minmessages`,`maxmessages`].includes(t)&&e.value&&L_(e.value)===null&&r.push(`Invalid number for ${e.key}`)}return{sessions:e.filter(e=>n.every(t=>U_(e,t))),warnings:r}};function G_(e){let t=e.split(`
`),n=new Map,r=[];for(let e of t){let t=/^\[Tool:\s*([^\]]+)\]/.exec(e.trim());if(t){let e=t[1];n.set(e,(n.get(e)??0)+1);continue}e.trim().startsWith(`[Tool Result]`)||r.push(e)}let i=Array.from(n.entries()).toSorted((e,t)=>t[1]-e[1]),a=i.reduce((e,[,t])=>e+t,0);return{tools:i,summary:i.length>0?`Tools: ${i.map(([e,t])=>`${e}×${t}`).join(`, `)} (${a} calls)`:``,cleanContent:r.join(`
`).trim()}}function K_(e,t){!t||t.count<=0||(e.count+=t.count,e.sum+=t.avgMs*t.count,e.min=Math.min(e.min,t.minMs),e.max=Math.max(e.max,t.maxMs),e.p95Max=Math.max(e.p95Max,t.p95Ms))}function q_(e,t){for(let n of t??[]){let t=e.get(n.date)??{date:n.date,count:0,sum:0,min:1/0,max:0,p95Max:0};t.count+=n.count,t.sum+=n.avgMs*n.count,t.min=Math.min(t.min,n.minMs),t.max=Math.max(t.max,n.maxMs),t.p95Max=Math.max(t.p95Max,n.p95Ms),e.set(n.date,t)}}function J_(e){return{byChannel:Array.from(e.byChannelMap.entries()).map(([e,t])=>({channel:e,totals:t})).toSorted((e,t)=>t.totals.totalCost-e.totals.totalCost),latency:e.latencyTotals.count>0?{count:e.latencyTotals.count,avgMs:e.latencyTotals.sum/e.latencyTotals.count,minMs:e.latencyTotals.min===1/0?0:e.latencyTotals.min,maxMs:e.latencyTotals.max,p95Ms:e.latencyTotals.p95Max}:void 0,dailyLatency:Array.from(e.dailyLatencyMap.values()).map(e=>({date:e.date,count:e.count,avgMs:e.count?e.sum/e.count:0,minMs:e.min===1/0?0:e.min,maxMs:e.max,p95Ms:e.p95Max})).toSorted((e,t)=>e.date.localeCompare(t.date)),modelDaily:Array.from(e.modelDailyMap.values()).toSorted((e,t)=>e.date.localeCompare(t.date)||t.cost-e.cost),daily:Array.from(e.dailyMap.values()).toSorted((e,t)=>e.date.localeCompare(t.date))}}var Y_=4;function X_(e){return Math.round(e/Y_)}function Z(e){return e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}K`:String(e)}function Z_(e){let t=new Date;return t.setHours(e,0,0,0),t.toLocaleTimeString(void 0,{hour:`numeric`})}function Q_(e,t){let n=Array.from({length:24},()=>0),r=Array.from({length:24},()=>0);for(let i of e){let e=i.usage;if(!e?.messageCounts||e.messageCounts.total===0)continue;let a=e.firstActivity??i.updatedAt,o=e.lastActivity??i.updatedAt;if(!a||!o)continue;let s=Math.min(a,o),c=Math.max(a,o),l=Math.max(c-s,1)/6e4,u=s;for(;u<c;){let i=new Date(u),a=$_(i,t),o=tv(i,t),s=Math.min(o.getTime(),c),d=Math.max((s-u)/6e4,0)/l;n[a]+=e.messageCounts.errors*d,r[a]+=e.messageCounts.total*d,u=s+1}}return r.map((e,t)=>{let r=n[t];return{hour:t,rate:e>0?r/e:0,errors:r,msgs:e}}).filter(e=>e.msgs>0&&e.errors>0).toSorted((e,t)=>t.rate-e.rate).slice(0,5).map(e=>({label:Z_(e.hour),value:`${(e.rate*100).toFixed(2)}%`,sub:`${Math.round(e.errors)} ${L(`usage.overview.errors`).toLowerCase()} · ${Math.round(e.msgs)} ${L(`usage.overview.messagesAbbrev`)}`}))}function $_(e,t){return t===`utc`?e.getUTCHours():e.getHours()}function ev(e,t){return t===`utc`?e.getUTCDay():e.getDay()}function tv(e,t){let n=new Date(e);return t===`utc`?n.setUTCMinutes(59,59,999):n.setMinutes(59,59,999),n}function nv(e,t){let n=Array.from({length:24},()=>0),r=Array.from({length:7},()=>0),i=0,a=!1;for(let o of e){let e=o.usage;if(!e||!e.totalTokens||e.totalTokens<=0)continue;i+=e.totalTokens;let s=e.firstActivity??o.updatedAt,c=e.lastActivity??o.updatedAt;if(!s||!c)continue;a=!0;let l=Math.min(s,c),u=Math.max(s,c),d=Math.max(u-l,1)/6e4,f=l;for(;f<u;){let i=new Date(f),a=$_(i,t),o=ev(i,t),s=tv(i,t),c=Math.min(s.getTime(),u),l=Math.max((c-f)/6e4,0)/d;n[a]+=e.totalTokens*l,r[o]+=e.totalTokens*l,f=c+1}}let o=[L(`usage.mosaic.sun`),L(`usage.mosaic.mon`),L(`usage.mosaic.tue`),L(`usage.mosaic.wed`),L(`usage.mosaic.thu`),L(`usage.mosaic.fri`),L(`usage.mosaic.sat`)].map((e,t)=>({label:e,tokens:r[t]}));return{hasData:a,totalTokens:i,hourTotals:n,weekdayTotals:o}}function rv(e,t,r,i){let a=nv(e,t);if(!a.hasData)return n`
      <div class="card usage-mosaic">
        <div class="usage-mosaic-header">
          <div>
            <div class="usage-mosaic-title">${L(`usage.mosaic.title`)}</div>
            <div class="usage-mosaic-sub">${L(`usage.mosaic.subtitleEmpty`)}</div>
          </div>
          <div class="usage-mosaic-total">${Z(0)} ${L(`usage.metrics.tokens`).toLowerCase()}</div>
        </div>
        <div class="usage-empty-block usage-empty-block--compact">
          ${L(`usage.mosaic.noTimelineData`)}
        </div>
      </div>
    `;let o=Math.max(...a.hourTotals,1),s=Math.max(...a.weekdayTotals.map(e=>e.tokens),1);return n`
    <div class="card usage-mosaic">
      <div class="usage-mosaic-header">
        <div>
          <div class="usage-mosaic-title">${L(`usage.mosaic.title`)}</div>
          <div class="usage-mosaic-sub">
            ${L(`usage.mosaic.subtitle`,{zone:L(t===`utc`?`usage.filters.timeZoneUtc`:`usage.filters.timeZoneLocal`)})}
          </div>
        </div>
        <div class="usage-mosaic-total">
          ${Z(a.totalTokens)} ${L(`usage.metrics.tokens`).toLowerCase()}
        </div>
      </div>
      <div class="usage-mosaic-grid">
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">${L(`usage.mosaic.dayOfWeek`)}</div>
          <div class="usage-daypart-grid">
            ${a.weekdayTotals.map(e=>{let t=Math.min(e.tokens/s,1);return n`
                <div class="usage-daypart-cell" style="background: ${e.tokens>0?`color-mix(in srgb, var(--accent) ${(12+t*60).toFixed(1)}%, transparent)`:`transparent`};">
                  <div class="usage-daypart-label">${e.label}</div>
                  <div class="usage-daypart-value">${Z(e.tokens)}</div>
                </div>
              `})}
          </div>
        </div>
        <div class="usage-mosaic-section">
          <div class="usage-mosaic-section-title">
            <span>${L(`usage.filters.hours`)}</span>
            <span class="usage-mosaic-sub">0 → 23</span>
          </div>
          <div class="usage-hour-grid">
            ${a.hourTotals.map((e,t)=>{let a=Math.min(e/o,1),s=e>0?`color-mix(in srgb, var(--accent) ${(8+a*70).toFixed(1)}%, transparent)`:`transparent`,c=`${t}:00 · ${Z(e)} ${L(`usage.metrics.tokens`).toLowerCase()}`,l=a>.7?`color-mix(in srgb, var(--accent) 60%, transparent)`:`color-mix(in srgb, var(--accent) 24%, transparent)`;return n`
                <div
                  class="usage-hour-cell ${r.includes(t)?`selected`:``}"
                  style="background: ${s}; border-color: ${l};"
                  title="${c}"
                  @click=${e=>i(t,e.shiftKey)}
                ></div>
              `})}
          </div>
          <div class="usage-hour-labels">
            <span>${L(`usage.mosaic.midnight`)}</span>
            <span>${L(`usage.mosaic.fourAm`)}</span>
            <span>${L(`usage.mosaic.eightAm`)}</span>
            <span>${L(`usage.mosaic.noon`)}</span>
            <span>${L(`usage.mosaic.fourPm`)}</span>
            <span>${L(`usage.mosaic.eightPm`)}</span>
          </div>
          <div class="usage-hour-legend">
            <span></span>
            ${L(`usage.mosaic.legend`)}
          </div>
        </div>
      </div>
    </div>
  `}function Q(e,t=2){return`$${e.toFixed(t)}`}function iv(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function av(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e);if(!t)return null;let[,n,r,i]=t,a=new Date(Date.UTC(Number(n),Number(r)-1,Number(i)));return Number.isNaN(a.valueOf())?null:a}function ov(e){let t=av(e);return t?t.toLocaleDateString(void 0,{month:`short`,day:`numeric`}):e}function sv(e){let t=av(e);return t?t.toLocaleDateString(void 0,{month:`long`,day:`numeric`,year:`numeric`}):e}var cv=()=>({input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}),lv=(e,t)=>{e.input+=t.input??0,e.output+=t.output??0,e.cacheRead+=t.cacheRead??0,e.cacheWrite+=t.cacheWrite??0,e.totalTokens+=t.totalTokens??0,e.totalCost+=t.totalCost??0,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0},uv=(e,t)=>{if(e.length===0)return t??{messages:{total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},tools:{totalCalls:0,uniqueTools:0,tools:[]},byModel:[],byProvider:[],byAgent:[],byChannel:[],daily:[]};let n={total:0,user:0,assistant:0,toolCalls:0,toolResults:0,errors:0},r=new Map,i=new Map,a=new Map,o=new Map,s=new Map,c=new Map,l=new Map,u=new Map,d={count:0,sum:0,min:1/0,max:0,p95Max:0};for(let t of e){let e=t.usage;if(e){if(e.messageCounts&&(n.total+=e.messageCounts.total,n.user+=e.messageCounts.user,n.assistant+=e.messageCounts.assistant,n.toolCalls+=e.messageCounts.toolCalls,n.toolResults+=e.messageCounts.toolResults,n.errors+=e.messageCounts.errors),e.toolUsage)for(let t of e.toolUsage.tools)r.set(t.name,(r.get(t.name)??0)+t.count);if(e.modelUsage)for(let t of e.modelUsage){let e=`${t.provider??`unknown`}::${t.model??`unknown`}`,n=i.get(e)??{provider:t.provider,model:t.model,count:0,totals:cv()};n.count+=t.count,lv(n.totals,t.totals),i.set(e,n);let r=t.provider??`unknown`,o=a.get(r)??{provider:t.provider,model:void 0,count:0,totals:cv()};o.count+=t.count,lv(o.totals,t.totals),a.set(r,o)}if(K_(d,e.latency),t.agentId){let n=o.get(t.agentId)??cv();lv(n,e),o.set(t.agentId,n)}if(t.channel){let n=s.get(t.channel)??cv();lv(n,e),s.set(t.channel,n)}for(let t of e.dailyBreakdown??[]){let e=c.get(t.date)??{date:t.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};e.tokens+=t.tokens,e.cost+=t.cost,c.set(t.date,e)}for(let t of e.dailyMessageCounts??[]){let e=c.get(t.date)??{date:t.date,tokens:0,cost:0,messages:0,toolCalls:0,errors:0};e.messages+=t.total,e.toolCalls+=t.toolCalls,e.errors+=t.errors,c.set(t.date,e)}q_(l,e.dailyLatency);for(let t of e.dailyModelUsage??[]){let e=`${t.date}::${t.provider??`unknown`}::${t.model??`unknown`}`,n=u.get(e)??{date:t.date,provider:t.provider,model:t.model,tokens:0,cost:0,count:0};n.tokens+=t.tokens,n.cost+=t.cost,n.count+=t.count,u.set(e,n)}}}let f=J_({byChannelMap:s,latencyTotals:d,dailyLatencyMap:l,modelDailyMap:u,dailyMap:c});return{messages:n,tools:{totalCalls:Array.from(r.values()).reduce((e,t)=>e+t,0),uniqueTools:r.size,tools:Array.from(r.entries()).map(([e,t])=>({name:e,count:t})).toSorted((e,t)=>t.count-e.count)},byModel:Array.from(i.values()).toSorted((e,t)=>t.totals.totalCost-e.totals.totalCost),byProvider:Array.from(a.values()).toSorted((e,t)=>t.totals.totalCost-e.totals.totalCost),byAgent:Array.from(o.entries()).map(([e,t])=>({agentId:e,totals:t})).toSorted((e,t)=>t.totals.totalCost-e.totals.totalCost),...f}},dv=(e,t,n)=>{let r=0,i=0;for(let t of e){let e=t.usage?.durationMs??0;e>0&&(r+=e,i+=1)}let a=i?r/i:0,o=t&&r>0?t.totalTokens/(r/6e4):void 0,s=t&&r>0?t.totalCost/(r/6e4):void 0,c=n.messages.total?n.messages.errors/n.messages.total:0,l=n.daily.filter(e=>e.messages>0&&e.errors>0).map(e=>({date:e.date,errors:e.errors,messages:e.messages,rate:e.errors/e.messages})).toSorted((e,t)=>t.rate-e.rate||t.errors-e.errors)[0];return{durationSumMs:r,durationCount:i,avgDurationMs:a,throughputTokensPerMin:o,throughputCostPerMin:s,errorRate:c,peakErrorDay:l}};function fv(e,t,n=`text/plain`){let r=new Blob([t],{type:`${n};charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=e,a.click(),URL.revokeObjectURL(i)}function pv(e){return/[",\n]/.test(e)?`"${e.replaceAll(`"`,`""`)}"`:e}function mv(e){return e.map(e=>e==null?``:pv(String(e))).join(`,`)}var hv=e=>{let t=[mv([`key`,`label`,`agentId`,`channel`,`provider`,`model`,`updatedAt`,`durationMs`,`messages`,`errors`,`toolCalls`,`inputTokens`,`outputTokens`,`cacheReadTokens`,`cacheWriteTokens`,`totalTokens`,`totalCost`])];for(let n of e){let e=n.usage;t.push(mv([n.key,n.label??``,n.agentId??``,n.channel??``,n.modelProvider??n.providerOverride??``,n.model??n.modelOverride??``,n.updatedAt?new Date(n.updatedAt).toISOString():``,e?.durationMs??``,e?.messageCounts?.total??``,e?.messageCounts?.errors??``,e?.messageCounts?.toolCalls??``,e?.input??``,e?.output??``,e?.cacheRead??``,e?.cacheWrite??``,e?.totalTokens??``,e?.totalCost??``]))}return t.join(`
`)},gv=e=>{let t=[mv([`date`,`inputTokens`,`outputTokens`,`cacheReadTokens`,`cacheWriteTokens`,`totalTokens`,`inputCost`,`outputCost`,`cacheReadCost`,`cacheWriteCost`,`totalCost`])];for(let n of e)t.push(mv([n.date,n.input,n.output,n.cacheRead,n.cacheWrite,n.totalTokens,n.inputCost??``,n.outputCost??``,n.cacheReadCost??``,n.cacheWriteCost??``,n.totalCost]));return t.join(`
`)},_v=(e,t,n)=>{let r=e.trim();if(!r)return[];let i=r.length?r.split(/\s+/):[],a=i.length?i[i.length-1]:``,[o,s]=a.includes(`:`)?[a.slice(0,a.indexOf(`:`)),a.slice(a.indexOf(`:`)+1)]:[``,``],c=o.toLowerCase(),l=s.toLowerCase(),u=e=>{let t=new Set;for(let n of e)n&&t.add(n);return Array.from(t)},d=u(t.map(e=>e.agentId)).slice(0,6),f=u(t.map(e=>e.channel)).slice(0,6),p=u([...t.map(e=>e.modelProvider),...t.map(e=>e.providerOverride),...n?.byProvider.map(e=>e.provider)??[]]).slice(0,6),m=u([...t.map(e=>e.model),...n?.byModel.map(e=>e.model)??[]]).slice(0,6),h=u(n?.tools.tools.map(e=>e.name)??[]).slice(0,6);if(!c)return[{label:`agent:`,value:`agent:`},{label:`channel:`,value:`channel:`},{label:`provider:`,value:`provider:`},{label:`model:`,value:`model:`},{label:`tool:`,value:`tool:`},{label:`has:errors`,value:`has:errors`},{label:`has:tools`,value:`has:tools`},{label:`minTokens:`,value:`minTokens:`},{label:`maxCost:`,value:`maxCost:`}];let g=[],_=(e,t)=>{for(let n of t)(!l||n.toLowerCase().includes(l))&&g.push({label:`${e}:${n}`,value:`${e}:${n}`})};switch(c){case`agent`:_(`agent`,d);break;case`channel`:_(`channel`,f);break;case`provider`:_(`provider`,p);break;case`model`:_(`model`,m);break;case`tool`:_(`tool`,h);break;case`has`:[`errors`,`tools`,`context`,`usage`,`model`,`provider`].forEach(e=>{(!l||e.includes(l))&&g.push({label:`has:${e}`,value:`has:${e}`})});break;default:break}return g},vv=(e,t)=>{let n=e.trim();if(!n)return`${t} `;let r=n.split(/\s+/);return r[r.length-1]=t,`${r.join(` `)} `},yv=e=>e.trim().toLowerCase(),bv=(e,t)=>{let n=e.trim();if(!n)return`${t} `;let r=n.split(/\s+/),i=r[r.length-1]??``,a=t.includes(`:`)?t.split(`:`)[0]:null,o=i.includes(`:`)?i.split(`:`)[0]:null;return i.endsWith(`:`)&&a&&o===a?(r[r.length-1]=t,`${r.join(` `)} `):r.includes(t)?`${r.join(` `)} `:`${r.join(` `)} ${t} `},xv=(e,t)=>{let n=e.trim().split(/\s+/).filter(Boolean).filter(e=>e!==t);return n.length?`${n.join(` `)} `:``},Sv=(e,t,n)=>{let r=yv(t),i=[...R_(e).filter(e=>yv(e.key??``)!==r).map(e=>e.raw),...n.map(e=>`${t}:${e}`)];return i.length?`${i.join(` `)} `:``};function Cv(e,t){return t===0?0:e/t*100}function wv(e){let t=e.totalCost||0;return{input:{tokens:e.input,cost:e.inputCost||0,pct:Cv(e.inputCost||0,t)},output:{tokens:e.output,cost:e.outputCost||0,pct:Cv(e.outputCost||0,t)},cacheRead:{tokens:e.cacheRead,cost:e.cacheReadCost||0,pct:Cv(e.cacheReadCost||0,t)},cacheWrite:{tokens:e.cacheWrite,cost:e.cacheWriteCost||0,pct:Cv(e.cacheWriteCost||0,t)},totalCost:t}}function Tv(e,t,r,a,o,s,c,l){if(!(e.length>0||t.length>0||r.length>0))return i;let u=r.length===1?a.find(e=>e.key===r[0]):null,d=u?(u.label||u.key).slice(0,20)+((u.label||u.key).length>20?`…`:``):r.length===1?r[0].slice(0,8)+`…`:L(`usage.filters.sessionsCount`,{count:String(r.length)}),f=u?u.label||u.key:r.length===1?r[0]:r.join(`, `),p=e.length===1?e[0]:L(`usage.filters.daysCount`,{count:String(e.length)}),m=t.length===1?`${t[0]}:00`:L(`usage.filters.hoursCount`,{count:String(t.length)});return n`
    <div class="active-filters">
      ${e.length>0?n`
            <div class="filter-chip">
              <span class="filter-chip-label">${L(`usage.filters.days`)}: ${p}</span>
              <button
                class="filter-chip-remove"
                @click=${o}
                title=${L(`usage.filters.remove`)}
                aria-label="Remove days filter"
              >
                ×
              </button>
            </div>
          `:i}
      ${t.length>0?n`
            <div class="filter-chip">
              <span class="filter-chip-label">${L(`usage.filters.hours`)}: ${m}</span>
              <button
                class="filter-chip-remove"
                @click=${s}
                title=${L(`usage.filters.remove`)}
                aria-label="Remove hours filter"
              >
                ×
              </button>
            </div>
          `:i}
      ${r.length>0?n`
            <div class="filter-chip" title="${f}">
              <span class="filter-chip-label">${L(`usage.filters.session`)}: ${d}</span>
              <button
                class="filter-chip-remove"
                @click=${c}
                title=${L(`usage.filters.remove`)}
                aria-label="Remove session filter"
              >
                ×
              </button>
            </div>
          `:i}
      ${(e.length>0||t.length>0)&&r.length>0?n`
            <button class="btn btn--sm" @click=${l}>
              ${L(`usage.filters.clearAll`)}
            </button>
          `:i}
    </div>
  `}function Ev(e,t,r,a,o,s){if(!e.length)return n`
      <div class="daily-chart-compact">
        <div class="card-title usage-section-title">${L(`usage.daily.title`)}</div>
        <div class="usage-empty-block">${L(`usage.empty.noData`)}</div>
      </div>
    `;let c=r===`tokens`,l=e.map(e=>c?e.totalTokens:e.totalCost),u=Math.max(...l,c?1:1e-4),d=l.filter(e=>e>0),f=u/(d.length>0?Math.min(...d):u),p=l.map(e=>{if(e<=0)return 0;let t=f>50?Math.sqrt(e/u):e/u;return Math.max(6,t*200)}),m=e.length>30?12:e.length>20?18:e.length>14?24:32,h=e.length<=14;return n`
    <div class="daily-chart-compact">
      <div class="daily-chart-header">
        <div class="chart-toggle small sessions-toggle">
          <button
            class="btn btn--sm toggle-btn ${a===`total`?`active`:``}"
            @click=${()=>o(`total`)}
          >
            ${L(`usage.daily.total`)}
          </button>
          <button
            class="btn btn--sm toggle-btn ${a===`by-type`?`active`:``}"
            @click=${()=>o(`by-type`)}
          >
            ${L(`usage.daily.byType`)}
          </button>
        </div>
        <div class="card-title">
          ${L(c?`usage.daily.tokensTitle`:`usage.daily.costTitle`)}
        </div>
      </div>
      <div class="daily-chart">
        <div class="daily-chart-bars" style="--bar-max-width: ${m}px">
          ${e.map((r,o)=>{let l=p[o],u=t.includes(r.date),d=ov(r.date),f=e.length>20?String(parseInt(r.date.slice(8),10)):d,m=e.length>20?`daily-bar-label daily-bar-label--compact`:`daily-bar-label`,g=a===`by-type`?c?[{value:r.output,class:`output`},{value:r.input,class:`input`},{value:r.cacheWrite,class:`cache-write`},{value:r.cacheRead,class:`cache-read`}]:[{value:r.outputCost??0,class:`output`},{value:r.inputCost??0,class:`input`},{value:r.cacheWriteCost??0,class:`cache-write`},{value:r.cacheReadCost??0,class:`cache-read`}]:[],_=a===`by-type`?c?[`${L(`usage.breakdown.output`)} ${Z(r.output)}`,`${L(`usage.breakdown.input`)} ${Z(r.input)}`,`${L(`usage.breakdown.cacheWrite`)} ${Z(r.cacheWrite)}`,`${L(`usage.breakdown.cacheRead`)} ${Z(r.cacheRead)}`]:[`${L(`usage.breakdown.output`)} ${Q(r.outputCost??0)}`,`${L(`usage.breakdown.input`)} ${Q(r.inputCost??0)}`,`${L(`usage.breakdown.cacheWrite`)} ${Q(r.cacheWriteCost??0)}`,`${L(`usage.breakdown.cacheRead`)} ${Q(r.cacheReadCost??0)}`]:[],v=c?Z(r.totalTokens):Q(r.totalCost);return n`
              <div
                class="daily-bar-wrapper ${u?`selected`:``}"
                @click=${e=>s(r.date,e.shiftKey)}
              >
                ${a===`by-type`?n`
                        <div
                          class="daily-bar daily-bar--stacked"
                          style="height: ${l.toFixed(0)}px;"
                        >
                          ${(()=>{let e=g.reduce((e,t)=>e+t.value,0)||1;return g.map(t=>n`
                                <div
                                  class="cost-segment ${t.class}"
                                  style="height: ${t.value/e*100}%"
                                ></div>
                              `)})()}
                        </div>
                      `:n`
                        <div class="daily-bar" style="height: ${l.toFixed(0)}px"></div>
                      `}
                ${h?n`<div class="daily-bar-total">${v}</div>`:i}
                <div class="${m}">${f}</div>
                <div class="daily-bar-tooltip">
                  <strong>${sv(r.date)}</strong><br />
                  ${Z(r.totalTokens)} ${L(`usage.metrics.tokens`).toLowerCase()}<br />
                  ${Q(r.totalCost)}
                  ${_.length?n`${_.map(e=>n`<div>${e}</div>`)}`:i}
                </div>
              </div>
            `})}
        </div>
      </div>
    </div>
  `}function Dv(e,t){let r=wv(e),i=t===`tokens`,a=e.totalTokens||1,o={output:Cv(e.output,a),input:Cv(e.input,a),cacheWrite:Cv(e.cacheWrite,a),cacheRead:Cv(e.cacheRead,a)};return n`
    <div class="cost-breakdown cost-breakdown-compact">
      <div class="cost-breakdown-header">
        ${L(i?`usage.breakdown.tokensByType`:`usage.breakdown.costByType`)}
      </div>
      <div class="cost-breakdown-bar">
        <div class="cost-segment output" style="width: ${(i?o.output:r.output.pct).toFixed(1)}%"
          title="${L(`usage.breakdown.output`)}: ${i?Z(e.output):Q(r.output.cost)}"></div>
        <div class="cost-segment input" style="width: ${(i?o.input:r.input.pct).toFixed(1)}%"
          title="${L(`usage.breakdown.input`)}: ${i?Z(e.input):Q(r.input.cost)}"></div>
        <div class="cost-segment cache-write" style="width: ${(i?o.cacheWrite:r.cacheWrite.pct).toFixed(1)}%"
          title="${L(`usage.breakdown.cacheWrite`)}: ${i?Z(e.cacheWrite):Q(r.cacheWrite.cost)}"></div>
        <div class="cost-segment cache-read" style="width: ${(i?o.cacheRead:r.cacheRead.pct).toFixed(1)}%"
          title="${L(`usage.breakdown.cacheRead`)}: ${i?Z(e.cacheRead):Q(r.cacheRead.cost)}"></div>
      </div>
      <div class="cost-breakdown-legend">
        <span class="legend-item"><span class="legend-dot output"></span>${L(`usage.breakdown.output`)} ${i?Z(e.output):Q(r.output.cost)}</span>
        <span class="legend-item"><span class="legend-dot input"></span>${L(`usage.breakdown.input`)} ${i?Z(e.input):Q(r.input.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-write"></span>${L(`usage.breakdown.cacheWrite`)} ${i?Z(e.cacheWrite):Q(r.cacheWrite.cost)}</span>
        <span class="legend-item"><span class="legend-dot cache-read"></span>${L(`usage.breakdown.cacheRead`)} ${i?Z(e.cacheRead):Q(r.cacheRead.cost)}</span>
      </div>
      <div class="cost-breakdown-total">
        ${L(`usage.breakdown.total`)}: ${i?Z(e.totalTokens):Q(e.totalCost)}
      </div>
    </div>
  `}function Ov(e,t,r){return n`
    <div class="usage-insight-card">
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?n`<div class="muted">${r}</div>`:n`
              <div class="usage-list">
                ${t.map(e=>n`
                    <div class="usage-list-item">
                      <span>${e.label}</span>
                      <span class="usage-list-value">
                        <span>${e.value}</span>
                        ${e.sub?n`<span class="usage-list-sub">${e.sub}</span>`:i}
                      </span>
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function kv(e,t,r,a){let o=[`usage-insight-card`,a?.className].filter(Boolean).join(` `),s=[`usage-error-list`,a?.listClassName].filter(Boolean).join(` `);return n`
    <div class=${o}>
      <div class="usage-insight-title">${e}</div>
      ${t.length===0?n`<div class="muted">${r}</div>`:n`
              <div class=${s}>
                ${t.map(e=>n`
                    <div class="usage-error-row">
                      <div class="usage-error-date">${e.label}</div>
                      <div class="usage-error-rate">${e.value}</div>
                      ${e.sub?n`<div class="usage-error-sub">${e.sub}</div>`:i}
                    </div>
                  `)}
              </div>
            `}
    </div>
  `}function Av(e){let t=[`stat`,`usage-summary-card`,e.className,e.tone?`usage-summary-card--${e.tone}`:``].filter(Boolean).join(` `),r=[`stat-value`,`usage-summary-value`,e.tone??``,e.compactValue?`usage-summary-value--compact`:``].filter(Boolean).join(` `);return n`
    <div class=${t}>
      <div class="usage-summary-title">
        ${e.title}
        <span class="usage-summary-hint" title=${e.hint}>?</span>
      </div>
      <div class=${r}>${e.value}</div>
      <div class="usage-summary-sub">${e.sub}</div>
    </div>
  `}function jv(e,t,r,a,o,s,c){if(!e)return i;let l=t.messages.total?Math.round(e.totalTokens/t.messages.total):0,u=t.messages.total?e.totalCost/t.messages.total:0,d=e.input+e.cacheRead,f=d>0?e.cacheRead/d:0,p=d>0?`${(f*100).toFixed(1)}%`:L(`usage.common.emptyValue`),m=r.errorRate*100,h=r.throughputTokensPerMin===void 0?L(`usage.common.emptyValue`):`${Z(Math.round(r.throughputTokensPerMin))} ${L(`usage.overview.tokensPerMinute`)}`,g=r.throughputCostPerMin===void 0?L(`usage.common.emptyValue`):`${Q(r.throughputCostPerMin,4)} ${L(`usage.overview.perMinute`)}`,v=r.durationCount>0?_(r.avgDurationMs,{spaced:!0})??L(`usage.common.emptyValue`):L(`usage.common.emptyValue`),y=L(`usage.overview.cacheHint`),b=L(`usage.overview.errorHint`),x=L(`usage.overview.throughputHint`),S=L(`usage.overview.avgTokensHint`),C=L(a?`usage.overview.avgCostHintMissing`:`usage.overview.avgCostHint`),w=t.daily.filter(e=>e.messages>0&&e.errors>0).map(e=>{let t=e.errors/e.messages;return{label:ov(e.date),value:`${(t*100).toFixed(2)}%`,sub:`${e.errors} ${L(`usage.overview.errors`).toLowerCase()} · ${e.messages} ${L(`usage.overview.messagesAbbrev`)} · ${Z(e.tokens)}`,rate:t}}).toSorted((e,t)=>t.rate-e.rate).slice(0,5).map(({rate:e,...t})=>t),T=t.byModel.slice(0,5).map(e=>({label:e.model??L(`usage.common.unknown`),value:Q(e.totals.totalCost),sub:`${Z(e.totals.totalTokens)} · ${e.count} ${L(`usage.overview.messagesAbbrev`)}`})),E=t.byProvider.slice(0,5).map(e=>({label:e.provider??L(`usage.common.unknown`),value:Q(e.totals.totalCost),sub:`${Z(e.totals.totalTokens)} · ${e.count} ${L(`usage.overview.messagesAbbrev`)}`})),D=t.tools.tools.slice(0,6).map(e=>({label:e.name,value:`${e.count}`,sub:L(`usage.overview.calls`)})),ee=t.byAgent.slice(0,5).map(e=>({label:e.agentId,value:Q(e.totals.totalCost),sub:Z(e.totals.totalTokens)})),te=t.byChannel.slice(0,5).map(e=>({label:e.channel,value:Q(e.totals.totalCost),sub:Z(e.totals.totalTokens)}));return n`
    <section class="card usage-overview-card">
      <div class="card-title">${L(`usage.overview.title`)}</div>
      <div class="usage-overview-layout">
        <div class="usage-summary-grid">
          ${Av({title:L(`usage.overview.messages`),hint:L(`usage.overview.messagesHint`),value:t.messages.total,sub:`${t.messages.user} ${L(`usage.overview.user`).toLowerCase()} · ${t.messages.assistant} ${L(`usage.overview.assistant`).toLowerCase()}`,className:`usage-summary-card--hero`})}
          ${Av({title:L(`usage.overview.throughput`),hint:x,value:h,sub:g,className:`usage-summary-card--hero usage-summary-card--throughput`,compactValue:!0})}
          ${Av({title:L(`usage.overview.toolCalls`),hint:L(`usage.overview.toolCallsHint`),value:t.tools.totalCalls,sub:`${t.tools.uniqueTools} ${L(`usage.overview.toolsUsed`)}`,className:`usage-summary-card--half`})}
          ${Av({title:L(`usage.overview.avgTokens`),hint:S,value:Z(l),sub:L(`usage.overview.acrossMessages`,{count:String(t.messages.total||0)}),className:`usage-summary-card--half`})}
          ${Av({title:L(`usage.overview.cacheHitRate`),hint:y,value:p,sub:`${Z(e.cacheRead)} ${L(`usage.overview.cached`)} · ${Z(d)} ${L(`usage.overview.prompt`)}`,tone:f>.6?`good`:f>.3?`warn`:`bad`,className:`usage-summary-card--medium`})}
          ${Av({title:L(`usage.overview.errorRate`),hint:b,value:`${m.toFixed(2)}%`,sub:`${t.messages.errors} ${L(`usage.overview.errors`).toLowerCase()} · ${v} ${L(`usage.overview.avgSession`)}`,tone:m>5?`bad`:m>1?`warn`:`good`,className:`usage-summary-card--medium`})}
          ${Av({title:L(`usage.overview.avgCost`),hint:C,value:Q(u,4),sub:`${Q(e.totalCost)} ${L(`usage.breakdown.total`).toLowerCase()}`,className:`usage-summary-card--compact`})}
          ${Av({title:L(`usage.overview.sessions`),hint:L(`usage.overview.sessionsHint`),value:s,sub:L(`usage.overview.sessionsInRange`,{count:String(c)}),className:`usage-summary-card--compact`})}
          ${Av({title:L(`usage.overview.errors`),hint:L(`usage.overview.errorsHint`),value:t.messages.errors,sub:`${t.messages.toolResults} ${L(`usage.overview.toolResults`)}`,className:`usage-summary-card--compact`})}
        </div>
        <div class="usage-insights-grid">
          ${Ov(L(`usage.overview.topModels`),T,L(`usage.overview.noModelData`))}
          ${Ov(L(`usage.overview.topProviders`),E,L(`usage.overview.noProviderData`))}
          ${Ov(L(`usage.overview.topTools`),D,L(`usage.overview.noToolCalls`))}
          ${Ov(L(`usage.overview.topAgents`),ee,L(`usage.overview.noAgentData`))}
          ${Ov(L(`usage.overview.topChannels`),te,L(`usage.overview.noChannelData`))}
          ${kv(L(`usage.overview.peakErrorDays`),w,L(`usage.overview.noErrorData`))}
          ${kv(L(`usage.overview.peakErrorHours`),o,L(`usage.overview.noErrorData`),{className:`usage-insight-card--wide`,listClassName:`usage-error-list--hours`})}
        </div>
      </div>
    </section>
  `}function Mv(e,t,r,a,o,s,c,l,u,d,f,p,m,h,g){let v=e=>m.includes(e),y=e=>{let t=e.label||e.key;return t.startsWith(`agent:`)&&t.includes(`?token=`)?t.slice(0,t.indexOf(`?token=`)):t},b=async e=>{let t=y(e);try{await navigator.clipboard.writeText(t)}catch{}},x=e=>{let t=[];return v(`channel`)&&e.channel&&t.push(`channel:${e.channel}`),v(`agent`)&&e.agentId&&t.push(`agent:${e.agentId}`),v(`provider`)&&(e.modelProvider||e.providerOverride)&&t.push(`provider:${e.modelProvider??e.providerOverride}`),v(`model`)&&e.model&&t.push(`model:${e.model}`),v(`messages`)&&e.usage?.messageCounts&&t.push(`msgs:${e.usage.messageCounts.total}`),v(`tools`)&&e.usage?.toolUsage&&t.push(`tools:${e.usage.toolUsage.totalCalls}`),v(`errors`)&&e.usage?.messageCounts&&t.push(`errors:${e.usage.messageCounts.errors}`),v(`duration`)&&e.usage?.durationMs&&t.push(`dur:${_(e.usage.durationMs,{spaced:!0})??`—`}`),t},S=e=>{let t=e.usage;if(!t)return 0;if(r.length>0&&t.dailyBreakdown&&t.dailyBreakdown.length>0){let e=t.dailyBreakdown.filter(e=>r.includes(e.date));return a?e.reduce((e,t)=>e+t.tokens,0):e.reduce((e,t)=>e+t.cost,0)}return a?t.totalTokens??0:t.totalCost??0},C=[...e].toSorted((e,t)=>{switch(o){case`recent`:return(t.updatedAt??0)-(e.updatedAt??0);case`messages`:return(t.usage?.messageCounts?.total??0)-(e.usage?.messageCounts?.total??0);case`errors`:return(t.usage?.messageCounts?.errors??0)-(e.usage?.messageCounts?.errors??0);case`cost`:return S(t)-S(e);default:return S(t)-S(e)}}),w=s===`asc`?C.toReversed():C,T=w.reduce((e,t)=>e+S(t),0),E=w.length?T/w.length:0,D=w.reduce((e,t)=>e+(t.usage?.messageCounts?.errors??0),0),ee=(e,t)=>{let r=S(e),o=y(e),s=x(e);return n`
      <div
        class="session-bar-row ${t?`selected`:``}"
        @click=${t=>u(e.key,t.shiftKey)}
        title="${e.key}"
      >
        <div class="session-bar-label">
          <div class="session-bar-title">${o}</div>
          ${s.length>0?n`<div class="session-bar-meta">${s.join(` · `)}</div>`:i}
        </div>
        <div class="session-bar-actions">
          <button
            class="btn btn--sm btn--ghost"
            title=${L(`usage.sessions.copyName`)}
            @click=${t=>{t.stopPropagation(),b(e)}}
          >
            ${L(`usage.sessions.copy`)}
          </button>
          <div class="session-bar-value">${a?Z(r):Q(r)}</div>
        </div>
      </div>
    `},te=new Set(t),O=w.filter(e=>te.has(e.key)),ne=O.length,k=new Map(w.map(e=>[e.key,e])),re=c.map(e=>k.get(e)).filter(e=>!!e);return n`
    <div class="card sessions-card">
      <div class="sessions-card-header">
        <div class="card-title">${L(`usage.sessions.title`)}</div>
        <div class="sessions-card-count">
          ${L(`usage.sessions.shown`,{count:String(e.length)})}
          ${h===e.length?``:` · ${L(`usage.sessions.total`,{count:String(h)})}`}
        </div>
      </div>
      <div class="sessions-card-meta">
        <div class="sessions-card-stats">
          <span>
            ${a?Z(E):Q(E)} ${L(`usage.sessions.avg`)}
          </span>
          <span>${D} ${L(`usage.overview.errors`).toLowerCase()}</span>
        </div>
        <div class="chart-toggle small">
          <button
            class="btn btn--sm toggle-btn ${l===`all`?`active`:``}"
            @click=${()=>p(`all`)}
          >
            ${L(`usage.sessions.all`)}
          </button>
          <button
            class="btn btn--sm toggle-btn ${l===`recent`?`active`:``}"
            @click=${()=>p(`recent`)}
          >
            ${L(`usage.sessions.recent`)}
          </button>
        </div>
        <label class="sessions-sort">
          <span>${L(`usage.sessions.sort`)}</span>
          <select
            @change=${e=>d(e.target.value)}
          >
            <option value="cost" ?selected=${o===`cost`}>${L(`usage.metrics.cost`)}</option>
            <option value="errors" ?selected=${o===`errors`}>${L(`usage.overview.errors`)}</option>
            <option value="messages" ?selected=${o===`messages`}>${L(`usage.overview.messages`)}</option>
            <option value="recent" ?selected=${o===`recent`}>${L(`usage.sessions.recentShort`)}</option>
            <option value="tokens" ?selected=${o===`tokens`}>${L(`usage.metrics.tokens`)}</option>
          </select>
        </label>
        <button
          class="btn btn--sm"
          @click=${()=>f(s===`desc`?`asc`:`desc`)}
          title=${L(s===`desc`?`usage.sessions.descending`:`usage.sessions.ascending`)}
        >
          ${s===`desc`?`↓`:`↑`}
        </button>
        ${ne>0?n`
                <button class="btn btn--sm" @click=${g}>
                  ${L(`usage.sessions.clearSelection`)}
                </button>
              `:i}
      </div>
      ${l===`recent`?re.length===0?n`
                <div class="usage-empty-block">${L(`usage.sessions.noRecent`)}</div>
              `:n`
	                <div class="session-bars session-bars--recent">
	                  ${re.map(e=>ee(e,te.has(e.key)))}
	                </div>
	              `:e.length===0?n`
                <div class="usage-empty-block">${L(`usage.sessions.noneInRange`)}</div>
              `:n`
	                <div class="session-bars">
	                  ${w.slice(0,50).map(e=>ee(e,te.has(e.key)))}
	                  ${e.length>50?n`
                            <div class="usage-more-sessions">
                              ${L(`usage.sessions.more`,{count:String(e.length-50)})}
                            </div>
                          `:i}
	                </div>
	              `}
      ${ne>1?n`
              <div class="sessions-selected-group">
                <div class="sessions-card-count">
                  ${L(`usage.sessions.selected`,{count:String(ne)})}
                </div>
                <div class="session-bars session-bars--selected">
                  ${O.map(e=>ee(e,!0))}
                </div>
              </div>
            `:i}
    </div>
  `}var Nv=.75,Pv=.06,Fv=5,Iv=12,Lv=.7;function Rv(e,t){return!t||t<=0?0:e/t*100}function zv(e){return e<0xe8d4a51000?e*1e3:e}function Bv(e,t,n){let r=Math.min(t,n),i=Math.max(t,n);return e.filter(e=>{if(e.timestamp<=0)return!0;let t=zv(e.timestamp);return t>=r&&t<=i})}function Vv(e,t,r){let a=t||e.usage;if(!a)return n`
      <div class="usage-empty-block">${L(`usage.details.noUsageData`)}</div>
    `;let o=e=>e?new Date(e).toLocaleString():L(`usage.common.emptyValue`),s=[];e.channel&&s.push(`channel:${e.channel}`),e.agentId&&s.push(`agent:${e.agentId}`),(e.modelProvider||e.providerOverride)&&s.push(`provider:${e.modelProvider??e.providerOverride}`),e.model&&s.push(`model:${e.model}`);let c=a.toolUsage?.tools.slice(0,6)??[],l,u,d;if(r){let e=new Map;for(let t of r){let{tools:n}=G_(t.content);for(let[t]of n)e.set(t,(e.get(t)||0)+1)}d=c.map(t=>({label:t.name,value:`${e.get(t.name)??0}`,sub:L(`usage.overview.calls`)})),l=[...e.values()].reduce((e,t)=>e+t,0),u=e.size}else d=c.map(e=>({label:e.name,value:`${e.count}`,sub:L(`usage.overview.calls`)})),l=a.toolUsage?.totalCalls??0,u=a.toolUsage?.uniqueTools??0;let f=a.modelUsage?.slice(0,6).map(e=>({label:e.model??L(`usage.common.unknown`),value:Q(e.totals.totalCost),sub:Z(e.totals.totalTokens)}))??[];return n`
    ${s.length>0?n`<div class="usage-badges">${s.map(e=>n`<span class="usage-badge">${e}</span>`)}</div>`:i}
    <div class="session-summary-grid">
      <div class="stat session-summary-card">
        <div class="session-summary-title">${L(`usage.overview.messages`)}</div>
        <div class="stat-value session-summary-value">${a.messageCounts?.total??0}</div>
        <div class="session-summary-meta">
          ${a.messageCounts?.user??0} ${L(`usage.overview.user`).toLowerCase()} ·
          ${a.messageCounts?.assistant??0} ${L(`usage.overview.assistant`).toLowerCase()}
        </div>
      </div>
      <div class="stat session-summary-card">
        <div class="session-summary-title">${L(`usage.overview.toolCalls`)}</div>
        <div class="stat-value session-summary-value">${l}</div>
        <div class="session-summary-meta">${u} ${L(`usage.overview.toolsUsed`)}</div>
      </div>
      <div class="stat session-summary-card">
        <div class="session-summary-title">${L(`usage.overview.errors`)}</div>
        <div class="stat-value session-summary-value">${a.messageCounts?.errors??0}</div>
        <div class="session-summary-meta">
          ${a.messageCounts?.toolResults??0} ${L(`usage.overview.toolResults`)}
        </div>
      </div>
      <div class="stat session-summary-card">
        <div class="session-summary-title">${L(`usage.details.duration`)}</div>
        <div class="stat-value session-summary-value">
          ${_(a.durationMs,{spaced:!0})??L(`usage.common.emptyValue`)}
        </div>
        <div class="session-summary-meta">${o(a.firstActivity)} → ${o(a.lastActivity)}</div>
      </div>
    </div>
    <div class="usage-insights-grid usage-insights-grid--tight">
      ${Ov(L(`usage.overview.topTools`),d,L(`usage.overview.noToolCalls`))}
      ${Ov(L(`usage.details.modelMix`),f,L(`usage.overview.noModelData`))}
    </div>
  `}function Hv(e,t,n,r){let i=Math.min(n,r),a=Math.max(n,r),o=t.filter(e=>e.timestamp>=i&&e.timestamp<=a);if(o.length===0)return;let s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0;for(let e of o)s+=e.totalTokens||0,c+=e.cost||0,d+=e.input||0,f+=e.output||0,p+=e.cacheRead||0,m+=e.cacheWrite||0,e.output>0&&u++,e.input>0&&l++;return{...e,totalTokens:s,totalCost:c,input:d,output:f,cacheRead:p,cacheWrite:m,durationMs:o[o.length-1].timestamp-o[0].timestamp,firstActivity:o[0].timestamp,lastActivity:o[o.length-1].timestamp,messageCounts:{total:o.length,user:l,assistant:u,toolCalls:0,toolResults:0,errors:0}}}function Uv(e,t,r,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D){let ee=e.label||e.key,te=ee.length>50?ee.slice(0,50)+`…`:ee,O=e.usage,ne=l!==null&&u!==null,k=l!==null&&u!==null&&t?.points&&O?Hv(O,t.points,l,u):void 0,re=k?{totalTokens:k.totalTokens,totalCost:k.totalCost}:{totalTokens:O?.totalTokens??0,totalCost:O?.totalCost??0},A=k?L(`usage.details.filtered`):``;return n`
    <div class="card session-detail-panel">
      <div class="session-detail-header">
        <div class="session-detail-header-left">
          <div class="session-detail-title">
            ${te}
            ${A?n`<span class="session-detail-indicator">${A}</span>`:i}
          </div>
        </div>
        <div class="session-detail-stats">
          ${O?n`
            <span><strong>${Z(re.totalTokens)}</strong> ${L(`usage.metrics.tokens`).toLowerCase()}${A}</span>
            <span><strong>${Q(re.totalCost)}</strong>${A}</span>
          `:i}
        </div>
        <button
          class="btn btn--sm btn--ghost"
          @click=${D}
          title=${L(`usage.details.close`)}
          aria-label=${L(`usage.details.close`)}
        >
          ×
        </button>
      </div>
      <div class="session-detail-content">
        ${Vv(e,k,l!=null&&u!=null&&h?Bv(h,l,u):void 0)}
        <div class="session-detail-row">
          ${Wv(t,r,a,o,s,c,f,p,m,l,u,d)}
        </div>
        <div class="session-detail-bottom">
          ${Kv(h,g,_,v,y,b,x,S,C,w,ne?l:null,ne?u:null)}
          ${Gv(e.contextWeight,O,T,E)}
        </div>
      </div>
    </div>
  `}function Wv(e,t,r,o,s,c,l,u,d,f,p,m){if(t)return n`
      <div class="session-timeseries-compact">
        <div class="usage-empty-block">${L(`usage.loading.badge`)}</div>
      </div>
    `;if(!e||e.points.length<2)return n`
      <div class="session-timeseries-compact">
        <div class="usage-empty-block">${L(`usage.details.noTimeline`)}</div>
      </div>
    `;let h=e.points;if(l||u||d&&d.length>0){let t=l?new Date(l+`T00:00:00`).getTime():0,n=u?new Date(u+`T23:59:59`).getTime():1/0;h=e.points.filter(e=>{if(e.timestamp<t||e.timestamp>n)return!1;if(d&&d.length>0){let t=new Date(e.timestamp),n=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`;return d.includes(n)}return!0})}if(h.length<2)return n`
      <div class="session-timeseries-compact">
        <div class="usage-empty-block">${L(`usage.details.noDataInRange`)}</div>
      </div>
    `;let g=0,_=0,v=0,y=0,b=0,x=0;h=h.map(e=>(g+=e.totalTokens,_+=e.cost,v+=e.output,y+=e.input,b+=e.cacheRead,x+=e.cacheWrite,{...e,cumulativeTokens:g,cumulativeCost:_}));let S=f!=null&&p!=null,C=S?Math.min(f,p):0,w=S?Math.max(f,p):1/0,T=0,E=h.length;if(S){T=h.findIndex(e=>e.timestamp>=C),T===-1&&(T=h.length);let e=h.findIndex(e=>e.timestamp>w);E=e===-1?h.length:e}let D=S?h.slice(T,E):h,ee=0,te=0,O=0,ne=0;for(let e of D)ee+=e.output,te+=e.input,O+=e.cacheRead,ne+=e.cacheWrite;let k={top:8,right:4,bottom:14,left:30},re=400-k.left-k.right,A=100-k.top-k.bottom,ie=r===`cumulative`,j=r===`per-turn`&&s===`by-type`,M=ee+te+O+ne,ae=h.map(e=>ie?e.cumulativeTokens:j?e.input+e.output+e.cacheRead+e.cacheWrite:e.totalTokens),N=Math.max(...ae,1),oe=re/h.length,P=Math.min(8,Math.max(1,oe*Nv)),se=oe-P,F=k.left+T*(P+se),I=E>=h.length?k.left+(h.length-1)*(P+se)+P:k.left+(E-1)*(P+se)+P;return n`
    <div class="session-timeseries-compact">
      <div class="timeseries-header-row">
        <div class="card-title usage-section-title">${L(`usage.details.usageOverTime`)}</div>
        <div class="timeseries-controls">
          ${S?n`
            <div class="chart-toggle small">
              <button class="btn btn--sm toggle-btn active" @click=${()=>m?.(null,null)}>
                ${L(`usage.details.reset`)}
              </button>
            </div>
          `:i}
          <div class="chart-toggle small">
            <button
              class="btn btn--sm toggle-btn ${ie?``:`active`}"
              @click=${()=>o(`per-turn`)}
            >
              ${L(`usage.details.perTurn`)}
            </button>
            <button
              class="btn btn--sm toggle-btn ${ie?`active`:``}"
              @click=${()=>o(`cumulative`)}
            >
              ${L(`usage.details.cumulative`)}
            </button>
          </div>
          ${ie?i:n`
                  <div class="chart-toggle small">
                    <button
                      class="btn btn--sm toggle-btn ${s===`total`?`active`:``}"
                      @click=${()=>c(`total`)}
                    >
                      ${L(`usage.daily.total`)}
                    </button>
                    <button
                      class="btn btn--sm toggle-btn ${s===`by-type`?`active`:``}"
                      @click=${()=>c(`by-type`)}
                    >
                      ${L(`usage.daily.byType`)}
                    </button>
                  </div>
                `}
        </div>
      </div>
      <div class="timeseries-chart-wrapper">
        <svg 
          viewBox="0 0 ${400} ${118}" 
          class="timeseries-svg"
        >
          <!-- Y axis -->
          <line x1="${k.left}" y1="${k.top}" x2="${k.left}" y2="${k.top+A}" stroke="var(--border)" />
          <!-- X axis -->
          <line x1="${k.left}" y1="${k.top+A}" x2="${400-k.right}" y2="${k.top+A}" stroke="var(--border)" />
          <!-- Y axis labels -->
          <text x="${k.left-4}" y="${k.top+5}" text-anchor="end" class="ts-axis-label">${Z(N)}</text>
          <text x="${k.left-4}" y="${k.top+A}" text-anchor="end" class="ts-axis-label">0</text>
          <!-- X axis labels (first and last) -->
          ${h.length>0?a`
            <text x="${k.left}" y="${k.top+A+10}" text-anchor="start" class="ts-axis-label">${new Date(h[0].timestamp).toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`})}</text>
            <text x="${400-k.right}" y="${k.top+A+10}" text-anchor="end" class="ts-axis-label">${new Date(h[h.length-1].timestamp).toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`})}</text>
          `:i}
          <!-- Bars -->
          ${h.map((e,t)=>{let n=ae[t],r=k.left+t*(P+se),o=n/N*A,s=k.top+A-o,c=[new Date(e.timestamp).toLocaleDateString(void 0,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}),`${Z(n)} ${L(`usage.metrics.tokens`).toLowerCase()}`];j&&(c.push(`Out ${Z(e.output)}`),c.push(`In ${Z(e.input)}`),c.push(`CW ${Z(e.cacheWrite)}`),c.push(`CR ${Z(e.cacheRead)}`));let l=c.join(` · `),u=S&&(t<T||t>=E);if(!j)return a`<rect x="${r}" y="${s}" width="${P}" height="${o}" class="ts-bar${u?` dimmed`:``}" rx="1"><title>${l}</title></rect>`;let d=[{value:e.output,cls:`output`},{value:e.input,cls:`input`},{value:e.cacheWrite,cls:`cache-write`},{value:e.cacheRead,cls:`cache-read`}],f=k.top+A,p=u?` dimmed`:``;return a`
              ${d.map(e=>{if(e.value<=0||n<=0)return i;let t=o*(e.value/n);return f-=t,a`<rect x="${r}" y="${f}" width="${P}" height="${t}" class="ts-bar ${e.cls}${p}" rx="1"><title>${l}</title></rect>`})}
            `})}
          <!-- Selection highlight overlay (always visible between handles) -->
          ${a`
            <rect 
              x="${F}" 
              y="${k.top}" 
              width="${Math.max(1,I-F)}" 
              height="${A}" 
              fill="var(--accent)" 
              opacity="${Pv}" 
              pointer-events="none"
            />
          `}
          <!-- Left cursor line + handle -->
          ${a`
            <line x1="${F}" y1="${k.top}" x2="${F}" y2="${k.top+A}" stroke="var(--accent)" stroke-width="0.8" opacity="0.7" />
            <rect x="${F-Fv/2}" y="${k.top+A/2-Iv/2}" width="${Fv}" height="${Iv}" rx="1.5" fill="var(--accent)" class="cursor-handle" />
            <line x1="${F-Lv}" y1="${k.top+A/2-Iv/5}" x2="${F-Lv}" y2="${k.top+A/2+Iv/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
            <line x1="${F+Lv}" y1="${k.top+A/2-Iv/5}" x2="${F+Lv}" y2="${k.top+A/2+Iv/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
          `}
          <!-- Right cursor line + handle -->
          ${a`
            <line x1="${I}" y1="${k.top}" x2="${I}" y2="${k.top+A}" stroke="var(--accent)" stroke-width="0.8" opacity="0.7" />
            <rect x="${I-Fv/2}" y="${k.top+A/2-Iv/2}" width="${Fv}" height="${Iv}" rx="1.5" fill="var(--accent)" class="cursor-handle" />
            <line x1="${I-Lv}" y1="${k.top+A/2-Iv/5}" x2="${I-Lv}" y2="${k.top+A/2+Iv/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
            <line x1="${I+Lv}" y1="${k.top+A/2-Iv/5}" x2="${I+Lv}" y2="${k.top+A/2+Iv/5}" stroke="var(--bg)" stroke-width="0.4" pointer-events="none" />
          `}
        </svg>
        <!-- Handle drag zones (only on handles, not full chart) -->
        ${(()=>{let e=`${(F/400*100).toFixed(1)}%`,t=`${(I/400*100).toFixed(1)}%`,r=e=>t=>{if(!m)return;t.preventDefault(),t.stopPropagation();let n=t.currentTarget.closest(`.timeseries-chart-wrapper`)?.querySelector(`svg`);if(!n)return;let r=n.getBoundingClientRect(),i=r.width,a=k.left/400*i,o=(400-k.right)/400*i-a,s=e=>{let t=Math.max(0,Math.min(1,(e-r.left-a)/o));return Math.min(Math.floor(t*h.length),h.length-1)},c=e===`left`?F:I,l=r.left+c/400*i,u=t.clientX-l;document.body.style.cursor=`col-resize`;let d=t=>{let n=s(t.clientX-u),r=h[n];if(r)if(e===`left`){let e=p??h[h.length-1].timestamp;m(Math.min(r.timestamp,e),e)}else{let e=f??h[0].timestamp;m(e,Math.max(r.timestamp,e))}},g=()=>{document.body.style.cursor=``,document.removeEventListener(`mousemove`,d),document.removeEventListener(`mouseup`,g)};document.addEventListener(`mousemove`,d),document.addEventListener(`mouseup`,g)};return n`
            <div class="chart-handle-zone chart-handle-left" 
                 style="left: ${e};"
                 @mousedown=${r(`left`)}></div>
            <div class="chart-handle-zone chart-handle-right" 
                 style="left: ${t};"
                 @mousedown=${r(`right`)}></div>
          `})()}
      </div>
      <div class="timeseries-summary">
        ${S?n`
              <span class="timeseries-summary__range">
                ${L(`usage.details.turnRange`,{start:String(T+1),end:String(E),total:String(h.length)})}
              </span> ·
              ${new Date(C).toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`})}–${new Date(w).toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`})} · 
              ${Z(ee+te+O+ne)} · 
              ${Q(D.reduce((e,t)=>e+(t.cost||0),0))}
            `:n`${h.length} ${L(`usage.overview.messagesAbbrev`)} · ${Z(g)} · ${Q(_)}`}
      </div>
      ${j?n`
              <div class="timeseries-breakdown">
                <div class="card-title usage-section-title">${L(`usage.breakdown.tokensByType`)}</div>
                <div class="cost-breakdown-bar cost-breakdown-bar--compact">
                  <div class="cost-segment output" style="width: ${Rv(ee,M).toFixed(1)}%"></div>
                  <div class="cost-segment input" style="width: ${Rv(te,M).toFixed(1)}%"></div>
                  <div class="cost-segment cache-write" style="width: ${Rv(ne,M).toFixed(1)}%"></div>
                  <div class="cost-segment cache-read" style="width: ${Rv(O,M).toFixed(1)}%"></div>
                </div>
                <div class="cost-breakdown-legend">
                  <div class="legend-item" title=${L(`usage.details.assistantOutputTokens`)}>
                    <span class="legend-dot output"></span>${L(`usage.breakdown.output`)} ${Z(ee)}
                  </div>
                  <div class="legend-item" title=${L(`usage.details.userToolInputTokens`)}>
                    <span class="legend-dot input"></span>${L(`usage.breakdown.input`)} ${Z(te)}
                  </div>
                  <div class="legend-item" title=${L(`usage.details.tokensWrittenToCache`)}>
                    <span class="legend-dot cache-write"></span>${L(`usage.breakdown.cacheWrite`)} ${Z(ne)}
                  </div>
                  <div class="legend-item" title=${L(`usage.details.tokensReadFromCache`)}>
                    <span class="legend-dot cache-read"></span>${L(`usage.breakdown.cacheRead`)} ${Z(O)}
                  </div>
                </div>
                <div class="cost-breakdown-total">
                  ${L(`usage.breakdown.total`)}: ${Z(M)}
                </div>
              </div>
            `:i}
    </div>
  `}function Gv(e,t,r,a){if(!e)return n`
      <div class="context-details-panel">
        <div class="usage-empty-block">${L(`usage.details.noContextData`)}</div>
      </div>
    `;let o=X_(e.systemPrompt.chars),s=X_(e.skills.promptChars),c=X_(e.tools.listChars+e.tools.schemaChars),l=X_(e.injectedWorkspaceFiles.reduce((e,t)=>e+t.injectedChars,0)),u=o+s+c+l,d=``;if(t&&t.totalTokens>0){let e=t.input+t.cacheRead;e>0&&(d=`~${Math.min(u/e*100,100).toFixed(0)}% ${L(`usage.details.ofInput`)}`)}let f=e.skills.entries.toSorted((e,t)=>t.blockChars-e.blockChars),p=e.tools.entries.toSorted((e,t)=>t.summaryChars+t.schemaChars-(e.summaryChars+e.schemaChars)),m=e.injectedWorkspaceFiles.toSorted((e,t)=>t.injectedChars-e.injectedChars),h=r,g=h?f:f.slice(0,4),_=h?p:p.slice(0,4),v=h?m:m.slice(0,4),y=f.length>4||p.length>4||m.length>4;return n`
    <div class="context-details-panel">
      <div class="context-breakdown-header">
        <div class="card-title usage-section-title">${L(`usage.details.systemPromptBreakdown`)}</div>
        ${y?n`<button class="btn btn--sm" @click=${a}>
                ${L(h?`usage.details.collapse`:`usage.details.expandAll`)}
              </button>`:i}
      </div>
      <p class="context-weight-desc">
        ${d||L(`usage.details.baseContextPerMessage`)}
      </p>
      <div class="context-stacked-bar">
        <div class="context-segment system" style="width: ${Rv(o,u).toFixed(1)}%" title="${L(`usage.details.system`)}: ~${Z(o)}"></div>
        <div class="context-segment skills" style="width: ${Rv(s,u).toFixed(1)}%" title="${L(`usage.details.skills`)}: ~${Z(s)}"></div>
        <div class="context-segment tools" style="width: ${Rv(c,u).toFixed(1)}%" title="${L(`usage.details.tools`)}: ~${Z(c)}"></div>
        <div class="context-segment files" style="width: ${Rv(l,u).toFixed(1)}%" title="${L(`usage.details.files`)}: ~${Z(l)}"></div>
      </div>
      <div class="context-legend">
        <span class="legend-item"><span class="legend-dot system"></span>${L(`usage.details.systemShort`)} ~${Z(o)}</span>
        <span class="legend-item"><span class="legend-dot skills"></span>${L(`usage.details.skills`)} ~${Z(s)}</span>
        <span class="legend-item"><span class="legend-dot tools"></span>${L(`usage.details.tools`)} ~${Z(c)}</span>
        <span class="legend-item"><span class="legend-dot files"></span>${L(`usage.details.files`)} ~${Z(l)}</span>
      </div>
      <div class="context-total">${L(`usage.breakdown.total`)}: ~${Z(u)}</div>
      <div class="context-breakdown-grid">
        ${f.length>0?(()=>{let e=f.length-g.length;return n`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">
                      ${L(`usage.details.skills`)} (${f.length})
                    </div>
                    <div class="context-breakdown-list">
                      ${g.map(e=>n`
                          <div class="context-breakdown-item">
                            <span class="mono">${e.name}</span>
                            <span class="muted">~${Z(X_(e.blockChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${e>0?n`
                            <div class="context-breakdown-more">
                              ${L(`usage.sessions.more`,{count:String(e)})}
                            </div>
                          `:i}
                  </div>
                `})():i}
        ${p.length>0?(()=>{let e=p.length-_.length;return n`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">
                      ${L(`usage.details.tools`)} (${p.length})
                    </div>
                    <div class="context-breakdown-list">
                      ${_.map(e=>n`
                          <div class="context-breakdown-item">
                            <span class="mono">${e.name}</span>
                            <span class="muted">~${Z(X_(e.summaryChars+e.schemaChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${e>0?n`
                            <div class="context-breakdown-more">
                              ${L(`usage.sessions.more`,{count:String(e)})}
                            </div>
                          `:i}
                  </div>
                `})():i}
        ${m.length>0?(()=>{let e=m.length-v.length;return n`
                  <div class="context-breakdown-card">
                    <div class="context-breakdown-title">
                      ${L(`usage.details.files`)} (${m.length})
                    </div>
                    <div class="context-breakdown-list">
                      ${v.map(e=>n`
                          <div class="context-breakdown-item">
                            <span class="mono">${e.name}</span>
                            <span class="muted">~${Z(X_(e.injectedChars))}</span>
                          </div>
                        `)}
                    </div>
                    ${e>0?n`
                            <div class="context-breakdown-more">
                              ${L(`usage.sessions.more`,{count:String(e)})}
                            </div>
                          `:i}
                  </div>
                `})():i}
      </div>
    </div>
  `}function Kv(e,t,r,a,o,s,c,l,u,d,f,p){if(t)return n`
      <div class="session-logs-compact">
        <div class="session-logs-header">${L(`usage.details.conversation`)}</div>
        <div class="usage-empty-block">${L(`usage.loading.badge`)}</div>
      </div>
    `;if(!e||e.length===0)return n`
      <div class="session-logs-compact">
        <div class="session-logs-header">${L(`usage.details.conversation`)}</div>
        <div class="usage-empty-block">${L(`usage.details.noMessages`)}</div>
      </div>
    `;let m=o.query.trim().toLowerCase(),h=e.map(e=>{let t=G_(e.content);return{log:e,toolInfo:t,cleanContent:t.cleanContent||e.content}}),g=Array.from(new Set(h.flatMap(e=>e.toolInfo.tools.map(([e])=>e)))).toSorted((e,t)=>e.localeCompare(t)),_=h.filter(e=>{if(f!=null&&p!=null){let t=e.log.timestamp;if(t>0){let e=Math.min(f,p),n=Math.max(f,p),r=zv(t);if(r<e||r>n)return!1}}return!(o.roles.length>0&&!o.roles.includes(e.log.role)||o.hasTools&&e.toolInfo.tools.length===0||o.tools.length>0&&!e.toolInfo.tools.some(([e])=>o.tools.includes(e))||m&&!e.cleanContent.toLowerCase().includes(m))}),v=o.roles.length>0||o.tools.length>0||o.hasTools||m,y=f!=null&&p!=null,b=v||y?`${_.length} ${L(`usage.details.of`)} ${e.length}${y?` (${L(`usage.details.timelineFiltered`)})`:``}`:`${e.length}`,x=new Set(o.roles),S=new Set(o.tools);return n`
    <div class="session-logs-compact">
      <div class="session-logs-header">
        <span>
          ${L(`usage.details.conversation`)}
          <span class="session-logs-header-count">
            (${b} ${L(`usage.overview.messages`).toLowerCase()})
          </span>
        </span>
        <button class="btn btn--sm" @click=${a}>
          ${L(r?`usage.details.collapseAll`:`usage.details.expandAll`)}
        </button>
      </div>
      <div class="usage-filters-inline session-log-filters">
        <select
          multiple
          size="4"
          aria-label="Filter by role"
          @change=${e=>s(Array.from(e.target.selectedOptions).map(e=>e.value))}
        >
          <option value="user" ?selected=${x.has(`user`)}>${L(`usage.overview.user`)}</option>
          <option value="assistant" ?selected=${x.has(`assistant`)}>${L(`usage.overview.assistant`)}</option>
          <option value="tool" ?selected=${x.has(`tool`)}>${L(`usage.details.tool`)}</option>
          <option value="toolResult" ?selected=${x.has(`toolResult`)}>${L(`usage.details.toolResult`)}</option>
        </select>
        <select
          multiple
          size="4"
          aria-label="Filter by tool"
          @change=${e=>c(Array.from(e.target.selectedOptions).map(e=>e.value))}
        >
          ${g.map(e=>n`<option value=${e} ?selected=${S.has(e)}>${e}</option>`)}
        </select>
        <label class="usage-filters-inline session-log-has-tools">
          <input
            type="checkbox"
            .checked=${o.hasTools}
            @change=${e=>l(e.target.checked)}
          />
          ${L(`usage.details.hasTools`)}
        </label>
        <input
          type="text"
          placeholder=${L(`usage.details.searchConversation`)}
          aria-label=${L(`usage.details.searchConversation`)}
          .value=${o.query}
          @input=${e=>u(e.target.value)}
        />
        <button class="btn btn--sm" @click=${d}>
          ${L(`usage.filters.clear`)}
        </button>
      </div>
      <div class="session-logs-list">
        ${_.map(e=>{let{log:t,toolInfo:a,cleanContent:o}=e;return n`
          <div class="session-log-entry ${t.role===`user`?`user`:`assistant`}">
            <div class="session-log-meta">
              <span class="session-log-role">${t.role===`user`?L(`usage.details.you`):t.role===`assistant`?L(`usage.overview.assistant`):L(`usage.details.tool`)}</span>
              <span>${new Date(t.timestamp).toLocaleString()}</span>
              ${t.tokens?n`<span>${Z(t.tokens)}</span>`:i}
            </div>
            <div class="session-log-content">${o}</div>
            ${a.tools.length>0?n`
                    <details class="session-log-tools" ?open=${r}>
                      <summary>${a.summary}</summary>
                      <div class="session-log-tools-list">
                        ${a.tools.map(([e,t])=>n`
                            <span class="session-log-tools-pill">${e} × ${t}</span>
                          `)}
                      </div>
                    </details>
                  `:i}
          </div>
        `})}
        ${_.length===0?n`
                <div class="usage-empty-block usage-empty-block--compact">
                  ${L(`usage.details.noMessagesMatch`)}
                </div>
              `:i}
      </div>
    </div>
  `}function qv(){return{input:0,output:0,cacheRead:0,cacheWrite:0,totalTokens:0,totalCost:0,inputCost:0,outputCost:0,cacheReadCost:0,cacheWriteCost:0,missingCostEntries:0}}function Jv(e,t){return e.input+=t.input,e.output+=t.output,e.cacheRead+=t.cacheRead,e.cacheWrite+=t.cacheWrite,e.totalTokens+=t.totalTokens,e.totalCost+=t.totalCost,e.inputCost+=t.inputCost??0,e.outputCost+=t.outputCost??0,e.cacheReadCost+=t.cacheReadCost??0,e.cacheWriteCost+=t.cacheWriteCost??0,e.missingCostEntries+=t.missingCostEntries??0,e}function Yv(e){return n`
    <section class="card usage-loading-card">
      <div class="usage-loading-header">
        <div class="usage-loading-title-group">
          <div class="card-title usage-section-title">${L(`usage.loading.title`)}</div>
          <span class="usage-loading-badge">
            <span class="usage-loading-spinner" aria-hidden="true"></span>
            ${L(`usage.loading.badge`)}
          </span>
        </div>
        <div class="usage-loading-controls">
          <div class="usage-date-range usage-date-range--loading">
            <input class="usage-date-input" type="date" .value=${e.startDate} disabled />
            <span class="usage-separator">${L(`usage.filters.to`)}</span>
            <input class="usage-date-input" type="date" .value=${e.endDate} disabled />
          </div>
        </div>
      </div>
      <div class="usage-loading-grid">
        <div class="usage-skeleton-block usage-skeleton-block--tall"></div>
        <div class="usage-skeleton-block"></div>
        <div class="usage-skeleton-block"></div>
      </div>
    </section>
  `}function Xv(e){return n`
    <section class="card usage-empty-state">
      <div class="usage-empty-state__title">${L(`usage.empty.title`)}</div>
      <div class="card-sub usage-empty-state__subtitle">${L(`usage.empty.subtitle`)}</div>
      <div class="usage-empty-state__features">
        <span class="usage-empty-state__feature">${L(`usage.empty.featureOverview`)}</span>
        <span class="usage-empty-state__feature">${L(`usage.empty.featureSessions`)}</span>
        <span class="usage-empty-state__feature">${L(`usage.empty.featureTimeline`)}</span>
      </div>
      <div class="usage-empty-state__actions">
        <button class="btn primary" @click=${e}>
          ${L(`common.refresh`)}
        </button>
      </div>
    </section>
  `}function Zv(e){let{data:t,filters:r,display:a,detail:o,callbacks:s}=e,c=s.filters,l=s.display,u=s.details;if(t.loading&&!t.totals)return n`<div class="usage-page">${Yv(r)}</div>`;let d=a.chartMode===`tokens`,f=r.query.trim().length>0,p=r.queryDraft.trim().length>0,m=[...t.sessions].toSorted((e,t)=>{let n=d?e.usage?.totalTokens??0:e.usage?.totalCost??0;return(d?t.usage?.totalTokens??0:t.usage?.totalCost??0)-n}),h=r.selectedDays.length>0?m.filter(e=>{if(e.usage?.activityDates?.length)return e.usage.activityDates.some(e=>r.selectedDays.includes(e));if(!e.updatedAt)return!1;let t=new Date(e.updatedAt),n=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`;return r.selectedDays.includes(n)}):m,g=(e,t)=>{if(t.length===0)return!0;let n=e.usage,i=n?.firstActivity??e.updatedAt,a=n?.lastActivity??e.updatedAt;if(!i||!a)return!1;let o=Math.min(i,a),s=Math.max(i,a),c=o;for(;c<=s;){let e=new Date(c),n=$_(e,r.timeZone);if(t.includes(n))return!0;let i=tv(e,r.timeZone);c=Math.min(i.getTime(),s)+1}return!1},_=W_(r.selectedHours.length>0?h.filter(e=>g(e,r.selectedHours)):h,r.query),v=_.sessions,y=_.warnings,b=_v(r.queryDraft,m,t.aggregates),x=R_(r.query),S=e=>{let t=yv(e);return x.filter(e=>yv(e.key??``)===t).map(e=>e.value).filter(Boolean)},C=e=>{let t=new Set;for(let n of e)n&&t.add(n);return Array.from(t)},w=C(m.map(e=>e.agentId)).slice(0,12),T=C(m.map(e=>e.channel)).slice(0,12),E=C([...m.map(e=>e.modelProvider),...m.map(e=>e.providerOverride),...t.aggregates?.byProvider.map(e=>e.provider)??[]]).slice(0,12),D=C([...m.map(e=>e.model),...t.aggregates?.byModel.map(e=>e.model)??[]]).slice(0,12),ee=C(t.aggregates?.tools.tools.map(e=>e.name)??[]).slice(0,12),te=r.selectedSessions.length===1?t.sessions.find(e=>e.key===r.selectedSessions[0])??v.find(e=>e.key===r.selectedSessions[0]):null,O=e=>e.reduce((e,t)=>t.usage?Jv(e,t.usage):e,qv()),ne=e=>t.costDaily.filter(t=>e.includes(t.date)).reduce((e,t)=>Jv(e,t),qv()),k,re,A=m.length;if(r.selectedSessions.length>0){let e=v.filter(e=>r.selectedSessions.includes(e.key));k=O(e),re=e.length}else r.selectedDays.length>0&&r.selectedHours.length===0?(k=ne(r.selectedDays),re=v.length):r.selectedHours.length>0||f?(k=O(v),re=v.length):(k=t.totals,re=A);let ie=r.selectedSessions.length>0?v.filter(e=>r.selectedSessions.includes(e.key)):f||r.selectedHours.length>0?v:r.selectedDays.length>0?h:m,j=uv(ie,t.aggregates),M=r.selectedSessions.length>0?(()=>{let e=v.filter(e=>r.selectedSessions.includes(e.key)),n=new Set;for(let t of e)for(let e of t.usage?.activityDates??[])n.add(e);return n.size>0?t.costDaily.filter(e=>n.has(e.date)):t.costDaily})():t.costDaily,ae=dv(ie,k,j),N=!t.loading&&!t.totals&&t.sessions.length===0,oe=(k?.missingCostEntries??0)>0||(k?k.totalTokens>0&&k.totalCost===0&&k.input+k.output+k.cacheRead+k.cacheWrite>0:!1),P=[{label:L(`usage.presets.today`),days:1},{label:L(`usage.presets.last7d`),days:7},{label:L(`usage.presets.last30d`),days:30}],se=e=>{let t=new Date,n=new Date;n.setDate(n.getDate()-(e-1)),c.onStartDateChange(iv(n)),c.onEndDateChange(iv(t))},F=(e,t,a)=>{if(a.length===0)return i;let o=S(e),s=new Set(o.map(e=>yv(e))),l=a.length>0&&a.every(e=>s.has(yv(e))),u=o.length;return n`
      <details
        class="usage-filter-select"
        @toggle=${e=>{let t=e.currentTarget;if(!t.open)return;let n=e=>{e.composedPath().includes(t)||(t.open=!1,window.removeEventListener(`click`,n,!0))};window.addEventListener(`click`,n,!0)}}
      >
        <summary>
          <span>${t}</span>
          ${u>0?n`<span class="usage-filter-badge">${u}</span>`:n`
                  <span class="usage-filter-badge">${L(`usage.filters.all`)}</span>
                `}
        </summary>
        <div class="usage-filter-popover">
          <div class="usage-filter-actions">
            <button
              class="btn btn--sm"
              @click=${t=>{t.preventDefault(),t.stopPropagation(),c.onQueryDraftChange(Sv(r.queryDraft,e,a))}}
              ?disabled=${l}
            >
              ${L(`usage.filters.selectAll`)}
            </button>
            <button
              class="btn btn--sm"
              @click=${t=>{t.preventDefault(),t.stopPropagation(),c.onQueryDraftChange(Sv(r.queryDraft,e,[]))}}
              ?disabled=${u===0}
            >
              ${L(`usage.filters.clear`)}
            </button>
          </div>
          <div class="usage-filter-options">
            ${a.map(t=>n`
                <label class="usage-filter-option">
                  <input
                    type="checkbox"
                    .checked=${s.has(yv(t))}
                    @change=${n=>{let i=n.target,a=`${e}:${t}`;c.onQueryDraftChange(i.checked?bv(r.queryDraft,a):xv(r.queryDraft,a))}}
                  />
                  <span>${t}</span>
                </label>
              `)}
          </div>
        </div>
      </details>
    `},I=iv(new Date);return n`
    <div class="usage-page">
      <section class="usage-page-header">
        <div class="usage-page-title">${L(`tabs.usage`)}</div>
        <div class="usage-page-subtitle">${L(`usage.page.subtitle`)}</div>
      </section>

      <section class="card usage-header ${a.headerPinned?`pinned`:``}">
        <div class="usage-header-row">
          <div class="usage-header-title">
            <div class="card-title usage-section-title">${L(`usage.filters.title`)}</div>
            ${t.loading?n`<span class="usage-refresh-indicator">${L(`usage.loading.badge`)}</span>`:i}
            ${N?n`<span class="usage-query-hint">${L(`usage.empty.hint`)}</span>`:i}
          </div>
          <div class="usage-header-metrics">
            ${k?n`
                    <span class="usage-metric-badge">
                      <strong>${Z(k.totalTokens)}</strong>
                      ${L(`usage.metrics.tokens`)}
                    </span>
                    <span class="usage-metric-badge">
                      <strong>${Q(k.totalCost)}</strong>
                      ${L(`usage.metrics.cost`)}
                    </span>
                    <span class="usage-metric-badge">
                      <strong>${re}</strong>
                      ${L(re===1?`usage.metrics.session`:`usage.metrics.sessions`)}
                    </span>
                  `:i}
            <button
              class="btn btn--sm usage-pin-btn ${a.headerPinned?`active`:``}"
              title=${a.headerPinned?L(`usage.filters.unpin`):L(`usage.filters.pin`)}
              @click=${c.onToggleHeaderPinned}
            >
              ${a.headerPinned?L(`usage.filters.pinned`):L(`usage.filters.pin`)}
            </button>
            <details
              class="usage-export-menu"
              @toggle=${e=>{let t=e.currentTarget;if(!t.open)return;let n=e=>{e.composedPath().includes(t)||(t.open=!1,window.removeEventListener(`click`,n,!0))};window.addEventListener(`click`,n,!0)}}
            >
              <summary class="btn btn--sm">${L(`usage.export.label`)} ▾</summary>
              <div class="usage-export-popover">
                <div class="usage-export-list">
                  <button
                    class="usage-export-item"
                    @click=${()=>fv(`openclaw-usage-sessions-${I}.csv`,hv(v),`text/csv`)}
                    ?disabled=${v.length===0}
                  >
                    ${L(`usage.export.sessionsCsv`)}
                  </button>
                  <button
                    class="usage-export-item"
                    @click=${()=>fv(`openclaw-usage-daily-${I}.csv`,gv(M),`text/csv`)}
                    ?disabled=${M.length===0}
                  >
                    ${L(`usage.export.dailyCsv`)}
                  </button>
                  <button
                    class="usage-export-item"
                    @click=${()=>fv(`openclaw-usage-${I}.json`,JSON.stringify({totals:k,sessions:v,daily:M,aggregates:j},null,2),`application/json`)}
                    ?disabled=${v.length===0&&M.length===0}
                  >
                    ${L(`usage.export.json`)}
                  </button>
                </div>
              </div>
            </details>
          </div>
        </div>

        <div class="usage-header-row">
          <div class="usage-controls">
            ${Tv(r.selectedDays,r.selectedHours,r.selectedSessions,t.sessions,c.onClearDays,c.onClearHours,c.onClearSessions,c.onClearFilters)}
            <div class="usage-presets">
              ${P.map(e=>n`
                  <button class="btn btn--sm" @click=${()=>se(e.days)}>
                    ${e.label}
                  </button>
                `)}
            </div>
            <div class="usage-date-range">
              <input
                class="usage-date-input"
                type="date"
                .value=${r.startDate}
                title=${L(`usage.filters.startDate`)}
                aria-label=${L(`usage.filters.startDate`)}
                @change=${e=>c.onStartDateChange(e.target.value)}
              />
              <span class="usage-separator">${L(`usage.filters.to`)}</span>
              <input
                class="usage-date-input"
                type="date"
                .value=${r.endDate}
                title=${L(`usage.filters.endDate`)}
                aria-label=${L(`usage.filters.endDate`)}
                @change=${e=>c.onEndDateChange(e.target.value)}
              />
            </div>
            <select
              class="usage-select"
              title=${L(`usage.filters.timeZone`)}
              aria-label=${L(`usage.filters.timeZone`)}
              .value=${r.timeZone}
              @change=${e=>c.onTimeZoneChange(e.target.value)}
            >
              <option value="local">${L(`usage.filters.timeZoneLocal`)}</option>
              <option value="utc">${L(`usage.filters.timeZoneUtc`)}</option>
            </select>
            <div class="chart-toggle">
              <button
                class="btn btn--sm toggle-btn ${d?`active`:``}"
                @click=${()=>l.onChartModeChange(`tokens`)}
              >
                ${L(`usage.metrics.tokens`)}
              </button>
              <button
                class="btn btn--sm toggle-btn ${d?``:`active`}"
                @click=${()=>l.onChartModeChange(`cost`)}
              >
                ${L(`usage.metrics.cost`)}
              </button>
            </div>
            <button
              class="btn btn--sm primary"
              @click=${c.onRefresh}
              ?disabled=${t.loading}
            >
              ${L(`common.refresh`)}
            </button>
          </div>
        </div>

        <div class="usage-query-section">
          <div class="usage-query-bar">
            <input
              class="usage-query-input"
              type="text"
              .value=${r.queryDraft}
              placeholder=${L(`usage.query.placeholder`)}
              @input=${e=>c.onQueryDraftChange(e.target.value)}
              @keydown=${e=>{e.key===`Enter`&&(e.preventDefault(),c.onApplyQuery())}}
            />
            <div class="usage-query-actions">
              <button
                class="btn btn--sm"
                @click=${c.onApplyQuery}
                ?disabled=${t.loading||!p&&!f}
              >
                ${L(`usage.query.apply`)}
              </button>
              ${p||f?n`
                      <button
                        class="btn btn--sm"
                        @click=${c.onClearQuery}
                      >
                        ${L(`usage.filters.clear`)}
                      </button>
                    `:i}
              <span class="usage-query-hint">
                ${f?L(`usage.query.matching`,{shown:String(v.length),total:String(A)}):L(`usage.query.inRange`,{total:String(A)})}
              </span>
            </div>
          </div>
          <div class="usage-filter-row">
            ${F(`agent`,L(`usage.filters.agent`),w)}
            ${F(`channel`,L(`usage.filters.channel`),T)}
            ${F(`provider`,L(`usage.filters.provider`),E)}
            ${F(`model`,L(`usage.filters.model`),D)}
            ${F(`tool`,L(`usage.filters.tool`),ee)}
            <span class="usage-query-hint">${L(`usage.query.tip`)}</span>
          </div>
          ${x.length>0?n`
                  <div class="usage-query-chips">
                    ${x.map(e=>{let t=e.raw;return n`
                        <span class="usage-query-chip">
                          ${t}
                          <button
                            title=${L(`usage.filters.remove`)}
                            @click=${()=>c.onQueryDraftChange(xv(r.queryDraft,t))}
                          >
                            ×
                          </button>
                        </span>
                      `})}
                  </div>
                `:i}
          ${b.length>0?n`
                  <div class="usage-query-suggestions">
                    ${b.map(e=>n`
                        <button
                          class="usage-query-suggestion"
                          @click=${()=>c.onQueryDraftChange(vv(r.queryDraft,e.value))}
                        >
                          ${e.label}
                        </button>
                      `)}
                  </div>
                `:i}
          ${y.length>0?n`
                  <div class="callout warning usage-callout usage-callout--tight">
                    ${y.join(` · `)}
                  </div>
                `:i}
        </div>

        ${t.error?n`<div class="callout danger usage-callout">${t.error}</div>`:i}

        ${t.sessionsLimitReached?n`
                <div class="callout warning usage-callout">
                  ${L(`usage.sessions.limitReached`)}
                </div>
              `:i}
      </section>

      ${N?Xv(c.onRefresh):n`
              ${jv(k,j,ae,oe,Q_(ie,r.timeZone),re,A)}

              ${rv(ie,r.timeZone,r.selectedHours,c.onSelectHour)}

              <div class="usage-grid">
                <div class="usage-grid-column">
                  <div class="card usage-left-card">
                    ${Ev(M,r.selectedDays,a.chartMode,a.dailyChartMode,l.onDailyChartModeChange,c.onSelectDay)}
                    ${k?Dv(k,a.chartMode):i}
                  </div>
                  ${Mv(v,r.selectedSessions,r.selectedDays,d,a.sessionSort,a.sessionSortDir,a.recentSessions,a.sessionsTab,u.onSelectSession,l.onSessionSortChange,l.onSessionSortDirChange,l.onSessionsTabChange,a.visibleColumns,A,c.onClearSessions)}
                </div>
                ${te?n`<div class="usage-grid-column">
                        ${Uv(te,o.timeSeries,o.timeSeriesLoading,o.timeSeriesMode,u.onTimeSeriesModeChange,o.timeSeriesBreakdownMode,u.onTimeSeriesBreakdownChange,o.timeSeriesCursorStart,o.timeSeriesCursorEnd,u.onTimeSeriesCursorRangeChange,r.startDate,r.endDate,r.selectedDays,o.sessionLogs,o.sessionLogsLoading,o.sessionLogsExpanded,u.onToggleSessionLogsExpanded,o.logFilters,u.onLogFilterRolesChange,u.onLogFilterToolsChange,u.onLogFilterHasToolsChange,u.onLogFilterQueryChange,u.onLogFilterClear,a.contextExpanded,u.onToggleContextExpanded,c.onClearSessions)}
                      </div>`:i}
              </div>
            `}
    </div>
  `}var Qv=null,$v=e=>{Qv&&clearTimeout(Qv),Qv=window.setTimeout(()=>void La(e),400)};function ey(e){return e.tab===`usage`?Zv({data:{loading:e.usageLoading,error:e.usageError,sessions:e.usageResult?.sessions??[],sessionsLimitReached:(e.usageResult?.sessions?.length??0)>=1e3,totals:e.usageResult?.totals??null,aggregates:e.usageResult?.aggregates??null,costDaily:e.usageCostSummary?.daily??[]},filters:{startDate:e.usageStartDate,endDate:e.usageEndDate,selectedSessions:e.usageSelectedSessions,selectedDays:e.usageSelectedDays,selectedHours:e.usageSelectedHours,query:e.usageQuery,queryDraft:e.usageQueryDraft,timeZone:e.usageTimeZone},display:{chartMode:e.usageChartMode,dailyChartMode:e.usageDailyChartMode,sessionSort:e.usageSessionSort,sessionSortDir:e.usageSessionSortDir,recentSessions:e.usageRecentSessions,sessionsTab:e.usageSessionsTab,visibleColumns:e.usageVisibleColumns,contextExpanded:e.usageContextExpanded,headerPinned:e.usageHeaderPinned},detail:{timeSeriesMode:e.usageTimeSeriesMode,timeSeriesBreakdownMode:e.usageTimeSeriesBreakdownMode,timeSeries:e.usageTimeSeries,timeSeriesLoading:e.usageTimeSeriesLoading,timeSeriesCursorStart:e.usageTimeSeriesCursorStart,timeSeriesCursorEnd:e.usageTimeSeriesCursorEnd,sessionLogs:e.usageSessionLogs,sessionLogsLoading:e.usageSessionLogsLoading,sessionLogsExpanded:e.usageSessionLogsExpanded,logFilters:{roles:e.usageLogFilterRoles,tools:e.usageLogFilterTools,hasTools:e.usageLogFilterHasTools,query:e.usageLogFilterQuery}},callbacks:{filters:{onStartDateChange:t=>{e.usageStartDate=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],$v(e)},onEndDateChange:t=>{e.usageEndDate=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],$v(e)},onRefresh:()=>La(e),onTimeZoneChange:t=>{e.usageTimeZone=t,e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],La(e)},onToggleHeaderPinned:()=>{e.usageHeaderPinned=!e.usageHeaderPinned},onSelectHour:(t,n)=>{if(n&&e.usageSelectedHours.length>0){let n=Array.from({length:24},(e,t)=>t),r=e.usageSelectedHours[e.usageSelectedHours.length-1],i=n.indexOf(r),a=n.indexOf(t);if(i!==-1&&a!==-1){let[t,r]=i<a?[i,a]:[a,i],o=n.slice(t,r+1);e.usageSelectedHours=[...new Set([...e.usageSelectedHours,...o])]}}else e.usageSelectedHours.includes(t)?e.usageSelectedHours=e.usageSelectedHours.filter(e=>e!==t):e.usageSelectedHours=[...e.usageSelectedHours,t]},onQueryDraftChange:t=>{e.usageQueryDraft=t,e.usageQueryDebounceTimer&&window.clearTimeout(e.usageQueryDebounceTimer),e.usageQueryDebounceTimer=window.setTimeout(()=>{e.usageQuery=e.usageQueryDraft,e.usageQueryDebounceTimer=null},250)},onApplyQuery:()=>{e.usageQueryDebounceTimer&&=(window.clearTimeout(e.usageQueryDebounceTimer),null),e.usageQuery=e.usageQueryDraft},onClearQuery:()=>{e.usageQueryDebounceTimer&&=(window.clearTimeout(e.usageQueryDebounceTimer),null),e.usageQueryDraft=``,e.usageQuery=``},onSelectDay:(t,n)=>{if(n&&e.usageSelectedDays.length>0){let n=(e.usageCostSummary?.daily??[]).map(e=>e.date),r=e.usageSelectedDays[e.usageSelectedDays.length-1],i=n.indexOf(r),a=n.indexOf(t);if(i!==-1&&a!==-1){let[t,r]=i<a?[i,a]:[a,i],o=n.slice(t,r+1);e.usageSelectedDays=[...new Set([...e.usageSelectedDays,...o])]}}else e.usageSelectedDays.includes(t)?e.usageSelectedDays=e.usageSelectedDays.filter(e=>e!==t):e.usageSelectedDays=[t]},onClearDays:()=>{e.usageSelectedDays=[]},onClearHours:()=>{e.usageSelectedHours=[]},onClearSessions:()=>{e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null},onClearFilters:()=>{e.usageSelectedDays=[],e.usageSelectedHours=[],e.usageSelectedSessions=[],e.usageTimeSeries=null,e.usageSessionLogs=null}},display:{onChartModeChange:t=>{e.usageChartMode=t},onDailyChartModeChange:t=>{e.usageDailyChartMode=t},onSessionSortChange:t=>{e.usageSessionSort=t},onSessionSortDirChange:t=>{e.usageSessionSortDir=t},onSessionsTabChange:t=>{e.usageSessionsTab=t},onToggleColumn:t=>{e.usageVisibleColumns.includes(t)?e.usageVisibleColumns=e.usageVisibleColumns.filter(e=>e!==t):e.usageVisibleColumns=[...e.usageVisibleColumns,t]}},details:{onToggleContextExpanded:()=>{e.usageContextExpanded=!e.usageContextExpanded},onToggleSessionLogsExpanded:()=>{e.usageSessionLogsExpanded=!e.usageSessionLogsExpanded},onLogFilterRolesChange:t=>{e.usageLogFilterRoles=t},onLogFilterToolsChange:t=>{e.usageLogFilterTools=t},onLogFilterHasToolsChange:t=>{e.usageLogFilterHasTools=t},onLogFilterQueryChange:t=>{e.usageLogFilterQuery=t},onLogFilterClear:()=>{e.usageLogFilterRoles=[],e.usageLogFilterTools=[],e.usageLogFilterHasTools=!1,e.usageLogFilterQuery=``},onSelectSession:(t,n)=>{if(e.usageTimeSeries=null,e.usageSessionLogs=null,e.usageRecentSessions=[t,...e.usageRecentSessions.filter(e=>e!==t)].slice(0,8),n&&e.usageSelectedSessions.length>0){let n=e.usageChartMode===`tokens`,r=[...e.usageResult?.sessions??[]].toSorted((e,t)=>{let r=n?e.usage?.totalTokens??0:e.usage?.totalCost??0;return(n?t.usage?.totalTokens??0:t.usage?.totalCost??0)-r}).map(e=>e.key),i=e.usageSelectedSessions[e.usageSelectedSessions.length-1],a=r.indexOf(i),o=r.indexOf(t);if(a!==-1&&o!==-1){let[t,n]=a<o?[a,o]:[o,a],i=r.slice(t,n+1);e.usageSelectedSessions=[...new Set([...e.usageSelectedSessions,...i])]}}else e.usageSelectedSessions.length===1&&e.usageSelectedSessions[0]===t?e.usageSelectedSessions=[]:e.usageSelectedSessions=[t];e.usageTimeSeriesCursorStart=null,e.usageTimeSeriesCursorEnd=null,e.usageSelectedSessions.length===1&&(Ra(e,e.usageSelectedSessions[0]),za(e,e.usageSelectedSessions[0]))},onTimeSeriesModeChange:t=>{e.usageTimeSeriesMode=t},onTimeSeriesBreakdownChange:t=>{e.usageTimeSeriesBreakdownMode=t},onTimeSeriesCursorRangeChange:(t,n)=>{e.usageTimeSeriesCursorStart=t,e.usageTimeSeriesCursorEnd=n}}}}):i}function ty(e){return e.sessionsResult?.sessions?.find(t=>t.key===e.sessionKey)}function ny(e){let t=e.chatModelCatalog??[],n=e.chatModelOverrides[e.sessionKey];if(n)return ei(n,t);if(n===null)return``;let r=ty(e);return ii(r?.model,r?.modelProvider,t)}function ry(e){return ii(e.sessionsResult?.defaults?.model,e.sessionsResult?.defaults?.modelProvider,e.chatModelCatalog??[])}function iy(e,t,n){let r=new Set,i=[],a=(e,t)=>{let n=e.trim();if(!n)return;let a=n.toLowerCase();r.has(a)||(r.add(a),i.push({value:n,label:t??n}))};for(let t of e){let e=oi(t);a(e.value,e.label)}return t&&a(t),n&&a(n),i}function ay(e){let t=ny(e),n=ry(e),r=ai(n);return{currentOverride:t,defaultModel:n,defaultDisplay:r,defaultLabel:n?`Default (${r})`:`Default model`,options:iy(e.chatModelCatalog??[],t,n)}}function oy(e){let t=e.hello?.snapshot;return t?.sessionDefaults?.mainSessionKey?.trim()||t?.sessionDefaults?.mainKey?.trim()||`main`}function sy(e,t){e.sessionKey=t,e.chatMessage=``,e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:t,lastActiveSessionKey:t})}function cy(e,t,r){let a=Ga(t,e.basePath),o=e.tab===t,s=r?.collapsed??e.settings.navCollapsed;return n`
    <a
      href=${a}
      class="nav-item ${o?`nav-item--active`:``}"
      @click=${n=>{if(!(n.defaultPrevented||n.button!==0||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)){if(n.preventDefault(),t===`chat`){let t=oy(e);e.sessionKey!==t&&(sy(e,t),e.loadAssistantIdentity())}e.setTab(t)}}}
      title=${Ya(t)}
    >
      <span class="nav-item__icon" aria-hidden="true">${W[Ja(t)]}</span>
      ${s?i:n`<span class="nav-item__text">${Ya(t)}</span>`}
    </a>
  `}function ly(e){return n`
    <span style="position: relative; display: inline-flex; align-items: center;">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      ${e>0?n`<span
            style="
              position: absolute;
              top: -5px;
              right: -6px;
              background: var(--color-accent, #6366f1);
              color: #fff;
              border-radius: var(--radius-full);
              font-size: 9px;
              line-height: 1;
              padding: 1px 3px;
              pointer-events: none;
            "
          >${e}</span
          >`:``}
    </span>
  `}function uy(e){let t=Cy(e,e.sessionKey,e.sessionsResult),r=hy(e);return n`
    <div class="chat-controls__session-row">
      <label class="field chat-controls__session">
        <select
          .value=${e.sessionKey}
          ?disabled=${!e.connected||t.length===0}
          @change=${t=>{let n=t.target.value;e.sessionKey!==n&&py(e,n)}}
        >
          ${Xo(t,e=>e.id,e=>n`<optgroup label=${e.label}>
                ${Xo(e.options,e=>e.key,e=>n`<option value=${e.key} title=${e.title}>
                      ${e.label}
                    </option>`)}
              </optgroup>`)}
        </select>
      </label>
      ${r}
    </div>
  `}function dy(e){let t=e.sessionsHideCron??!0,r=t?wy(e.sessionKey,e.sessionsResult):0,i=e.onboarding,a=e.onboarding,o=e.onboarding?!1:e.settings.chatShowThinking,s=e.onboarding?!0:e.settings.chatShowToolCalls,c=e.onboarding?!0:e.settings.chatFocusMode,l=n`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,u=n`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
      <path d="M21 3v5h-5"></path>
    </svg>
  `,d=n`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 7V4h3"></path>
      <path d="M20 7V4h-3"></path>
      <path d="M4 17v3h3"></path>
      <path d="M20 17v3h-3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;return n`
    <div class="chat-controls">
      <button
        class="btn btn--sm btn--icon"
        ?disabled=${e.chatLoading||!e.connected}
        @click=${async()=>{let t=e;t.chatManualRefreshInFlight=!0,t.chatNewMessagesBelow=!1,await t.updateComplete,t.resetToolStream();try{await Zg(e,{scheduleScroll:!1}),t.scrollToBottom({smooth:!0})}finally{requestAnimationFrame(()=>{t.chatManualRefreshInFlight=!1,t.chatNewMessagesBelow=!1})}}}
        title=${L(`chat.refreshTitle`)}
      >
        ${u}
      </button>
      <span class="chat-controls__separator">|</span>
      <button
        class="btn btn--sm btn--icon ${o?`active`:``}"
        ?disabled=${i}
        @click=${()=>{i||e.applySettings({...e.settings,chatShowThinking:!e.settings.chatShowThinking})}}
        aria-pressed=${o}
        title=${L(i?`chat.onboardingDisabled`:`chat.thinkingToggle`)}
      >
        ${W.brain}
      </button>
      <button
        class="btn btn--sm btn--icon ${s?`active`:``}"
        ?disabled=${i}
        @click=${()=>{i||e.applySettings({...e.settings,chatShowToolCalls:!e.settings.chatShowToolCalls})}}
        aria-pressed=${s}
        title=${L(i?`chat.onboardingDisabled`:`chat.toolCallsToggle`)}
      >
        ${l}
      </button>
      <button
        class="btn btn--sm btn--icon ${c?`active`:``}"
        ?disabled=${a}
        @click=${()=>{a||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
        aria-pressed=${c}
        title=${L(a?`chat.onboardingDisabled`:`chat.focusToggle`)}
      >
        ${d}
      </button>
      <button
        class="btn btn--sm btn--icon ${t?`active`:``}"
        @click=${()=>{e.sessionsHideCron=!t}}
        aria-pressed=${t}
        title=${t?r>0?L(`chat.showCronSessionsHidden`,{count:String(r)}):L(`chat.showCronSessions`):L(`chat.hideCronSessions`)}
      >
        ${ly(r)}
      </button>
    </div>
  `}function fy(e){let t=Cy(e,e.sessionKey,e.sessionsResult),r=e.onboarding,i=e.onboarding,a=e.onboarding?!1:e.settings.chatShowThinking,o=e.onboarding?!0:e.settings.chatShowToolCalls,s=e.onboarding?!0:e.settings.chatFocusMode,c=n`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,l=n`
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4 7V4h3"></path>
      <path d="M20 7V4h-3"></path>
      <path d="M4 17v3h3"></path>
      <path d="M20 17v3h-3"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;return n`
    <div class="chat-mobile-controls-wrapper">
      <button
        class="btn btn--sm btn--icon chat-controls-mobile-toggle"
        @click=${e=>{e.stopPropagation();let t=e.currentTarget.nextElementSibling;if(t&&t.classList.toggle(`open`)){let e=()=>{t.classList.remove(`open`),document.removeEventListener(`click`,e)};setTimeout(()=>document.addEventListener(`click`,e,{once:!0}),0)}}}
        title="Chat settings"
        aria-label="Chat settings"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </button>
      <div class="chat-controls-dropdown" @click=${e=>{e.stopPropagation()}}>
        <div class="chat-controls">
          <label class="field chat-controls__session">
            <select
              .value=${e.sessionKey}
              @change=${t=>{let n=t.target.value;py(e,n)}}
            >
              ${t.map(e=>n`
                  <optgroup label=${e.label}>
                    ${e.options.map(e=>n`
                        <option value=${e.key} title=${e.title}>
                          ${e.label}
                        </option>
                      `)}
                  </optgroup>
                `)}
            </select>
          </label>
          <div class="chat-controls__thinking">
            <button
              class="btn btn--sm btn--icon ${a?`active`:``}"
              ?disabled=${r}
              @click=${()=>{r||e.applySettings({...e.settings,chatShowThinking:!e.settings.chatShowThinking})}}
              aria-pressed=${a}
              title=${L(`chat.thinkingToggle`)}
            >
              ${W.brain}
            </button>
            <button
              class="btn btn--sm btn--icon ${o?`active`:``}"
              ?disabled=${r}
              @click=${()=>{r||e.applySettings({...e.settings,chatShowToolCalls:!e.settings.chatShowToolCalls})}}
              aria-pressed=${o}
              title=${L(`chat.toolCallsToggle`)}
            >
              ${c}
            </button>
            <button
              class="btn btn--sm btn--icon ${s?`active`:``}"
              ?disabled=${i}
              @click=${()=>{i||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})}}
              aria-pressed=${s}
              title=${L(`chat.focusToggle`)}
            >
              ${l}
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function py(e,t){e.sessionKey=t,e.chatMessage=``,e.chatStream=null,e.chatQueue=[],e.chatStreamStartedAt=null,e.chatRunId=null,e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:t,lastActiveSessionKey:t}),e.loadAssistantIdentity(),wh(e,t,!0),kg(e),my(e)}async function my(e){await la(e,{activeMinutes:0,limit:0,includeGlobal:!0,includeUnknown:!0})}function hy(e){let{currentOverride:t,defaultLabel:r,options:i}=ay(e),a=e.chatLoading||e.chatSending||!!e.chatRunId||e.chatStream!==null;return n`
    <label class="field chat-controls__session chat-controls__model">
      <select
        data-chat-model-select="true"
        aria-label="Chat model"
        ?disabled=${!e.connected||a||e.chatModelsLoading&&i.length===0||!e.client}
        @change=${async t=>{await gy(e,t.target.value.trim())}}
      >
        <option value="" ?selected=${t===``}>${r}</option>
        ${Xo(i,e=>e.value,e=>n`<option value=${e.value} ?selected=${e.value===t}>
              ${e.label}
            </option>`)}
      </select>
    </label>
  `}async function gy(e,t){if(!e.client||!e.connected||ny(e)===t)return;let n=e.sessionKey,r=e.chatModelOverrides[n];e.lastError=null,e.chatModelOverrides={...e.chatModelOverrides,[n]:$r(t)};try{await e.client.request(`sessions.patch`,{key:n,model:t||null}),di(e),await my(e)}catch(t){e.chatModelOverrides={...e.chatModelOverrides,[n]:r},e.lastError=`Failed to set model: ${String(t)}`}}var _y={bluebubbles:`iMessage`,telegram:`Telegram`,discord:`Discord`,signal:`Signal`,slack:`Slack`,whatsapp:`WhatsApp`,matrix:`Matrix`,email:`Email`,sms:`SMS`},vy=Object.keys(_y);function yy(e){return e.charAt(0).toUpperCase()+e.slice(1)}function by(e){let t=e.toLowerCase();if(e===`main`||e===`agent:main:main`)return{prefix:``,fallbackName:`Main Session`};if(e.includes(`:subagent:`))return{prefix:`Subagent:`,fallbackName:`Subagent:`};if(t.startsWith(`cron:`)||e.includes(`:cron:`))return{prefix:`Cron:`,fallbackName:`Cron Job:`};let n=e.match(/^agent:[^:]+:([^:]+):direct:(.+)$/);if(n){let e=n[1],t=n[2];return{prefix:``,fallbackName:`${_y[e]??yy(e)} · ${t}`}}let r=e.match(/^agent:[^:]+:([^:]+):group:(.+)$/);if(r){let e=r[1];return{prefix:``,fallbackName:`${_y[e]??yy(e)} Group`}}for(let t of vy)if(e===t||e.startsWith(`${t}:`))return{prefix:``,fallbackName:`${_y[t]} Session`};return{prefix:``,fallbackName:e}}function xy(e,t){let n=t?.label?.trim()||``,r=t?.displayName?.trim()||``,{prefix:i,fallbackName:a}=by(e),o=e=>i?RegExp(`^${i.replace(/[.*+?^${}()|[\\]\\]/g,`\\$&`)}\\s*`,`i`).test(e)?e:`${i} ${e}`:e;return n&&n!==e?o(n):r&&r!==e?o(r):a}function Sy(e){let t=e.trim().toLowerCase();if(!t)return!1;if(t.startsWith(`cron:`))return!0;if(!t.startsWith(`agent:`))return!1;let n=t.split(`:`).filter(Boolean);return n.length<3?!1:n.slice(2).join(`:`).startsWith(`cron:`)}function Cy(e,t,n){let r=n?.sessions??[],i=e.sessionsHideCron??!0,a=new Map;for(let e of r)a.set(e.key,e);let o=new Set,s=new Map,c=(e,t)=>{let n=s.get(e);if(n)return n;let r={id:e,label:t,options:[]};return s.set(e,r),r},l=t=>{if(!t||o.has(t))return;o.add(t);let n=a.get(t),r=C(t),i=r?c(`agent:${r.agentId.toLowerCase()}`,Ty(e,r.agentId)):c(`other`,`Other Sessions`),s=r?.rest?.trim()||t,l=Ey(t,n,r?.rest);i.options.push({key:t,label:l,scopeLabel:s,title:t})};for(let e of r)e.key!==t&&(e.kind===`global`||e.kind===`unknown`)||i&&e.key!==t&&Sy(e.key)||l(e.key);l(t);for(let e of s.values()){let t=new Map;for(let n of e.options)t.set(n.label,(t.get(n.label)??0)+1);for(let n of e.options)(t.get(n.label)??0)>1&&n.scopeLabel!==n.label&&(n.label=`${n.label} · ${n.scopeLabel}`)}let u=Array.from(s.values()).flatMap(e=>e.options.map(t=>({groupLabel:e.label,option:t}))),d=new Map(u.map(({option:e})=>[e,e.label])),f=()=>{let e=new Map;for(let{option:t}of u){let n=d.get(t)??t.label;e.set(n,(e.get(n)??0)+1)}return e},p=(e,t)=>{let n=t.trim();return n?e===n||e.endsWith(` · ${n}`)||e.endsWith(` / ${n}`):!1},m=f();for(let{groupLabel:e,option:t}of u){let n=d.get(t)??t.label;if((m.get(n)??0)<=1)continue;let r=`${e} / `;n.startsWith(r)||d.set(t,`${e} / ${n}`)}let h=f();for(let{option:e}of u){let t=d.get(e)??e.label;(h.get(t)??0)<=1||p(t,e.scopeLabel)||d.set(e,`${t} · ${e.scopeLabel}`)}let g=f();for(let{option:e}of u){let t=d.get(e)??e.label;(g.get(t)??0)<=1||d.set(e,`${t} · ${e.key}`)}for(let{option:e}of u)e.label=d.get(e)??e.label;return Array.from(s.values())}function wy(e,t){return t?.sessions?t.sessions.filter(t=>Sy(t.key)&&t.key!==e).length:0}function Ty(e,t){let n=t.trim().toLowerCase(),r=(e.agentsList?.agents??[]).find(e=>e.id.trim().toLowerCase()===n),i=r?.identity?.name?.trim()||r?.name?.trim()||``;return i&&i!==t?`${i} (${t})`:t}function Ey(e,t,n){let r=n?.trim()||e;if(!t)return r;let i=t.label?.trim()||``,a=t.displayName?.trim()||``;return i&&i!==e||a&&a!==e?xy(e,t):r}var Dy=[{id:`system`,label:`System`,short:`SYS`},{id:`light`,label:`Light`,short:`LIGHT`},{id:`dark`,label:`Dark`,short:`DARK`}];function Oy(e){let t=e=>e===`system`?W.monitor:e===`light`?W.sun:W.moon,r=(t,n)=>{t!==e.themeMode&&e.setThemeMode(t,{element:n.currentTarget})};return n`
    <div class="topbar-theme-mode" role="group" aria-label="Color mode">
      ${Dy.map(i=>n`
          <button
            type="button"
            class="topbar-theme-mode__btn ${i.id===e.themeMode?`topbar-theme-mode__btn--active`:``}"
            title=${i.label}
            aria-label="Color mode: ${i.label}"
            aria-pressed=${i.id===e.themeMode}
            @click=${e=>r(i.id,e)}
          >
            ${t(i.id)}
          </button>
        `)}
    </div>
  `}function ky(e){let t=e.connected?L(`common.online`):L(`common.offline`);return n`
    <span
      class="sidebar-version__status ${e.connected?`sidebar-connection-status--online`:`sidebar-connection-status--offline`}"
      role="img"
      aria-live="polite"
      aria-label="Gateway status: ${t}"
      title="Gateway status: ${t}"
    ></span>
  `}function Ay(e,t){if(!e)return e;let n=e.files.some(e=>e.name===t.name)?e.files.map(e=>e.name===t.name?t:e):[...e.files,t];return{...e,files:n}}async function jy(e,t){if(!(!e.client||!e.connected||e.agentFilesLoading)){e.agentFilesLoading=!0,e.agentFilesError=null;try{let n=await e.client.request(`agents.files.list`,{agentId:t});n&&(e.agentFilesList=n,e.agentFileActive&&!n.files.some(t=>t.name===e.agentFileActive)&&(e.agentFileActive=null))}catch(t){e.agentFilesError=String(t)}finally{e.agentFilesLoading=!1}}}async function My(e,t,n,r){if(!(!e.client||!e.connected||e.agentFilesLoading)&&!(!r?.force&&Object.hasOwn(e.agentFileContents,n))){e.agentFilesLoading=!0,e.agentFilesError=null;try{let i=await e.client.request(`agents.files.get`,{agentId:t,name:n});if(i?.file){let t=i.file.content??``,a=e.agentFileContents[n]??``,o=e.agentFileDrafts[n],s=r?.preserveDraft??!0;e.agentFilesList=Ay(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:t},(!s||!Object.hasOwn(e.agentFileDrafts,n)||o===a)&&(e.agentFileDrafts={...e.agentFileDrafts,[n]:t})}}catch(t){e.agentFilesError=String(t)}finally{e.agentFilesLoading=!1}}}async function Ny(e,t,n,r){if(!(!e.client||!e.connected||e.agentFileSaving)){e.agentFileSaving=!0,e.agentFilesError=null;try{let i=await e.client.request(`agents.files.set`,{agentId:t,name:n,content:r});i?.file&&(e.agentFilesList=Ay(e.agentFilesList,i.file),e.agentFileContents={...e.agentFileContents,[n]:r},e.agentFileDrafts={...e.agentFileDrafts,[n]:r})}catch(t){e.agentFilesError=String(t)}finally{e.agentFileSaving=!1}}}var Py=class extends c{constructor(...e){super(...e),this.tab=`overview`}createRenderRoot(){return this}render(){return n`
      <div class="dashboard-header">
        <div class="dashboard-header__breadcrumb">
          <span
            class="dashboard-header__breadcrumb-link"
            @click=${()=>this.dispatchEvent(new CustomEvent(`navigate`,{detail:`overview`,bubbles:!0,composed:!0}))}
          >
            OpenClaw
          </span>
          <span class="dashboard-header__breadcrumb-sep">›</span>
          <span class="dashboard-header__breadcrumb-current">${Ya(this.tab)}</span>
        </div>
        <div class="dashboard-header__actions">
          <slot></slot>
        </div>
      </div>
    `}};Y([x()],Py.prototype,`tab`,void 0),Py=Y([v(`dashboard-header`)],Py);var Fy=[`noopener`,`noreferrer`],Iy=`_blank`;function Ly(e){let t=[],n=new Set(Fy);for(let r of(e??``).split(/\s+/)){let e=r.trim().toLowerCase();!e||n.has(e)||(n.add(e),t.push(e))}return[...Fy,...t].join(` `)}var Ry=[...dm.map(e=>({id:`slash:${e.name}`,label:`/${e.name}`,icon:e.icon??`terminal`,category:`search`,action:`/${e.name}`,description:e.description})),{id:`nav-overview`,label:`Overview`,icon:`barChart`,category:`navigation`,action:`nav:overview`},{id:`nav-sessions`,label:`Sessions`,icon:`fileText`,category:`navigation`,action:`nav:sessions`},{id:`nav-cron`,label:`Scheduled`,icon:`scrollText`,category:`navigation`,action:`nav:cron`},{id:`nav-skills`,label:`Skills`,icon:`zap`,category:`navigation`,action:`nav:skills`},{id:`nav-config`,label:`Settings`,icon:`settings`,category:`navigation`,action:`nav:config`},{id:`nav-agents`,label:`Agents`,icon:`folder`,category:`navigation`,action:`nav:agents`},{id:`skill-shell`,label:`Shell Command`,icon:`monitor`,category:`skills`,action:`/skill shell`,description:`Run shell`},{id:`skill-debug`,label:`Debug Mode`,icon:`bug`,category:`skills`,action:`/verbose full`,description:`Toggle debug`}];function zy(e){if(!e)return Ry;let t=e.toLowerCase();return Ry.filter(e=>e.label.toLowerCase().includes(t)||(e.description?.toLowerCase().includes(t)??!1))}function By(e){let t=new Map;for(let n of e){let e=t.get(n.category)??[];e.push(n),t.set(n.category,e)}return[...t.entries()]}var Vy=null;function Hy(){Vy=document.activeElement}function Uy(){Vy&&Vy instanceof HTMLElement&&requestAnimationFrame(()=>Vy&&Vy.focus()),Vy=null}function Wy(e,t){e.action.startsWith(`nav:`)?t.onNavigate(e.action.slice(4)):t.onSlashCommand(e.action),t.onToggle(),Uy()}function Gy(){requestAnimationFrame(()=>{document.querySelector(`.cmd-palette__item--active`)?.scrollIntoView({block:`nearest`})})}function Ky(e,t){let n=zy(t.query);if(!(n.length===0&&(e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`Enter`)))switch(e.key){case`ArrowDown`:e.preventDefault(),t.onActiveIndexChange((t.activeIndex+1)%n.length),Gy();break;case`ArrowUp`:e.preventDefault(),t.onActiveIndexChange((t.activeIndex-1+n.length)%n.length),Gy();break;case`Enter`:e.preventDefault(),n[t.activeIndex]&&Wy(n[t.activeIndex],t);break;case`Escape`:e.preventDefault(),t.onToggle(),Uy();break}}var qy={search:`Search`,navigation:`Navigation`,skills:`Skills`};function Jy(e){e&&(Hy(),requestAnimationFrame(()=>e.focus()))}function Yy(e){if(!e.open)return i;let t=zy(e.query),r=By(t);return n`
    <div class="cmd-palette-overlay" @click=${()=>{e.onToggle(),Uy()}}>
      <div
        class="cmd-palette"
        @click=${e=>e.stopPropagation()}
        @keydown=${t=>Ky(t,e)}
      >
        <input
          ${Jo(Jy)}
          class="cmd-palette__input"
          placeholder="${L(`overview.palette.placeholder`)}"
          .value=${e.query}
          @input=${t=>{e.onQueryChange(t.target.value),e.onActiveIndexChange(0)}}
        />
        <div class="cmd-palette__results">
          ${r.length===0?n`<div class="cmd-palette__empty">
                  <span class="nav-item__icon" style="opacity:0.3;width:20px;height:20px">${W.search}</span>
                  <span>${L(`overview.palette.noResults`)}</span>
                </div>`:r.map(([r,a])=>n`
                <div class="cmd-palette__group-label">${qy[r]??r}</div>
                ${a.map(r=>{let a=t.indexOf(r);return n`
                    <div
                      class="cmd-palette__item ${a===e.activeIndex?`cmd-palette__item--active`:``}"
                      @click=${t=>{t.stopPropagation(),Wy(r,e)}}
                      @mouseenter=${()=>e.onActiveIndexChange(a)}
                    >
                      <span class="nav-item__icon">${W[r.icon]}</span>
                      <span>${r.label}</span>
                      ${r.description?n`<span class="cmd-palette__item-desc muted">${r.description}</span>`:i}
                    </div>
                  `})}
              `)}
        </div>
        <div class="cmd-palette__footer">
          <span><kbd>↑↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  `}var Xy=new Set([`title`,`description`,`default`,`nullable`,`tags`,`x-tags`]);function Zy(e){return Object.keys(e??{}).filter(e=>!Xy.has(e)).length===0}function Qy(e){if(e===void 0)return``;try{return JSON.stringify(e,null,2)??``}catch{return``}}var $y={chevronDown:n`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,plus:n`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,minus:n`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  `,trash:n`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    </svg>
  `,edit:n`
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  `};function eb(e){let t=On(e.value,e.path,e.hints),n=t&&(e.revealSensitive||(e.isSensitivePathRevealed?.(e.path)??!1));return{isSensitive:t,isRedacted:t&&!n,isRevealed:n,canReveal:t}}function tb(e){let{state:t}=e;return!t.isSensitive||!e.onToggleSensitivePath?i:n`
    <button
      type="button"
      class="btn btn--icon ${t.isRevealed?`active`:``}"
      style="width:28px;height:28px;padding:0;"
      title=${t.canReveal?t.isRevealed?`Hide value`:`Reveal value`:`Disable stream mode to reveal value`}
      aria-label=${t.canReveal?t.isRevealed?`Hide value`:`Reveal value`:`Disable stream mode to reveal value`}
      aria-pressed=${t.isRevealed}
      ?disabled=${e.disabled||!t.canReveal}
      @click=${()=>e.onToggleSensitivePath?.(e.path)}
    >
      ${t.isRevealed?W.eye:W.eyeOff}
    </button>
  `}function nb(e){return!!(e&&(e.text.length>0||e.tags.length>0))}function rb(e){let t=[],n=new Set;return{text:e.trim().replace(/(^|\s)tag:([^\s]+)/gi,(e,r,i)=>{let a=i.trim().toLowerCase();return a&&!n.has(a)&&(n.add(a),t.push(a)),r}).trim().toLowerCase(),tags:t}}function ib(e){if(!Array.isArray(e))return[];let t=new Set,n=[];for(let r of e){if(typeof r!=`string`)continue;let e=r.trim();if(!e)continue;let i=e.toLowerCase();t.has(i)||(t.add(i),n.push(e))}return n}function ab(e,t,n){let r=vn(e,n),i=r?.label??t.title??yn(String(e.at(-1))),a=r?.help??t.description,o=ib(t[`x-tags`]??t.tags),s=ib(r?.tags);return{label:i,help:a,tags:s.length>0?s:o}}function ob(e,t){if(!e)return!0;for(let n of t)if(n&&n.toLowerCase().includes(e))return!0;return!1}function sb(e,t){if(e.length===0)return!0;let n=new Set(t.map(e=>e.toLowerCase()));return e.every(e=>n.has(e))}function cb(e){let{schema:t,path:n,hints:r,criteria:i}=e;if(!nb(i))return!0;let{label:a,help:o,tags:s}=ab(n,t,r);if(!sb(i.tags,s))return!1;if(!i.text)return!0;let c=n.filter(e=>typeof e==`string`).join(`.`),l=t.enum&&t.enum.length>0?t.enum.map(e=>String(e)).join(` `):``;return ob(i.text,[a,o,t.title,t.description,c,l])}function lb(e){let{schema:t,value:n,path:r,hints:i,criteria:a}=e;if(!nb(a)||cb({schema:t,path:r,hints:i,criteria:a}))return!0;let o=hn(t);if(o===`object`){let e=n??t.default,o=e&&typeof e==`object`&&!Array.isArray(e)?e:{},s=t.properties??{};for(let[e,t]of Object.entries(s))if(lb({schema:t,value:o[e],path:[...r,e],hints:i,criteria:a}))return!0;let c=t.additionalProperties;if(c&&typeof c==`object`){let e=new Set(Object.keys(s));for(let[t,n]of Object.entries(o))if(!e.has(t)&&lb({schema:c,value:n,path:[...r,t],hints:i,criteria:a}))return!0}return!1}if(o===`array`){let e=Array.isArray(t.items)?t.items[0]:t.items;if(!e)return!1;let o=Array.isArray(n)?n:Array.isArray(t.default)?t.default:[];if(o.length===0)return!1;for(let t=0;t<o.length;t+=1)if(lb({schema:e,value:o[t],path:[...r,t],hints:i,criteria:a}))return!0}return!1}function ub(e){return e.length===0?i:n`
    <div class="cfg-tags">
      ${e.map(e=>n`<span class="cfg-tag">${e}</span>`)}
    </div>
  `}function db(e){let{schema:t,value:r,path:a,hints:o,unsupported:s,disabled:c,onPatch:l}=e,u=e.showLabel??!0,d=hn(t),{label:f,help:p,tags:m}=ab(a,t,o),h=_n(a),g=e.searchCriteria;if(s.has(h))return n`<div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${f}</div>
      <div class="cfg-field__error">Unsupported schema node. Use Raw mode.</div>
    </div>`;if(g&&nb(g)&&!lb({schema:t,value:r,path:a,hints:o,criteria:g}))return i;if(t.anyOf||t.oneOf){let s=(t.anyOf??t.oneOf??[]).filter(e=>!(e.type===`null`||Array.isArray(e.type)&&e.type.includes(`null`)));if(s.length===1)return db({...e,schema:s[0]});let d=s.map(e=>{if(e.const!==void 0)return e.const;if(e.enum&&e.enum.length===1)return e.enum[0]}),h=d.every(e=>e!==void 0);if(h&&d.length>0&&d.length<=5){let e=r??t.default;return n`
        <div class="cfg-field">
          ${u?n`<label class="cfg-field__label">${f}</label>`:i}
          ${p?n`<div class="cfg-field__help">${p}</div>`:i}
          ${ub(m)}
          <div class="cfg-segmented">
            ${d.map(t=>n`
              <button
                type="button"
                class="cfg-segmented__btn ${t===e||String(t)===String(e)?`active`:``}"
                ?disabled=${c}
                @click=${()=>l(a,t)}
              >
                ${String(t)}
              </button>
            `)}
          </div>
        </div>
      `}if(h&&d.length>5)return mb({...e,options:d,value:r??t.default});let g=new Set(s.map(e=>hn(e)).filter(Boolean)),_=new Set([...g].map(e=>e===`integer`?`number`:e));if([..._].every(e=>[`string`,`number`,`boolean`].includes(e))){let n=_.has(`string`),r=_.has(`number`);if(_.has(`boolean`)&&_.size===1)return db({...e,schema:{...t,type:`boolean`,anyOf:void 0,oneOf:void 0}});if(n||r)return fb({...e,inputType:r&&!n?`number`:`text`})}return hb({schema:t,value:r,path:a,hints:o,disabled:c,showLabel:u,revealSensitive:e.revealSensitive??!1,isSensitivePathRevealed:e.isSensitivePathRevealed,onToggleSensitivePath:e.onToggleSensitivePath,onPatch:l})}if(t.enum){let o=t.enum;if(o.length<=5){let e=r??t.default;return n`
        <div class="cfg-field">
          ${u?n`<label class="cfg-field__label">${f}</label>`:i}
          ${p?n`<div class="cfg-field__help">${p}</div>`:i}
          ${ub(m)}
          <div class="cfg-segmented">
            ${o.map(t=>n`
              <button
                type="button"
                class="cfg-segmented__btn ${t===e||String(t)===String(e)?`active`:``}"
                ?disabled=${c}
                @click=${()=>l(a,t)}
              >
                ${String(t)}
              </button>
            `)}
          </div>
        </div>
      `}return mb({...e,options:o,value:r??t.default})}if(d===`object`)return gb(e);if(d===`array`)return _b(e);if(d===`boolean`){let e=typeof r==`boolean`?r:typeof t.default==`boolean`?t.default:!1;return n`
      <label class="cfg-toggle-row ${c?`disabled`:``}">
        <div class="cfg-toggle-row__content">
          <span class="cfg-toggle-row__label">${f}</span>
          ${p?n`<span class="cfg-toggle-row__help">${p}</span>`:i}
          ${ub(m)}
        </div>
        <div class="cfg-toggle">
          <input
            type="checkbox"
            .checked=${e}
            ?disabled=${c}
            @change=${e=>l(a,e.target.checked)}
          />
          <span class="cfg-toggle__track"></span>
        </div>
      </label>
    `}return d===`number`||d===`integer`?pb(e):d===`string`?fb({...e,inputType:`text`}):n`
    <div class="cfg-field cfg-field--error">
      <div class="cfg-field__label">${f}</div>
      <div class="cfg-field__error">Unsupported type: ${d}. Use Raw mode.</div>
    </div>
  `}function fb(e){let{schema:t,value:r,path:a,hints:o,disabled:s,onPatch:c,inputType:l}=e,u=e.showLabel??!0,d=vn(a,o),{label:f,help:p,tags:m}=ab(a,t,o),h=eb({path:a,value:r,hints:o,revealSensitive:e.revealSensitive??!1,isSensitivePathRevealed:e.isSensitivePathRevealed}),g=h.isRedacted?Cn:d?.placeholder??(t.default===void 0?``:`Default: ${String(t.default)}`),_=h.isRedacted?``:r??``,v=h.isSensitive&&!h.isRedacted?`text`:l;return n`
    <div class="cfg-field">
      ${u?n`<label class="cfg-field__label">${f}</label>`:i}
      ${p?n`<div class="cfg-field__help">${p}</div>`:i}
      ${ub(m)}
      <div class="cfg-input-wrap">
        <input
          type=${v}
          class="cfg-input${h.isRedacted?` cfg-input--redacted`:``}"
          placeholder=${g}
          .value=${_==null?``:String(_)}
          ?disabled=${s}
          ?readonly=${h.isRedacted}
          @click=${()=>{h.isRedacted&&e.onToggleSensitivePath&&e.onToggleSensitivePath(a)}}
          @input=${e=>{if(h.isRedacted)return;let t=e.target.value;if(l===`number`){if(t.trim()===``){c(a,void 0);return}let e=Number(t);c(a,Number.isNaN(e)?t:e);return}c(a,t)}}
          @change=${e=>{if(l===`number`||h.isRedacted)return;let t=e.target.value;c(a,t.trim())}}
        />
        ${tb({path:a,state:h,disabled:s,onToggleSensitivePath:e.onToggleSensitivePath})}
        ${t.default===void 0?i:n`
          <button
            type="button"
            class="cfg-input__reset"
            title="Reset to default"
            ?disabled=${s||h.isRedacted}
            @click=${()=>c(a,t.default)}
          >↺</button>
        `}
      </div>
    </div>
  `}function pb(e){let{schema:t,value:r,path:a,hints:o,disabled:s,onPatch:c}=e,l=e.showLabel??!0,{label:u,help:d,tags:f}=ab(a,t,o),p=r??t.default??``,m=typeof p==`number`?p:0;return n`
    <div class="cfg-field">
      ${l?n`<label class="cfg-field__label">${u}</label>`:i}
      ${d?n`<div class="cfg-field__help">${d}</div>`:i}
      ${ub(f)}
      <div class="cfg-number">
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${s}
          @click=${()=>c(a,m-1)}
        >−</button>
        <input
          type="number"
          class="cfg-number__input"
          .value=${p==null?``:String(p)}
          ?disabled=${s}
          @input=${e=>{let t=e.target.value;c(a,t===``?void 0:Number(t))}}
        />
        <button
          type="button"
          class="cfg-number__btn"
          ?disabled=${s}
          @click=${()=>c(a,m+1)}
        >+</button>
      </div>
    </div>
  `}function mb(e){let{schema:t,value:r,path:a,hints:o,disabled:s,options:c,onPatch:l}=e,u=e.showLabel??!0,{label:d,help:f,tags:p}=ab(a,t,o),m=r??t.default,h=c.findIndex(e=>e===m||String(e)===String(m)),g=`__unset__`;return n`
    <div class="cfg-field">
      ${u?n`<label class="cfg-field__label">${d}</label>`:i}
      ${f?n`<div class="cfg-field__help">${f}</div>`:i}
      ${ub(p)}
      <select
        class="cfg-select"
        ?disabled=${s}
        .value=${h>=0?String(h):g}
        @change=${e=>{let t=e.target.value;l(a,t===g?void 0:c[Number(t)])}}
      >
        <option value=${g}>Select...</option>
        ${c.map((e,t)=>n`
          <option value=${String(t)}>${String(e)}</option>
        `)}
      </select>
    </div>
  `}function hb(e){let{schema:t,value:r,path:a,hints:o,disabled:s,onPatch:c}=e,l=e.showLabel??!0,{label:u,help:d,tags:f}=ab(a,t,o),p=Qy(r),m=eb({path:a,value:r,hints:o,revealSensitive:e.revealSensitive??!1,isSensitivePathRevealed:e.isSensitivePathRevealed}),h=m.isRedacted?``:p;return n`
    <div class="cfg-field">
      ${l?n`<label class="cfg-field__label">${u}</label>`:i}
      ${d?n`<div class="cfg-field__help">${d}</div>`:i}
      ${ub(f)}
      <div class="cfg-input-wrap">
        <textarea
          class="cfg-textarea${m.isRedacted?` cfg-textarea--redacted`:``}"
          placeholder=${m.isRedacted?Cn:`JSON value`}
          rows="3"
          .value=${h}
          ?disabled=${s}
          ?readonly=${m.isRedacted}
          @click=${()=>{m.isRedacted&&e.onToggleSensitivePath&&e.onToggleSensitivePath(a)}}
          @change=${e=>{if(m.isRedacted)return;let t=e.target,n=t.value.trim();if(!n){c(a,void 0);return}try{c(a,JSON.parse(n))}catch{t.value=p}}}
        ></textarea>
        ${tb({path:a,state:m,disabled:s,onToggleSensitivePath:e.onToggleSensitivePath})}
      </div>
    </div>
  `}function gb(e){let{schema:t,value:r,path:a,hints:o,unsupported:s,disabled:c,onPatch:l,searchCriteria:u,revealSensitive:d,isSensitivePathRevealed:f,onToggleSensitivePath:p}=e,m=e.showLabel??!0,{label:h,help:g,tags:_}=ab(a,t,o),v=u&&nb(u)&&cb({schema:t,path:a,hints:o,criteria:u})?void 0:u,y=r??t.default,b=y&&typeof y==`object`&&!Array.isArray(y)?y:{},x=t.properties??{},S=Object.entries(x).toSorted((e,t)=>{let n=vn([...a,e[0]],o)?.order??0,r=vn([...a,t[0]],o)?.order??0;return n===r?e[0].localeCompare(t[0]):n-r}),C=new Set(Object.keys(x)),w=t.additionalProperties,T=!!w&&typeof w==`object`,E=n`
    ${S.map(([e,t])=>db({schema:t,value:b[e],path:[...a,e],hints:o,unsupported:s,disabled:c,searchCriteria:v,revealSensitive:d,isSensitivePathRevealed:f,onToggleSensitivePath:p,onPatch:l}))}
    ${T?vb({schema:w,value:b,path:a,hints:o,unsupported:s,disabled:c,reservedKeys:C,searchCriteria:v,revealSensitive:d,isSensitivePathRevealed:f,onToggleSensitivePath:p,onPatch:l}):i}
  `;return a.length===1?n`
      <div class="cfg-fields">
        ${E}
      </div>
    `:m?n`
    <details class="cfg-object" ?open=${a.length<=2}>
      <summary class="cfg-object__header">
        <span class="cfg-object__title-wrap">
          <span class="cfg-object__title">${h}</span>
          ${ub(_)}
        </span>
        <span class="cfg-object__chevron">${$y.chevronDown}</span>
      </summary>
      ${g?n`<div class="cfg-object__help">${g}</div>`:i}
      <div class="cfg-object__content">
        ${E}
      </div>
    </details>
  `:n`
      <div class="cfg-fields cfg-fields--inline">
        ${E}
      </div>
    `}function _b(e){let{schema:t,value:r,path:a,hints:o,unsupported:s,disabled:c,onPatch:l,searchCriteria:u,revealSensitive:d,isSensitivePathRevealed:f,onToggleSensitivePath:p}=e,m=e.showLabel??!0,{label:h,help:g,tags:_}=ab(a,t,o),v=u&&nb(u)&&cb({schema:t,path:a,hints:o,criteria:u})?void 0:u,y=Array.isArray(t.items)?t.items[0]:t.items;if(!y)return n`
      <div class="cfg-field cfg-field--error">
        <div class="cfg-field__label">${h}</div>
        <div class="cfg-field__error">Unsupported array schema. Use Raw mode.</div>
      </div>
    `;let b=Array.isArray(r)?r:Array.isArray(t.default)?t.default:[];return n`
    <div class="cfg-array">
      <div class="cfg-array__header">
        <div class="cfg-array__title">
          ${m?n`<span class="cfg-array__label">${h}</span>`:i}
          ${ub(_)}
        </div>
        <span class="cfg-array__count">${b.length} item${b.length===1?``:`s`}</span>
        <button
          type="button"
          class="cfg-array__add"
          ?disabled=${c}
          @click=${()=>{l(a,[...b,gn(y)])}}
        >
          <span class="cfg-array__add-icon">${$y.plus}</span>
          Add
        </button>
      </div>
      ${g?n`<div class="cfg-array__help">${g}</div>`:i}

      ${b.length===0?n`
              <div class="cfg-array__empty">No items yet. Click "Add" to create one.</div>
            `:n`
        <div class="cfg-array__items">
          ${b.map((e,t)=>n`
            <div class="cfg-array__item">
              <div class="cfg-array__item-header">
                <span class="cfg-array__item-index">#${t+1}</span>
                <button
                  type="button"
                  class="cfg-array__item-remove"
                  title="Remove item"
                  ?disabled=${c}
                  @click=${()=>{let e=[...b];e.splice(t,1),l(a,e)}}
                >
                  ${$y.trash}
                </button>
              </div>
              <div class="cfg-array__item-content">
                ${db({schema:y,value:e,path:[...a,t],hints:o,unsupported:s,disabled:c,searchCriteria:v,showLabel:!1,revealSensitive:d,isSensitivePathRevealed:f,onToggleSensitivePath:p,onPatch:l})}
              </div>
            </div>
          `)}
        </div>
      `}
    </div>
  `}function vb(e){let{schema:t,value:r,path:i,hints:a,unsupported:o,disabled:s,reservedKeys:c,onPatch:l,searchCriteria:u,revealSensitive:d,isSensitivePathRevealed:f,onToggleSensitivePath:p}=e,m=Zy(t),h=Object.entries(r??{}).filter(([e])=>!c.has(e)),g=u&&nb(u)?h.filter(([e,n])=>lb({schema:t,value:n,path:[...i,e],hints:a,criteria:u})):h;return n`
    <div class="cfg-map">
      <div class="cfg-map__header">
        <span class="cfg-map__label">Custom entries</span>
        <button
          type="button"
          class="cfg-map__add"
          ?disabled=${s}
          @click=${()=>{let e={...r},n=1,a=`custom-${n}`;for(;a in e;)n+=1,a=`custom-${n}`;e[a]=m?{}:gn(t),l(i,e)}}
        >
          <span class="cfg-map__add-icon">${$y.plus}</span>
          Add Entry
        </button>
      </div>

      ${g.length===0?n`
              <div class="cfg-map__empty">No custom entries.</div>
            `:n`
        <div class="cfg-map__items">
          ${g.map(([e,c])=>{let h=[...i,e],g=Qy(c),_=eb({path:h,value:c,hints:a,revealSensitive:d??!1,isSensitivePathRevealed:f});return n`
              <div class="cfg-map__item">
                <div class="cfg-map__item-header">
                  <div class="cfg-map__item-key">
                    <input
                      type="text"
                      class="cfg-input cfg-input--sm"
                      placeholder="Key"
                      .value=${e}
                      ?disabled=${s}
                      @change=${t=>{let n=t.target.value.trim();if(!n||n===e)return;let a={...r};n in a||(a[n]=a[e],delete a[e],l(i,a))}}
                    />
                  </div>
                  <button
                    type="button"
                    class="cfg-map__item-remove"
                    title="Remove entry"
                    ?disabled=${s}
                    @click=${()=>{let t={...r};delete t[e],l(i,t)}}
                  >
                    ${$y.trash}
                  </button>
                </div>
                <div class="cfg-map__item-value">
                  ${m?n`
                        <div class="cfg-input-wrap">
                          <textarea
                            class="cfg-textarea cfg-textarea--sm${_.isRedacted?` cfg-textarea--redacted`:``}"
                            placeholder=${_.isRedacted?Cn:`JSON value`}
                            rows="2"
                            .value=${_.isRedacted?``:g}
                            ?disabled=${s}
                            ?readonly=${_.isRedacted}
                            @click=${()=>{_.isRedacted&&p&&p(h)}}
                            @change=${e=>{if(_.isRedacted)return;let t=e.target,n=t.value.trim();if(!n){l(h,void 0);return}try{l(h,JSON.parse(n))}catch{t.value=g}}}
                          ></textarea>
                          ${tb({path:h,state:_,disabled:s,onToggleSensitivePath:p})}
                        </div>
                      `:db({schema:t,value:c,path:h,hints:a,unsupported:o,disabled:s,searchCriteria:u,showLabel:!1,revealSensitive:d,isSensitivePathRevealed:f,onToggleSensitivePath:p,onPatch:l})}
                </div>
              </div>
            `})}
        </div>
      `}
    </div>
  `}var yb={env:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,diagnostics:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  `,cli:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,secrets:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path
        d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"
      ></path>
    </svg>
  `,acp:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,mcp:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,default:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `},bb={env:{label:`Environment Variables`,description:`Environment variables passed to the gateway process`},update:{label:`Updates`,description:`Auto-update settings and release channel`},agents:{label:`Agents`,description:`Agent configurations, models, and identities`},auth:{label:`Authentication`,description:`API keys and authentication profiles`},channels:{label:`Channels`,description:`Messaging channels (Telegram, Discord, Slack, etc.)`},messages:{label:`Messages`,description:`Message handling and routing settings`},commands:{label:`Commands`,description:`Custom slash commands`},hooks:{label:`Hooks`,description:`Webhooks and event hooks`},skills:{label:`Skills`,description:`Skill packs and capabilities`},tools:{label:`Tools`,description:`Tool configurations (browser, search, etc.)`},gateway:{label:`Gateway`,description:`Gateway server settings (port, auth, binding)`},wizard:{label:`Setup Wizard`,description:`Setup wizard state and history`},meta:{label:`Metadata`,description:`Gateway metadata and version information`},logging:{label:`Logging`,description:`Log levels and output configuration`},browser:{label:`Browser`,description:`Browser automation settings`},ui:{label:`UI`,description:`User interface preferences`},models:{label:`Models`,description:`AI model configurations and providers`},bindings:{label:`Bindings`,description:`Key bindings and shortcuts`},broadcast:{label:`Broadcast`,description:`Broadcast and notification settings`},audio:{label:`Audio`,description:`Audio input/output settings`},session:{label:`Session`,description:`Session management and persistence`},cron:{label:`Cron`,description:`Scheduled tasks and automation`},web:{label:`Web`,description:`Web server and API settings`},discovery:{label:`Discovery`,description:`Service discovery and networking`},canvasHost:{label:`Canvas Host`,description:`Canvas rendering and display`},talk:{label:`Talk`,description:`Voice and speech settings`},plugins:{label:`Plugins`,description:`Plugin management and extensions`},diagnostics:{label:`Diagnostics`,description:`Instrumentation, OpenTelemetry, and cache-trace settings`},cli:{label:`CLI`,description:`CLI banner and startup behavior`},secrets:{label:`Secrets`,description:`Secret provider configuration`},acp:{label:`ACP`,description:`Agent Communication Protocol runtime and streaming settings`},mcp:{label:`MCP`,description:`Model Context Protocol server definitions`}};function xb(e){return yb[e]??yb.default}function Sb(e){if(!e.query)return!0;let t=rb(e.query),n=t.text,r=bb[e.key];return n&&(e.key.toLowerCase().includes(n)||r?.label&&r.label.toLowerCase().includes(n)||r?.description&&r.description.toLowerCase().includes(n))&&t.tags.length===0?!0:lb({schema:e.schema,value:e.sectionValue,path:[e.key],hints:e.uiHints,criteria:t})}function Cb(e){if(!e.schema)return n`
      <div class="muted">Schema unavailable.</div>
    `;let t=e.schema,r=e.value??{};if(hn(t)!==`object`||!t.properties)return n`
      <div class="callout danger">Unsupported schema. Use Raw.</div>
    `;let a=new Set(e.unsupportedPaths??[]),o=t.properties,s=e.searchQuery??``,c=rb(s),l=e.activeSection,u=e.activeSubsection??null,d=Object.entries(o).toSorted((t,n)=>{let r=vn([t[0]],e.uiHints)?.order??50,i=vn([n[0]],e.uiHints)?.order??50;return r===i?t[0].localeCompare(n[0]):r-i}).filter(([t,n])=>!(l&&t!==l||s&&!Sb({key:t,schema:n,sectionValue:r[t],uiHints:e.uiHints,query:s}))),f=null;if(l&&u&&d.length===1){let e=d[0]?.[1];e&&hn(e)===`object`&&e.properties&&e.properties[u]&&(f={sectionKey:l,subsectionKey:u,schema:e.properties[u]})}return d.length===0?n`
      <div class="config-empty">
        <div class="config-empty__icon">${W.search}</div>
        <div class="config-empty__text">
          ${s?`No settings match "${s}"`:`No settings in this section`}
        </div>
      </div>
    `:n`
    <div class="config-form config-form--modern">
      ${f?(()=>{let{sectionKey:t,subsectionKey:o,schema:s}=f,l=vn([t,o],e.uiHints),u=l?.label??s.title??yn(o),d=l?.help??s.description??``,p=r[t],m=p&&typeof p==`object`?p[o]:void 0;return n`
              <section class="config-section-card" id=${`config-section-${t}-${o}`}>
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${xb(t)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${u}</h3>
                    ${d?n`<p class="config-section-card__desc">${d}</p>`:i}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${db({schema:s,value:m,path:[t,o],hints:e.uiHints,unsupported:a,disabled:e.disabled??!1,showLabel:!1,searchCriteria:c,revealSensitive:e.revealSensitive??!1,isSensitivePathRevealed:e.isSensitivePathRevealed,onToggleSensitivePath:e.onToggleSensitivePath,onPatch:e.onPatch})}
                </div>
              </section>
            `})():d.map(([t,o])=>{let s=bb[t]??{label:t.charAt(0).toUpperCase()+t.slice(1),description:o.description??``};return n`
              <section class="config-section-card" id="config-section-${t}">
                <div class="config-section-card__header">
                  <span class="config-section-card__icon">${xb(t)}</span>
                  <div class="config-section-card__titles">
                    <h3 class="config-section-card__title">${s.label}</h3>
                    ${s.description?n`<p class="config-section-card__desc">${s.description}</p>`:i}
                  </div>
                </div>
                <div class="config-section-card__content">
                  ${db({schema:o,value:r[t],path:[t],hints:e.uiHints,unsupported:a,disabled:e.disabled??!1,showLabel:!1,searchCriteria:c,revealSensitive:e.revealSensitive??!1,isSensitivePathRevealed:e.isSensitivePathRevealed,onToggleSensitivePath:e.onToggleSensitivePath,onPatch:e.onPatch})}
                </div>
              </section>
            `})}
    </div>
  `}var wb=new Set([`title`,`description`,`default`,`nullable`]);function Tb(e){return Object.keys(e??{}).filter(e=>!wb.has(e)).length===0}function Eb(e){let t=e.filter(e=>e!=null),n=t.length!==e.length,r=[];for(let e of t)r.some(t=>Object.is(t,e))||r.push(e);return{enumValues:r,nullable:n}}function Db(e){return!e||typeof e!=`object`?{schema:null,unsupportedPaths:[`<root>`]}:Ob(e,[])}function Ob(e,t){let n=new Set,r={...e},i=_n(t)||`<root>`;if(e.anyOf||e.oneOf||e.allOf)return Mb(e,t)||{schema:e,unsupportedPaths:[i]};let a=Array.isArray(e.type)&&e.type.includes(`null`),o=hn(e)??(e.properties||e.additionalProperties?`object`:void 0);if(r.type=o??e.type,r.nullable=a||e.nullable,r.enum){let{enumValues:e,nullable:t}=Eb(r.enum);r.enum=e,t&&(r.nullable=!0),e.length===0&&n.add(i)}if(o===`object`){let a=e.properties??{},o={};for(let[e,r]of Object.entries(a)){let i=Ob(r,[...t,e]);i.schema&&(o[e]=i.schema);for(let e of i.unsupportedPaths)n.add(e)}if(r.properties=o,e.additionalProperties===!0)r.additionalProperties={};else if(e.additionalProperties===!1)r.additionalProperties=!1;else if(e.additionalProperties&&typeof e.additionalProperties==`object`&&!Tb(e.additionalProperties)){let a=Ob(e.additionalProperties,[...t,`*`]);r.additionalProperties=a.schema??e.additionalProperties,a.unsupportedPaths.length>0&&n.add(i)}}else if(o===`array`){let a=Array.isArray(e.items)?e.items[0]:e.items;if(!a)n.add(i);else{let e=Ob(a,[...t,`*`]);r.items=e.schema??a,e.unsupportedPaths.length>0&&n.add(i)}}else o!==`string`&&o!==`number`&&o!==`integer`&&o!==`boolean`&&!r.enum&&n.add(i);return{schema:r,unsupportedPaths:Array.from(n)}}function kb(e){if(hn(e)!==`object`)return!1;let t=e.properties?.source,n=e.properties?.provider,r=e.properties?.id;return!t||!n||!r?!1:typeof t.const==`string`&&hn(n)===`string`&&hn(r)===`string`}function Ab(e){let t=e.oneOf??e.anyOf;return!t||t.length===0?!1:t.every(e=>kb(e))}function jb(e,t,n,r){let i=n.findIndex(e=>hn(e)===`string`);if(i<0)return null;let a=n.filter((e,t)=>t!==i);return a.length!==1||!Ab(a[0])?null:Ob({...e,...n[i],nullable:r,anyOf:void 0,oneOf:void 0,allOf:void 0},t)}function Mb(e,t){if(e.allOf)return null;let n=e.anyOf??e.oneOf;if(!n)return null;let r=[],i=[],a=!1;for(let e of n){if(!e||typeof e!=`object`)return null;if(Array.isArray(e.enum)){let{enumValues:t,nullable:n}=Eb(e.enum);r.push(...t),n&&(a=!0);continue}if(`const`in e){if(e.const==null){a=!0;continue}r.push(e.const);continue}if(hn(e)===`null`){a=!0;continue}i.push(e)}let o=jb(e,t,i,a);if(o)return o;if(r.length>0&&i.length===0){let t=[];for(let e of r)t.some(t=>Object.is(t,e))||t.push(e);return{schema:{...e,enum:t,nullable:a,anyOf:void 0,oneOf:void 0,allOf:void 0},unsupportedPaths:[]}}if(i.length===1){let e=Ob(i[0],t);return e.schema&&(e.schema.nullable=a||e.schema.nullable),e}let s=new Set([`string`,`number`,`integer`,`boolean`,`object`,`array`]);return i.length>0&&r.length===0&&i.every(e=>{let t=hn(e);return!!t&&s.has(String(t))})?{schema:{...e,nullable:a},unsupportedPaths:[]}:null}var Nb={0:`None`,25:`Slight`,50:`Default`,75:`Round`,100:`Full`},Pb={all:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  `,env:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      ></path>
    </svg>
  `,update:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `,agents:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"
      ></path>
      <circle cx="8" cy="14" r="1"></circle>
      <circle cx="16" cy="14" r="1"></circle>
    </svg>
  `,auth:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  `,channels:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `,messages:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,commands:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,hooks:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  `,skills:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      ></polygon>
    </svg>
  `,tools:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      ></path>
    </svg>
  `,gateway:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,wizard:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M15 4V2"></path>
      <path d="M15 16v-2"></path>
      <path d="M8 9h2"></path>
      <path d="M20 9h2"></path>
      <path d="M17.8 11.8 19 13"></path>
      <path d="M15 9h0"></path>
      <path d="M17.8 6.2 19 5"></path>
      <path d="m3 21 9-9"></path>
      <path d="M12.2 6.2 11 5"></path>
    </svg>
  `,meta:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
    </svg>
  `,logging:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  `,browser:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="21.17" y1="8" x2="12" y2="8"></line>
      <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
      <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
    </svg>
  `,ui:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  `,models:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      ></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
  `,bindings:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,broadcast:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
    </svg>
  `,audio:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `,session:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,cron:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  `,web:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path
        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      ></path>
    </svg>
  `,discovery:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  `,canvasHost:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  `,talk:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
      <line x1="12" y1="19" x2="12" y2="23"></line>
      <line x1="8" y1="23" x2="16" y2="23"></line>
    </svg>
  `,plugins:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v6"></path>
      <path d="m4.93 10.93 4.24 4.24"></path>
      <path d="M2 12h6"></path>
      <path d="m4.93 13.07 4.24-4.24"></path>
      <path d="M12 22v-6"></path>
      <path d="m19.07 13.07-4.24-4.24"></path>
      <path d="M22 12h-6"></path>
      <path d="m19.07 10.93-4.24 4.24"></path>
    </svg>
  `,diagnostics:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  `,cli:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  `,secrets:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path
        d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"
      ></path>
    </svg>
  `,acp:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,mcp:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  `,__appearance__:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  `,default:n`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `},Fb=[{id:`core`,label:`Core`,sections:[{key:`env`,label:`Environment`},{key:`auth`,label:`Authentication`},{key:`update`,label:`Updates`},{key:`meta`,label:`Meta`},{key:`logging`,label:`Logging`},{key:`diagnostics`,label:`Diagnostics`},{key:`cli`,label:`Cli`},{key:`secrets`,label:`Secrets`}]},{id:`ai`,label:`AI & Agents`,sections:[{key:`agents`,label:`Agents`},{key:`models`,label:`Models`},{key:`skills`,label:`Skills`},{key:`tools`,label:`Tools`},{key:`memory`,label:`Memory`},{key:`session`,label:`Session`}]},{id:`communication`,label:`Communication`,sections:[{key:`channels`,label:`Channels`},{key:`messages`,label:`Messages`},{key:`broadcast`,label:`Broadcast`},{key:`talk`,label:`Talk`},{key:`audio`,label:`Audio`}]},{id:`automation`,label:`Automation`,sections:[{key:`commands`,label:`Commands`},{key:`hooks`,label:`Hooks`},{key:`bindings`,label:`Bindings`},{key:`cron`,label:`Cron`},{key:`approvals`,label:`Approvals`},{key:`plugins`,label:`Plugins`}]},{id:`infrastructure`,label:`Infrastructure`,sections:[{key:`gateway`,label:`Gateway`},{key:`web`,label:`Web`},{key:`browser`,label:`Browser`},{key:`nodeHost`,label:`NodeHost`},{key:`canvasHost`,label:`CanvasHost`},{key:`discovery`,label:`Discovery`},{key:`media`,label:`Media`},{key:`acp`,label:`Acp`},{key:`mcp`,label:`Mcp`}]},{id:`appearance`,label:`Appearance`,sections:[{key:`__appearance__`,label:`Theme`},{key:`ui`,label:`UI`},{key:`wizard`,label:`Setup Wizard`}]}],Ib=new Set(Fb.flatMap(e=>e.sections.map(e=>e.key)));function Lb(e){return Pb[e]??Pb.default}function Rb(e,t){if(!e||hn(e)!==`object`||!e.properties)return e;let n=t.include,r=t.exclude,i={};for(let[t,a]of Object.entries(e.properties))n&&n.size>0&&!n.has(t)||r&&r.size>0&&r.has(t)||(i[t]=a);return{...e,properties:i}}function zb(e,t){let n=t.include,r=t.exclude;return(!n||n.size===0)&&(!r||r.size===0)?e:e.filter(e=>{if(e===`<root>`)return!0;let[t]=e.split(`.`);return n&&n.size>0?n.has(t):r&&r.size>0?!r.has(t):!0})}function Bb(e,t){return bb[e]||{label:t?.title??yn(e),description:t?.description??``}}function Vb(e,t){if(!e||!t)return[];let n=[];function r(e,t,i){if(e===t)return;if(typeof e!=typeof t){n.push({path:i,from:e,to:t});return}if(typeof e!=`object`||!e||t===null){e!==t&&n.push({path:i,from:e,to:t});return}if(Array.isArray(e)&&Array.isArray(t)){JSON.stringify(e)!==JSON.stringify(t)&&n.push({path:i,from:e,to:t});return}let a=e,o=t,s=new Set([...Object.keys(a),...Object.keys(o)]);for(let e of s)r(a[e],o[e],i?`${i}.${e}`:e)}return r(e,t,``),n}function Hb(e,t=40){let n;try{n=JSON.stringify(e)??String(e)}catch{n=String(e)}return n.length<=t?n:n.slice(0,t-3)+`...`}function Ub(e,t,n){return Tn(e)&&t!=null&&Hb(t).trim()!==``?Cn:Hb(t)}var Wb=[{id:`claw`,label:`Claw`,description:`Chroma family`,icon:W.zap},{id:`knot`,label:`Knot`,description:`Black & red`,icon:W.link},{id:`dash`,label:`Dash`,description:`Chocolate blueprint`,icon:W.barChart}];function Gb(e){return n`
    <div class="settings-appearance">
      <div class="settings-appearance__section">
        <h3 class="settings-appearance__heading">Theme</h3>
        <p class="settings-appearance__hint">Choose a theme family.</p>
        <div class="settings-theme-grid">
          ${Wb.map(t=>n`
              <button
                class="settings-theme-card ${t.id===e.theme?`settings-theme-card--active`:``}"
                title=${t.description}
                @click=${n=>{if(t.id!==e.theme){let r={element:n.currentTarget??void 0};e.setTheme(t.id,r)}}}
              >
                <span class="settings-theme-card__icon" aria-hidden="true">${t.icon}</span>
                <span class="settings-theme-card__label">${t.label}</span>
                ${t.id===e.theme?n`<span class="settings-theme-card__check" aria-hidden="true">${W.check}</span>`:i}
              </button>
            `)}
        </div>
      </div>

      <div class="settings-appearance__section">
        <h3 class="settings-appearance__heading">Roundness</h3>
        <p class="settings-appearance__hint">Adjust corner radius across the UI.</p>
        <div class="settings-roundness">
          <div class="settings-roundness__options">
            ${uo.map(t=>n`
                <button
                  type="button"
                  class="settings-roundness__btn ${t===e.borderRadius?`active`:``}"
                  @click=${()=>e.setBorderRadius(t)}
                >
                  <span
                    class="settings-roundness__swatch"
                    style="border-radius: ${Math.round(t/50*10)}px"
                  ></span>
                  <span class="settings-roundness__label">${Nb[t]}</span>
                </button>
              `)}
          </div>
        </div>
      </div>

      <div class="settings-appearance__section">
        <h3 class="settings-appearance__heading">Connection</h3>
        <div class="settings-info-grid">
          <div class="settings-info-row">
            <span class="settings-info-row__label">Gateway</span>
            <span class="settings-info-row__value mono">${e.gatewayUrl||`-`}</span>
          </div>
          <div class="settings-info-row">
            <span class="settings-info-row__label">Status</span>
            <span class="settings-info-row__value">
              <span class="settings-status-dot ${e.connected?`settings-status-dot--ok`:``}"></span>
              ${e.connected?`Connected`:`Offline`}
            </span>
          </div>
          ${e.assistantName?n`
                <div class="settings-info-row">
                  <span class="settings-info-row__label">Assistant</span>
                  <span class="settings-info-row__value">${e.assistantName}</span>
                </div>
              `:i}
        </div>
      </div>
    </div>
  `}function Kb(){return{rawRevealed:!1,envRevealed:!1,validityDismissed:!1,revealedSensitivePaths:new Set}}var qb=Kb();function Jb(e){let t=_n(e);return t?qb.revealedSensitivePaths.has(t):!1}function Yb(e){let t=_n(e);t&&(qb.revealedSensitivePaths.has(t)?qb.revealedSensitivePaths.delete(t):qb.revealedSensitivePaths.add(t))}function Xb(e){let t=e.showModeToggle??!1,r=e.valid==null?`unknown`:e.valid?`valid`:`invalid`,a=e.includeVirtualSections??!0,o=e.includeSections?.length?new Set(e.includeSections):null,s=e.excludeSections?.length?new Set(e.excludeSections):null,c=Db(e.schema),l={schema:Rb(c.schema,{include:o,exclude:s}),unsupportedPaths:zb(c.unsupportedPaths,{include:o,exclude:s})},u=l.schema?l.unsupportedPaths.length>0:!1,d=t?e.formMode:`form`,f=qb.envRevealed,p=e.onRequestUpdate??(()=>e.onRawChange(e.raw)),m=l.schema?.properties??{},h=new Set([`__appearance__`]),g=Fb.map(e=>({...e,sections:e.sections.filter(e=>a&&h.has(e.key)||e.key in m)})).filter(e=>e.sections.length>0),_=Object.keys(m).filter(e=>!Ib.has(e)).map(e=>({key:e,label:e.charAt(0).toUpperCase()+e.slice(1)})),v=_.length>0?{id:`other`,label:`Other`,sections:_}:null,y=a&&e.activeSection!=null&&h.has(e.activeSection),b=e.activeSection&&!y&&l.schema&&hn(l.schema)===`object`?l.schema.properties?.[e.activeSection]:void 0,x=e.activeSection&&!y?Bb(e.activeSection,b):null,S=[{key:null,label:e.navRootLabel??`Settings`},...[...g,...v?[v]:[]].flatMap(e=>e.sections.map(e=>({key:e.key,label:e.label})))],C=d===`form`?Vb(e.originalValue,e.formValue):[],w=d===`raw`&&e.raw!==e.originalRaw,T=d===`form`?C.length>0:w,E=!!e.formValue&&!e.loading&&!!l.schema,D=e.connected&&!e.saving&&T&&(d===`raw`?!0:E),ee=e.connected&&!e.applying&&!e.updating&&T&&(d===`raw`?!0:E),te=e.connected&&!e.applying&&!e.updating,O=a&&d===`form`&&e.activeSection===null&&!!o?.has(`__appearance__`);return n`
    <div class="config-layout">
      <main class="config-main">
        <div class="config-actions">
          <div class="config-actions__left">
            ${t?n`
                    <div class="config-mode-toggle">
                      <button
                        class="config-mode-toggle__btn ${d===`form`?`active`:``}"
                        ?disabled=${e.schemaLoading||!e.schema}
                        title=${u?`Form view can't safely edit some fields`:``}
                        @click=${()=>e.onFormModeChange(`form`)}
                      >
                        Form
                      </button>
                      <button
                        class="config-mode-toggle__btn ${d===`raw`?`active`:``}"
                        @click=${()=>e.onFormModeChange(`raw`)}
                      >
                        Raw
                      </button>
                    </div>
                  `:i}
            ${T?n`
	                  <span class="config-changes-badge"
	                    >${d===`raw`?`Unsaved changes`:`${C.length} unsaved change${C.length===1?``:`s`}`}</span
	                  >
	                `:n`
                    <span class="config-status muted">No changes</span>
                  `}
          </div>
          <div class="config-actions__right">
            ${e.onOpenFile?n`
                    <button
                      class="btn btn--sm"
                      title=${e.configPath?`Open ${e.configPath}`:`Open config file`}
                      @click=${e.onOpenFile}
                    >
                      ${W.fileText} Open
                    </button>
                  `:i}
            <button
              class="btn btn--sm"
              ?disabled=${e.loading}
              @click=${e.onReload}
            >
              ${e.loading?`Loading…`:`Reload`}
            </button>
            <button
              class="btn btn--sm primary"
              ?disabled=${!D}
              @click=${e.onSave}
            >
              ${e.saving?`Saving…`:`Save`}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!ee}
              @click=${e.onApply}
            >
              ${e.applying?`Applying…`:`Apply`}
            </button>
            <button
              class="btn btn--sm"
              ?disabled=${!te}
              @click=${e.onUpdate}
            >
              ${e.updating?`Updating…`:`Update`}
            </button>
          </div>
        </div>

        <div class="config-top-tabs">
          ${d===`form`?n`
                  <div class="config-search config-search--top">
                    <div class="config-search__input-row">
                      <svg
                        class="config-search__icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="M21 21l-4.35-4.35"></path>
                      </svg>
                      <input
                        type="text"
                        class="config-search__input"
                        placeholder="Search settings..."
                        aria-label="Search settings"
                        .value=${e.searchQuery}
                        @input=${t=>e.onSearchChange(t.target.value)}
                      />
                      ${e.searchQuery?n`
                              <button
                                class="config-search__clear"
                                aria-label="Clear search"
                                @click=${()=>e.onSearchChange(``)}
                              >
                                ×
                              </button>
                            `:i}
                    </div>
                  </div>
                `:i}

          <div class="config-top-tabs__scroller" role="tablist" aria-label="Settings sections">
            ${S.map(t=>n`
                <button
                  class="config-top-tabs__tab ${e.activeSection===t.key?`active`:``}"
                  role="tab"
                  aria-selected=${e.activeSection===t.key}
                  @click=${()=>e.onSectionChange(t.key)}
                  title=${t.label}
                >
                  ${t.label}
                </button>
              `)}
          </div>

        </div>

        ${r===`invalid`&&!qb.validityDismissed?n`
              <div class="config-validity-warning">
                <svg class="config-validity-warning__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span class="config-validity-warning__text">Your configuration is invalid. Some settings may not work as expected.</span>
                <button
                  class="btn btn--sm"
                  @click=${()=>{qb.validityDismissed=!0,p()}}
                >Don't remind again</button>
              </div>
            `:i}

        <!-- Diff panel (form mode only - raw mode doesn't have granular diff) -->
        ${T&&d===`form`?n`
              <details class="config-diff">
                <summary class="config-diff__summary">
                  <span
                    >View ${C.length} pending
                    change${C.length===1?``:`s`}</span
                  >
                  <svg
                    class="config-diff__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div class="config-diff__content">
                  ${C.map(t=>n`
                      <div class="config-diff__item">
                        <div class="config-diff__path">${t.path}</div>
                        <div class="config-diff__values">
                          <span class="config-diff__from"
                            >${Ub(t.path,t.from,e.uiHints)}</span
                          >
                          <span class="config-diff__arrow">→</span>
                          <span class="config-diff__to"
                            >${Ub(t.path,t.to,e.uiHints)}</span
                          >
                        </div>
                      </div>
                    `)}
                </div>
              </details>
            `:i}
	        ${x&&d===`form`?n`
	              <div class="config-section-hero">
	                <div class="config-section-hero__icon">
	                  ${Lb(e.activeSection??``)}
                </div>
                <div class="config-section-hero__text">
                  <div class="config-section-hero__title">
                    ${x.label}
                  </div>
                  ${x.description?n`<div class="config-section-hero__desc">
                        ${x.description}
                      </div>`:i}
                </div>
                ${e.activeSection===`env`?n`
                      <button
                        class="config-env-peek-btn ${f?`config-env-peek-btn--active`:``}"
                        title=${f?`Hide env values`:`Reveal env values`}
                        @click=${()=>{qb.envRevealed=!qb.envRevealed,p()}}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        Peek
                      </button>
                    `:i}
              </div>
            `:i}
        <!-- Form content -->
        <div class="config-content">
          ${e.activeSection===`__appearance__`?a?Gb(e):i:d===`form`?n`
                ${O?Gb(e):i}
                ${e.schemaLoading?n`
                        <div class="config-loading">
                          <div class="config-loading__spinner"></div>
                          <span>Loading schema…</span>
                        </div>
                      `:Cb({schema:l.schema,uiHints:e.uiHints,value:e.formValue,disabled:e.loading||!e.formValue,unsupportedPaths:l.unsupportedPaths,onPatch:e.onFormPatch,searchQuery:e.searchQuery,activeSection:e.activeSection,activeSubsection:null,revealSensitive:e.activeSection===`env`?f:!1,isSensitivePathRevealed:Jb,onToggleSensitivePath:e=>{Yb(e),p()}})}
              `:(()=>{let t=kn(e.formValue,[],e.uiHints),r=t>0&&!qb.rawRevealed;return n`
                    ${u?n`
                            <div class="callout info" style="margin-bottom: 12px">
                              Your config contains fields the form editor can't safely represent. Use Raw mode to edit those
                              entries.
                            </div>
                          `:i}
                    <div class="field config-raw-field">
                      <span style="display:flex;align-items:center;gap:8px;">
                        Raw config (JSON/JSON5)
                        ${t>0?n`
                              <span class="pill pill--sm">${t} secret${t===1?``:`s`} ${r?`redacted`:`visible`}</span>
                              <button
                                class="btn btn--icon config-raw-toggle ${r?``:`active`}"
                                title=${r?`Reveal sensitive values`:`Hide sensitive values`}
                                aria-label="Toggle raw config redaction"
                                aria-pressed=${!r}
                                @click=${()=>{qb.rawRevealed=!qb.rawRevealed,p()}}
                              >
                                ${r?W.eyeOff:W.eye}
                              </button>
                            `:i}
                      </span>
                      <textarea
                        class="${r?`config-raw-redacted`:``}"
                        placeholder=${r?Cn:`Raw config (JSON/JSON5)`}
                        .value=${r?``:e.raw}
                        ?readonly=${r}
                        @input=${t=>{r||e.onRawChange(t.target.value)}}
                      ></textarea>
                    </div>
                  `})()}
        </div>

        ${e.issues.length>0?n`<div class="callout danger" style="margin-top: 12px;">
              <pre class="code-block">
${JSON.stringify(e.issues,null,2)}</pre
              >
            </div>`:i}
      </main>
    </div>
  `}function Zb(e){let t=Math.floor(Math.max(0,e)/1e3);if(t<60)return`${t}s`;let n=Math.floor(t/60);return n<60?`${n}m`:`${Math.floor(n/60)}h`}function Qb(e,t){return t?n`<div class="exec-approval-meta-row"><span>${e}</span><span>${t}</span></div>`:i}function $b(e){let t=e.execApprovalQueue[0];if(!t)return i;let r=t.request,a=t.expiresAtMs-Date.now(),o=a>0?`expires in ${Zb(a)}`:`expired`,s=e.execApprovalQueue.length;return n`
    <div class="exec-approval-overlay" role="dialog" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Exec approval needed</div>
            <div class="exec-approval-sub">${o}</div>
          </div>
          ${s>1?n`<div class="exec-approval-queue">${s} pending</div>`:i}
        </div>
        <div class="exec-approval-command mono">${r.command}</div>
        <div class="exec-approval-meta">
          ${Qb(`Host`,r.host)}
          ${Qb(`Agent`,r.agentId)}
          ${Qb(`Session`,r.sessionKey)}
          ${Qb(`CWD`,r.cwd)}
          ${Qb(`Resolved`,r.resolvedPath)}
          ${Qb(`Security`,r.security)}
          ${Qb(`Ask`,r.ask)}
        </div>
        ${e.execApprovalError?n`<div class="exec-approval-error">${e.execApprovalError}</div>`:i}
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision(`allow-once`)}
          >
            Allow once
          </button>
          <button
            class="btn"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision(`allow-always`)}
          >
            Always allow
          </button>
          <button
            class="btn danger"
            ?disabled=${e.execApprovalBusy}
            @click=${()=>e.handleExecApprovalDecision(`deny`)}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  `}function ex(e){let{pendingGatewayUrl:t}=e;return t?n`
    <div class="exec-approval-overlay" role="dialog" aria-modal="true" aria-live="polite">
      <div class="exec-approval-card">
        <div class="exec-approval-header">
          <div>
            <div class="exec-approval-title">Change Gateway URL</div>
            <div class="exec-approval-sub">This will reconnect to a different gateway server</div>
          </div>
        </div>
        <div class="exec-approval-command mono">${t}</div>
        <div class="callout danger" style="margin-top: 12px;">
          Only confirm if you trust this URL. Malicious URLs can compromise your system.
        </div>
        <div class="exec-approval-actions">
          <button
            class="btn primary"
            @click=${()=>e.handleGatewayUrlConfirm()}
          >
            Confirm
          </button>
          <button
            class="btn"
            @click=${()=>e.handleGatewayUrlCancel()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  `:i}function tx(e){return n`
    <div class="login-gate">
      <div class="login-gate__card">
        <div class="login-gate__header">
          <img class="login-gate__logo" src=${Ku(Ua(e.basePath??``))} alt="OpenClaw" />
          <div class="login-gate__title">OpenClaw</div>
          <div class="login-gate__sub">${L(`login.subtitle`)}</div>
        </div>
        <div class="login-gate__form">
          <label class="field">
            <span>${L(`overview.access.wsUrl`)}</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${t=>{let n=t.target.value;e.applySettings({...e.settings,gatewayUrl:n})}}
              placeholder="ws://127.0.0.1:18789"
            />
          </label>
          <label class="field">
            <span>${L(`overview.access.token`)}</span>
            <div class="login-gate__secret-row">
              <input
                type=${e.loginShowGatewayToken?`text`:`password`}
                autocomplete="off"
                spellcheck="false"
                .value=${e.settings.token}
                @input=${t=>{let n=t.target.value;e.applySettings({...e.settings,token:n})}}
                placeholder="OPENCLAW_GATEWAY_TOKEN (${L(`login.passwordPlaceholder`)})"
                @keydown=${t=>{t.key===`Enter`&&e.connect()}}
              />
              <button
                type="button"
                class="btn btn--icon ${e.loginShowGatewayToken?`active`:``}"
                title=${e.loginShowGatewayToken?`Hide token`:`Show token`}
                aria-label="Toggle token visibility"
                aria-pressed=${e.loginShowGatewayToken}
                @click=${()=>{e.loginShowGatewayToken=!e.loginShowGatewayToken}}
              >
                ${e.loginShowGatewayToken?W.eye:W.eyeOff}
              </button>
            </div>
          </label>
          <label class="field">
            <span>${L(`overview.access.password`)}</span>
            <div class="login-gate__secret-row">
              <input
                type=${e.loginShowGatewayPassword?`text`:`password`}
                autocomplete="off"
                spellcheck="false"
                .value=${e.password}
                @input=${t=>{e.password=t.target.value}}
                placeholder="${L(`login.passwordPlaceholder`)}"
                @keydown=${t=>{t.key===`Enter`&&e.connect()}}
              />
              <button
                type="button"
                class="btn btn--icon ${e.loginShowGatewayPassword?`active`:``}"
                title=${e.loginShowGatewayPassword?`Hide password`:`Show password`}
                aria-label="Toggle password visibility"
                aria-pressed=${e.loginShowGatewayPassword}
                @click=${()=>{e.loginShowGatewayPassword=!e.loginShowGatewayPassword}}
              >
                ${e.loginShowGatewayPassword?W.eye:W.eyeOff}
              </button>
            </div>
          </label>
          <button
            class="btn primary login-gate__connect"
            @click=${()=>e.connect()}
          >
            ${L(`common.connect`)}
          </button>
        </div>
        ${e.lastError?n`<div class="callout danger" style="margin-top: 14px;">
                <div>${e.lastError}</div>
              </div>`:``}
        <div class="login-gate__help">
          <div class="login-gate__help-title">${L(`overview.connection.title`)}</div>
          <ol class="login-gate__steps">
            <li>${L(`overview.connection.step1`)}<code>openclaw gateway run</code></li>
            <li>${L(`overview.connection.step2`)}<code>openclaw dashboard --no-open</code></li>
            <li>${L(`overview.connection.step3`)}</li>
          </ol>
          <div class="login-gate__docs">
            <a
              class="session-link"
              href="https://docs.openclaw.ai/web/dashboard"
              target="_blank"
              rel="noreferrer"
            >${L(`overview.connection.docsLink`)}</a>
          </div>
        </div>
      </div>
    </div>
  `}function nx(e){return e===`error`?`danger`:e===`warning`?`warn`:``}function rx(e){return e in W?W[e]:W.radio}function ix(e){return e.items.length===0?i:n`
    <section class="card ov-attention">
      <div class="card-title">${L(`overview.attention.title`)}</div>
      <div class="ov-attention-list">
        ${e.items.map(e=>n`
            <div class="ov-attention-item ${nx(e.severity)}">
              <span class="ov-attention-icon">${rx(e.icon)}</span>
              <div class="ov-attention-body">
                <div class="ov-attention-title">${e.title}</div>
                <div class="muted">${e.description}</div>
              </div>
              ${e.href?n`<a
                    class="ov-attention-link"
                    href=${e.href}
                    target=${e.external?Iy:i}
                    rel=${e.external?Ly():i}
                  >${L(`common.docs`)}</a>`:i}
            </div>
          `)}
      </div>
    </section>
  `}function ax(e){let t=e.ts??null;return t?p(t):`n/a`}function ox(e){return e?`${new Date(e).toLocaleDateString(void 0,{weekday:`short`})}, ${f(e)} (${p(e)})`:`n/a`}function sx(e){if(e.totalTokens==null)return`n/a`;let t=e.totalTokens??0,n=e.contextTokens??0;return n?`${t} / ${n}`:String(t)}function cx(e){if(e==null)return``;try{return JSON.stringify(e,null,2)}catch{return String(e)}}function lx(e){let t=e.state??{},n=t.nextRunAtMs?f(t.nextRunAtMs):`n/a`,r=t.lastRunAtMs?f(t.lastRunAtMs):`n/a`;return`${t.lastStatus??`n/a`} · next ${n} · last ${r}`}function ux(e){let t=e.schedule;if(t.kind===`at`){let e=Date.parse(t.at);return Number.isFinite(e)?`At ${f(e)}`:`At ${t.at}`}return t.kind===`every`?`Every ${d(t.everyMs)}`:`Cron ${t.expr}${t.tz?` (${t.tz})`:``}`}function dx(e){let t=e.payload;if(t.kind===`systemEvent`)return`System: ${t.text}`;let n=`Agent: ${t.message}`,r=e.delivery;if(r&&r.mode!==`none`){let e=r.mode===`webhook`?r.to?` (${r.to})`:``:r.channel||r.to?` (${r.channel??`last`}${r.to?` -> ${r.to}`:``})`:``;return`${n} · ${r.mode}${e}`}return n}var fx=/\d{3,}/g;function px(e){return n`${ws(e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(fx,e=>`<span class="blur-digits">${e}</span>`))}`}function mx(e,t){return n`
    <button class="ov-card" data-kind=${e.kind} @click=${()=>t(e.tab)}>
      <span class="ov-card__label">${e.label}</span>
      <span class="ov-card__value">${e.value}</span>
      <span class="ov-card__hint">${e.hint}</span>
    </button>
  `}function hx(){return n`
    <section class="ov-cards">
      ${[0,1,2,3].map(e=>n`
          <div class="ov-card" style="cursor:default;animation-delay:${e*50}ms">
            <span class="skeleton skeleton-line" style="width:60px;height:10px"></span>
            <span class="skeleton skeleton-stat"></span>
            <span class="skeleton skeleton-line skeleton-line--medium" style="height:12px"></span>
          </div>
        `)}
    </section>
  `}function gx(e){if(!(e.usageResult!=null||e.sessionsResult!=null||e.skillsReport!=null))return hx();let t=e.usageResult?.totals,r=m(t?.totalCost),a=l(t?.totalTokens),o=t?String(e.usageResult?.aggregates?.messages?.total??0):`0`,s=e.sessionsResult?.count??null,c=e.skillsReport?.skills??[],u=c.filter(e=>!e.disabled).length,d=c.filter(e=>e.blockedByAllowlist).length,f=c.length,h=e.cronStatus?.enabled??null,g=e.cronStatus?.nextWakeAtMs??null,_=e.cronJobs.length,v=e.cronJobs.filter(e=>e.state?.lastStatus===`error`).length,y=h==null?L(`common.na`):h?`${_} jobs`:L(`common.disabled`),b=v>0?n`<span class="danger">${v} failed</span>`:g?L(`overview.stats.cronNext`,{time:ox(g)}):``,x=[{kind:`cost`,tab:`usage`,label:L(`overview.cards.cost`),value:r,hint:`${a} tokens · ${o} msgs`},{kind:`sessions`,tab:`sessions`,label:L(`overview.stats.sessions`),value:String(s??L(`common.na`)),hint:L(`overview.stats.sessionsHint`)},{kind:`skills`,tab:`skills`,label:L(`overview.cards.skills`),value:`${u}/${f}`,hint:d>0?`${d} blocked`:`${u} active`},{kind:`cron`,tab:`cron`,label:L(`overview.stats.cron`),value:y,hint:b}],S=e.sessionsResult?.sessions.slice(0,5)??[];return n`
    <section class="ov-cards">
      ${x.map(t=>mx(t,e.onNavigate))}
    </section>

    ${S.length>0?n`
        <section class="ov-recent">
          <h3 class="ov-recent__title">${L(`overview.cards.recentSessions`)}</h3>
          <ul class="ov-recent__list">
            ${S.map(e=>n`
                <li class="ov-recent__row">
                  <span class="ov-recent__key">${px(e.displayName||e.label||e.key)}</span>
                  <span class="ov-recent__model">${e.model??``}</span>
                  <span class="ov-recent__time">${e.updatedAt?p(e.updatedAt):``}</span>
                </li>
              `)}
          </ul>
        </section>
      `:i}
  `}function _x(e){if(e.events.length===0)return i;let t=e.events.slice(0,20);return n`
    <details class="card ov-event-log" open>
      <summary class="ov-expandable-toggle">
        <span class="nav-item__icon">${W.radio}</span>
        ${L(`overview.eventLog.title`)}
        <span class="ov-count-badge">${e.events.length}</span>
      </summary>
      <div class="ov-event-log-list">
        ${t.map(e=>n`
            <div class="ov-event-log-entry">
              <span class="ov-event-log-ts">${new Date(e.ts).toLocaleTimeString()}</span>
              <span class="ov-event-log-name">${e.event}</span>
              ${e.payload?n`<span class="ov-event-log-payload muted">${cx(e.payload).slice(0,120)}</span>`:i}
            </div>
          `)}
      </div>
    </details>
  `}var vx=new Set([R.AUTH_REQUIRED,R.AUTH_TOKEN_MISSING,R.AUTH_PASSWORD_MISSING,R.AUTH_TOKEN_NOT_CONFIGURED,R.AUTH_PASSWORD_NOT_CONFIGURED]),yx=new Set([...vx,R.AUTH_UNAUTHORIZED,R.AUTH_TOKEN_MISMATCH,R.AUTH_PASSWORD_MISMATCH,R.AUTH_DEVICE_TOKEN_MISMATCH,R.AUTH_RATE_LIMITED,R.AUTH_TAILSCALE_IDENTITY_MISSING,R.AUTH_TAILSCALE_PROXY_MISSING,R.AUTH_TAILSCALE_WHOIS_FAILED,R.AUTH_TAILSCALE_IDENTITY_MISMATCH]),bx=new Set([R.CONTROL_UI_DEVICE_IDENTITY_REQUIRED,R.DEVICE_IDENTITY_REQUIRED]);function xx(e,t,n){return e||!t?!1:n===R.PAIRING_REQUIRED?!0:t.toLowerCase().includes(`pairing required`)}function Sx(e){return e.connected||!e.lastError?null:e.lastErrorCode?yx.has(e.lastErrorCode)?vx.has(e.lastErrorCode)?`required`:`failed`:null:e.lastError.toLowerCase().includes(`unauthorized`)?!e.hasToken&&!e.hasPassword?`required`:`failed`:null}function Cx(e,t,n){if(e||!t)return!1;if(n)return bx.has(n);let r=t.toLowerCase();return r.includes(`secure context`)||r.includes(`device identity required`)}function wx(e){return e.replace(/\x1b\]8;;.*?\x1b\\|\x1b\]8;;\x1b\\/g,``).replace(/\x1b\[[0-9;]*m/g,``)}function Tx(e){if(e.lines.length===0)return i;let t=e.lines.slice(-50).map(e=>wx(e)).join(`
`);return n`
    <details class="card ov-log-tail" open>
      <summary class="ov-expandable-toggle">
        <span class="nav-item__icon">${W.scrollText}</span>
        ${L(`overview.logTail.title`)}
        <span class="ov-count-badge">${e.lines.length}</span>
        <span
          class="ov-log-refresh"
          @click=${t=>{t.preventDefault(),t.stopPropagation(),e.onRefreshLogs()}}
        >${W.loader}</span>
      </summary>
      <pre class="ov-log-tail-content">${t}</pre>
    </details>
  `}function Ex(e){let t=e.hello?.snapshot,r=t?.uptimeMs?d(t.uptimeMs):L(`common.na`),a=e.hello?.policy?.tickIntervalMs,o=a?`${(a/1e3).toFixed(a%1e3==0?0:1)}s`:L(`common.na`),s=t?.authMode===`trusted-proxy`,c=xx(e.connected,e.lastError,e.lastErrorCode)?n`
      <div class="muted" style="margin-top: 8px">
        ${L(`overview.pairing.hint`)}
        <div style="margin-top: 6px">
          <span class="mono">openclaw devices list</span><br />
          <span class="mono">openclaw devices approve &lt;requestId&gt;</span>
        </div>
        <div style="margin-top: 6px; font-size: 12px;">
          ${L(`overview.pairing.mobileHint`)}
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/control-ui#device-pairing-first-connection"
            target=${Iy}
            rel=${Ly()}
            title="Device pairing docs (opens in new tab)"
            >Docs: Device pairing</a
          >
        </div>
      </div>
    `:null,l=(()=>{let t=Sx({connected:e.connected,lastError:e.lastError,lastErrorCode:e.lastErrorCode,hasToken:!!e.settings.token.trim(),hasPassword:!!e.password.trim()});return t==null?null:t===`required`?n`
        <div class="muted" style="margin-top: 8px">
          ${L(`overview.auth.required`)}
          <div style="margin-top: 6px">
            <span class="mono">openclaw dashboard --no-open</span> → tokenized URL<br />
            <span class="mono">openclaw doctor --generate-gateway-token</span> → set token
          </div>
          <div style="margin-top: 6px">
            <a
              class="session-link"
              href="https://docs.openclaw.ai/web/dashboard"
              target=${Iy}
              rel=${Ly()}
              title="Control UI auth docs (opens in new tab)"
              >Docs: Control UI auth</a
            >
          </div>
        </div>
      `:n`
      <div class="muted" style="margin-top: 8px">
        ${L(`overview.auth.failed`,{command:`openclaw dashboard --no-open`})}
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/dashboard"
            target=${Iy}
            rel=${Ly()}
            title="Control UI auth docs (opens in new tab)"
            >Docs: Control UI auth</a
          >
        </div>
      </div>
    `})(),u=e.connected||!e.lastError||!(typeof window<`u`)||window.isSecureContext||!Cx(e.connected,e.lastError,e.lastErrorCode)?null:n`
      <div class="muted" style="margin-top: 8px">
        ${L(`overview.insecure.hint`,{url:`http://127.0.0.1:18789`})}
        <div style="margin-top: 6px">
          ${L(`overview.insecure.stayHttp`,{config:`gateway.controlUi.allowInsecureAuth: true`})}
        </div>
        <div style="margin-top: 6px">
          <a
            class="session-link"
            href="https://docs.openclaw.ai/gateway/tailscale"
            target=${Iy}
            rel=${Ly()}
            title="Tailscale Serve docs (opens in new tab)"
            >Docs: Tailscale Serve</a
          >
          <span class="muted"> · </span>
          <a
            class="session-link"
            href="https://docs.openclaw.ai/web/control-ui#insecure-http"
            target=${Iy}
            rel=${Ly()}
            title="Insecure HTTP docs (opens in new tab)"
            >Docs: Insecure HTTP</a
          >
        </div>
      </div>
    `,f=ce(e.settings.locale)?e.settings.locale:fe.getLocale();return n`
    <section class="grid">
      <div class="card">
        <div class="card-title">${L(`overview.access.title`)}</div>
        <div class="card-sub">${L(`overview.access.subtitle`)}</div>
        <div class="ov-access-grid" style="margin-top: 16px;">
          <label class="field ov-access-grid__full">
            <span>${L(`overview.access.wsUrl`)}</span>
            <input
              .value=${e.settings.gatewayUrl}
              @input=${t=>{let n=t.target.value;e.onSettingsChange({...e.settings,gatewayUrl:n,token:n.trim()===e.settings.gatewayUrl.trim()?e.settings.token:``})}}
              placeholder="ws://100.x.y.z:18789"
            />
          </label>
          ${s?``:n`
                <label class="field">
                  <span>${L(`overview.access.token`)}</span>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <input
                      type=${e.showGatewayToken?`text`:`password`}
                      autocomplete="off"
                      style="flex: 1;"
                      .value=${e.settings.token}
                      @input=${t=>{let n=t.target.value;e.onSettingsChange({...e.settings,token:n})}}
                      placeholder="OPENCLAW_GATEWAY_TOKEN"
                    />
                    <button
                      type="button"
                      class="btn btn--icon ${e.showGatewayToken?`active`:``}"
                      style="width: 36px; height: 36px;"
                      title=${e.showGatewayToken?`Hide token`:`Show token`}
                      aria-label="Toggle token visibility"
                      aria-pressed=${e.showGatewayToken}
                      @click=${e.onToggleGatewayTokenVisibility}
                    >
                      ${e.showGatewayToken?W.eye:W.eyeOff}
                    </button>
                  </div>
                </label>
                <label class="field">
                  <span>${L(`overview.access.password`)}</span>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <input
                      type=${e.showGatewayPassword?`text`:`password`}
                      autocomplete="off"
                      style="flex: 1;"
                      .value=${e.password}
                      @input=${t=>{let n=t.target.value;e.onPasswordChange(n)}}
                      placeholder="system or shared password"
                    />
                    <button
                      type="button"
                      class="btn btn--icon ${e.showGatewayPassword?`active`:``}"
                      style="width: 36px; height: 36px;"
                      title=${e.showGatewayPassword?`Hide password`:`Show password`}
                      aria-label="Toggle password visibility"
                      aria-pressed=${e.showGatewayPassword}
                      @click=${e.onToggleGatewayPasswordVisibility}
                    >
                      ${e.showGatewayPassword?W.eye:W.eyeOff}
                    </button>
                  </div>
                </label>
              `}
          <label class="field">
            <span>${L(`overview.access.sessionKey`)}</span>
            <input
              .value=${e.settings.sessionKey}
              @input=${t=>{let n=t.target.value;e.onSessionKeyChange(n)}}
            />
          </label>
          <label class="field">
            <span>${L(`overview.access.language`)}</span>
            <select
              .value=${f}
              @change=${t=>{let n=t.target.value;fe.setLocale(n),e.onSettingsChange({...e.settings,locale:n})}}
            >
              ${I.map(e=>{let t=e.replace(/-([a-zA-Z])/g,(e,t)=>t.toUpperCase());return n`<option value=${e} ?selected=${f===e}>
                  ${L(`languages.${t}`)}
                </option>`})}
            </select>
          </label>
        </div>
        <div class="row" style="margin-top: 14px;">
          <button class="btn" @click=${()=>e.onConnect()}>${L(`common.connect`)}</button>
          <button class="btn" @click=${()=>e.onRefresh()}>${L(`common.refresh`)}</button>
          <span class="muted">${L(s?`overview.access.trustedProxy`:`overview.access.connectHint`)}</span>
        </div>
        ${e.connected?i:n`
                <div class="login-gate__help" style="margin-top: 16px;">
                  <div class="login-gate__help-title">${L(`overview.connection.title`)}</div>
                  <ol class="login-gate__steps">
                    <li>${L(`overview.connection.step1`)}<code>openclaw gateway run</code></li>
                    <li>${L(`overview.connection.step2`)}<code>openclaw dashboard --no-open</code></li>
                    <li>${L(`overview.connection.step3`)}</li>
                    <li>${L(`overview.connection.step4`)}<code>openclaw doctor --generate-gateway-token</code></li>
                  </ol>
                  <div class="login-gate__docs">
                    ${L(`overview.connection.docsHint`)}
                    <a
                      class="session-link"
                      href="https://docs.openclaw.ai/web/dashboard"
                      target="_blank"
                      rel="noreferrer"
                    >${L(`overview.connection.docsLink`)}</a>
                  </div>
                </div>
              `}
      </div>

      <div class="card">
        <div class="card-title">${L(`overview.snapshot.title`)}</div>
        <div class="card-sub">${L(`overview.snapshot.subtitle`)}</div>
        <div class="stat-grid" style="margin-top: 16px;">
          <div class="stat">
            <div class="stat-label">${L(`overview.snapshot.status`)}</div>
            <div class="stat-value ${e.connected?`ok`:`warn`}">
              ${e.connected?L(`common.ok`):L(`common.offline`)}
            </div>
          </div>
          <div class="stat">
            <div class="stat-label">${L(`overview.snapshot.uptime`)}</div>
            <div class="stat-value">${r}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${L(`overview.snapshot.tickInterval`)}</div>
            <div class="stat-value">${o}</div>
          </div>
          <div class="stat">
            <div class="stat-label">${L(`overview.snapshot.lastChannelsRefresh`)}</div>
            <div class="stat-value">
              ${e.lastChannelsRefresh?p(e.lastChannelsRefresh):L(`common.na`)}
            </div>
          </div>
        </div>
        ${e.lastError?n`<div class="callout danger" style="margin-top: 14px;">
              <div>${e.lastError}</div>
              ${c??``}
              ${l??``}
              ${u??``}
            </div>`:n`
                <div class="callout" style="margin-top: 14px">
                  ${L(`overview.snapshot.channelsHint`)}
                </div>
              `}
      </div>
    </section>

    <div class="ov-section-divider"></div>

    ${gx({usageResult:e.usageResult,sessionsResult:e.sessionsResult,skillsReport:e.skillsReport,cronJobs:e.cronJobs,cronStatus:e.cronStatus,presenceCount:e.presenceCount,onNavigate:e.onNavigate})}

    ${ix({items:e.attentionItems})}

    <div class="ov-section-divider"></div>

    <div class="ov-bottom-grid">
      ${_x({events:e.eventLog})}

      ${Tx({lines:e.overviewLogLines,onRefreshLogs:e.onRefreshLogs})}
    </div>

  `}var Dx;function Ox(e){let t={mod:null,promise:null};return()=>t.mod?t.mod:(t.promise||=e().then(e=>(t.mod=e,Dx?.(),e)),null)}var kx=Ox(()=>P(()=>import(`./agents-BxjbKlLv.js`),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),Ax=Ox(()=>P(()=>import(`./channels-BHNFdqm0.js`),__vite__mapDeps([5,1,2,3]),import.meta.url)),jx=Ox(()=>P(()=>import(`./cron-L9UojfXC.js`),__vite__mapDeps([6,1,2]),import.meta.url)),Mx=Ox(()=>P(()=>import(`./debug-C7cARCeJ.js`),__vite__mapDeps([7,1]),import.meta.url)),Nx=Ox(()=>P(()=>import(`./instances-BQGyKX-S.js`),__vite__mapDeps([8,1]),import.meta.url)),Px=Ox(()=>P(()=>import(`./logs-CK-znQv9.js`),__vite__mapDeps([9,1]),import.meta.url)),Fx=Ox(()=>P(()=>import(`./nodes-WLLAEs_x.js`),__vite__mapDeps([10,1,2]),import.meta.url)),Ix=Ox(()=>P(()=>import(`./sessions-DV3Qn8ZG.js`),__vite__mapDeps([11,1,2]),import.meta.url)),Lx=Ox(()=>P(()=>import(`./skills-Cqf2_pRr.js`),__vite__mapDeps([12,1,2,4]),import.meta.url));function Rx(e,t){let n=e();return n?t(n):i}var zx=`openclaw:control-ui:update-banner-dismissed:v1`,Bx=[`off`,`minimal`,`low`,`medium`,`high`],Vx=[`UTC`,`America/Los_Angeles`,`America/Denver`,`America/Chicago`,`America/New_York`,`Europe/London`,`Europe/Berlin`,`Asia/Tokyo`];function Hx(e){return/^https?:\/\//i.test(e.trim())}function Ux(e){return typeof e==`string`?e.trim():``}function Wx(e){let t=new Set,n=[];for(let r of e){let e=r.trim();if(!e)continue;let i=e.toLowerCase();t.has(i)||(t.add(i),n.push(e))}return n}function Gx(){try{let e=j()?.getItem(zx);if(!e)return null;let t=JSON.parse(e);return!t||typeof t.latestVersion!=`string`?null:{latestVersion:t.latestVersion,channel:typeof t.channel==`string`?t.channel:null,dismissedAtMs:typeof t.dismissedAtMs==`number`?t.dismissedAtMs:Date.now()}}catch{return null}}function Kx(e){let t=Gx();if(!t)return!1;let n=e,r=n&&typeof n.latestVersion==`string`?n.latestVersion:null,i=n&&typeof n.channel==`string`?n.channel:null;return!!(r&&t.latestVersion===r&&t.channel===i)}function qx(e){let t=e,n=t&&typeof t.latestVersion==`string`?t.latestVersion:null;if(!n)return;let r={latestVersion:n,channel:t&&typeof t.channel==`string`?t.channel:null,dismissedAtMs:Date.now()};try{j()?.setItem(zx,JSON.stringify(r))}catch{}}var Jx=/^data:/i,Yx=/^https?:\/\//i,Xx=[`channels`,`messages`,`broadcast`,`talk`,`audio`],Zx=[`__appearance__`,`ui`,`wizard`],Qx=[`commands`,`hooks`,`bindings`,`cron`,`approvals`,`plugins`],$x=[`gateway`,`web`,`browser`,`nodeHost`,`canvasHost`,`discovery`,`media`,`acp`,`mcp`],eS=[`agents`,`models`,`skills`,`tools`,`memory`,`session`];function tS(e){let t=e.agentsList?.agents??[],n=C(e.sessionKey)?.agentId??e.agentsList?.defaultId??`main`,r=t.find(e=>e.id===n)?.identity,i=r?.avatarUrl??r?.avatar;if(i)return Jx.test(i)||Yx.test(i)?i:r?.avatarUrl}function nS(e){let t=e,r=typeof t.requestUpdate==`function`?()=>t.requestUpdate?.():void 0;if(Dx=r,!e.connected)return n`
      ${tx(e)}
      ${ex(e)}
    `;let a=e.presenceEntries.length,o=e.sessionsResult?.count??null,s=e.cronStatus?.nextWakeAtMs??null,c=e.connected?null:L(`chat.disconnected`),l=e.tab===`chat`,u=l&&(e.settings.chatFocusMode||e.onboarding),d=!!(e.navDrawerOpen&&!u&&!e.onboarding),f=!!(e.settings.navCollapsed&&!d),p=e.onboarding?!1:e.settings.chatShowThinking,m=e.onboarding?!0:e.settings.chatShowToolCalls,h=tS(e),g=e.chatAvatarUrl??h??null,_=e.configForm??e.configSnapshot?.config,v=Ua(e.basePath??``),y=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id??null,b=k(e.sessionKey),x=!!(y&&b&&y===b),S=()=>e.configForm??e.configSnapshot?.config,C=e=>Yn(S(),e),w=t=>Xn(e,t),T=rd(new Set([...e.agentsList?.agents?.map(e=>e.id.trim())??[],...e.cronJobs.map(e=>typeof e.agentId==`string`?e.agentId.trim():``).filter(Boolean)].filter(Boolean))),E=rd(new Set([...e.cronModelSuggestions,...id(_),...e.cronJobs.map(e=>e.payload.kind!==`agentTurn`||typeof e.payload.model!=`string`?``:e.payload.model.trim()).filter(Boolean)].filter(Boolean))),D=Oi(e),ee=e.cronForm.deliveryChannel&&e.cronForm.deliveryChannel.trim()?e.cronForm.deliveryChannel.trim():`last`,te=e.cronJobs.map(e=>Ux(e.delivery?.to)).filter(Boolean),O=(ee===`last`?Object.values(e.channelsSnapshot?.channelAccounts??{}).flat():e.channelsSnapshot?.channelAccounts?.[ee]??[]).flatMap(e=>[Ux(e.accountId),Ux(e.name)]).filter(Boolean),ne=Wx([...te,...O]),re=Wx(O),ie=e.cronForm.deliveryMode===`webhook`?ne.filter(e=>Hx(e)):ne;return n`
    ${Yy({open:e.paletteOpen,query:e.paletteQuery,activeIndex:e.paletteActiveIndex,onToggle:()=>{e.paletteOpen=!e.paletteOpen},onQueryChange:t=>{e.paletteQuery=t},onActiveIndexChange:t=>{e.paletteActiveIndex=t},onNavigate:t=>{e.setTab(t)},onSlashCommand:t=>{e.setTab(`chat`),e.chatMessage=t.endsWith(` `)?t:`${t} `}})}
    <div
      class="shell ${l?`shell--chat`:``} ${u?`shell--chat-focus`:``} ${f?`shell--nav-collapsed`:``} ${d?`shell--nav-drawer-open`:``} ${e.onboarding?`shell--onboarding`:``}"
    >
      <button
        type="button"
        class="shell-nav-backdrop"
        aria-label="${L(`nav.collapse`)}"
        @click=${()=>{e.navDrawerOpen=!1}}
      ></button>
      <header class="topbar">
        <div class="topnav-shell">
          <button
            type="button"
            class="topbar-nav-toggle"
            @click=${()=>{e.navDrawerOpen=!d}}
            title="${L(d?`nav.collapse`:`nav.expand`)}"
            aria-label="${L(d?`nav.collapse`:`nav.expand`)}"
            aria-expanded=${d}
          >
            <span class="nav-collapse-toggle__icon" aria-hidden="true">${W.menu}</span>
          </button>
          <div class="topnav-shell__content">
            <dashboard-header .tab=${e.tab}></dashboard-header>
          </div>
          <div class="topnav-shell__actions">
            <button
              class="topbar-search"
              @click=${()=>{e.paletteOpen=!e.paletteOpen}}
              title="Search or jump to… (⌘K)"
              aria-label="Open command palette"
            >
              <span class="topbar-search__label">${L(`common.search`)}</span>
              <kbd class="topbar-search__kbd">⌘K</kbd>
            </button>
            <div class="topbar-status">
              ${l?fy(e):i}
              ${Oy(e)}
            </div>
          </div>
        </div>
      </header>
      <div class="shell-nav">
        <aside class="sidebar ${f?`sidebar--collapsed`:``}">
          <div class="sidebar-shell">
            <div class="sidebar-shell__header">
              <div class="sidebar-brand">
                ${f?i:n`
                        <img class="sidebar-brand__logo" src="${Ku(v)}" alt="OpenClaw" />
                        <span class="sidebar-brand__copy">
                          <span class="sidebar-brand__eyebrow">${L(`nav.control`)}</span>
                          <span class="sidebar-brand__title">OpenClaw</span>
                        </span>
                      `}
              </div>
              <button
                type="button"
                class="nav-collapse-toggle"
                @click=${()=>e.applySettings({...e.settings,navCollapsed:!e.settings.navCollapsed})}
                title="${L(f?`nav.expand`:`nav.collapse`)}"
                aria-label="${L(f?`nav.expand`:`nav.collapse`)}"
              >
                <span class="nav-collapse-toggle__icon" aria-hidden="true">${f?W.panelLeftOpen:W.panelLeftClose}</span>
              </button>
            </div>
            <div class="sidebar-shell__body">
              <nav class="sidebar-nav">
                ${Ba.map(t=>{let r=e.settings.navGroupsCollapsed[t.label]??!1,a=t.tabs.some(t=>t===e.tab),o=f||a||!r;return n`
                    <section class="nav-section ${o?``:`nav-section--collapsed`}">
                      ${f?i:n`
                              <button
                                class="nav-section__label"
                                @click=${()=>{let n={...e.settings.navGroupsCollapsed};n[t.label]=!r,e.applySettings({...e.settings,navGroupsCollapsed:n})}}
                                aria-expanded=${o}
                              >
                                <span class="nav-section__label-text">${L(`nav.${t.label}`)}</span>
                                <span class="nav-section__chevron">
                                  ${W.chevronDown}
                                </span>
                              </button>
                            `}
                      <div class="nav-section__items">
                        ${t.tabs.map(t=>cy(e,t,{collapsed:f}))}
                      </div>
                    </section>
                  `})}
              </nav>
            </div>
            <div class="sidebar-shell__footer">
              <div class="sidebar-utility-group">
                <a
                  class="nav-item nav-item--external sidebar-utility-link"
                  href="https://docs.openclaw.ai"
                  target=${Iy}
                  rel=${Ly()}
                  title="${L(`common.docs`)} (opens in new tab)"
                >
                  <span class="nav-item__icon" aria-hidden="true">${W.book}</span>
                  ${f?i:n`
                          <span class="nav-item__text">${L(`common.docs`)}</span>
                          <span class="nav-item__external-icon">${W.externalLink}</span>
                        `}
                </a>
                <div class="sidebar-mode-switch">
                  ${Oy(e)}
                </div>
                ${(()=>{let t=e.hello?.server?.version??``;return t?n`
                        <div class="sidebar-version" title=${`v${t}`}>
                          ${f?n`
                                  ${ky(e)}
                                `:n`
                                  <span class="sidebar-version__label">${L(`common.version`)}</span>
                                  <span class="sidebar-version__text">v${t}</span>
                                  ${ky(e)}
                                `}
                        </div>
                      `:i})()}
              </div>
            </div>
          </div>
        </aside>
      </div>
      <main class="content ${l?`content--chat`:``}">
        ${e.updateAvailable&&e.updateAvailable.latestVersion!==e.updateAvailable.currentVersion&&!Kx(e.updateAvailable)?n`<div class="update-banner callout danger" role="alert">
              <strong>Update available:</strong> v${e.updateAvailable.latestVersion}
              (running v${e.updateAvailable.currentVersion}).
              <button
                class="btn btn--sm update-banner__btn"
                ?disabled=${e.updateRunning||!e.connected}
                @click=${()=>qn(e)}
              >${e.updateRunning?`Updating…`:`Update now`}</button>
              <button
                class="update-banner__close"
                type="button"
                title="Dismiss"
                aria-label="Dismiss update banner"
                @click=${()=>{qx(e.updateAvailable),e.updateAvailable=null}}
              >
                ${W.x}
              </button>
            </div>`:i}
        ${e.tab===`config`?i:n`<section class="content-header">
              <div>
                ${l?uy(e):n`<div class="page-title">${Ya(e.tab)}</div>`}
                ${l?i:n`<div class="page-sub">${Xa(e.tab)}</div>`}
              </div>
              <div class="page-meta">
                ${e.lastError?n`<div class="pill danger">${e.lastError}</div>`:i}
                ${l?dy(e):i}
              </div>
            </section>`}

        ${e.tab===`overview`?Ex({connected:e.connected,hello:e.hello,settings:e.settings,password:e.password,lastError:e.lastError,lastErrorCode:e.lastErrorCode,presenceCount:a,sessionsCount:o,cronEnabled:e.cronStatus?.enabled??null,cronNext:s,lastChannelsRefresh:e.channelsLastSuccess,usageResult:e.usageResult,sessionsResult:e.sessionsResult,skillsReport:e.skillsReport,cronJobs:e.cronJobs,cronStatus:e.cronStatus,attentionItems:e.attentionItems,eventLog:e.eventLog,overviewLogLines:e.overviewLogLines,showGatewayToken:e.overviewShowGatewayToken,showGatewayPassword:e.overviewShowGatewayPassword,onSettingsChange:t=>e.applySettings(t),onPasswordChange:t=>e.password=t,onSessionKeyChange:t=>{e.sessionKey=t,e.chatMessage=``,e.resetToolStream(),e.applySettings({...e.settings,sessionKey:t,lastActiveSessionKey:t}),e.loadAssistantIdentity()},onToggleGatewayTokenVisibility:()=>{e.overviewShowGatewayToken=!e.overviewShowGatewayToken},onToggleGatewayPasswordVisibility:()=>{e.overviewShowGatewayPassword=!e.overviewShowGatewayPassword},onConnect:()=>e.connect(),onRefresh:()=>e.loadOverview(),onNavigate:t=>e.setTab(t),onRefreshLogs:()=>e.loadOverview()}):i}

        ${e.tab===`channels`?Rx(Ax,t=>t.renderChannels({connected:e.connected,loading:e.channelsLoading,snapshot:e.channelsSnapshot,lastError:e.channelsError,lastSuccessAt:e.channelsLastSuccess,whatsappMessage:e.whatsappLoginMessage,whatsappQrDataUrl:e.whatsappLoginQrDataUrl,whatsappConnected:e.whatsappLoginConnected,whatsappBusy:e.whatsappBusy,configSchema:e.configSchema,configSchemaLoading:e.configSchemaLoading,configForm:e.configForm,configUiHints:e.configUiHints,configSaving:e.configSaving,configFormDirty:e.configFormDirty,nostrProfileFormState:e.nostrProfileFormState,nostrProfileAccountId:e.nostrProfileAccountId,onRefresh:t=>dn(e,t),onWhatsAppStart:t=>e.handleWhatsAppStart(t),onWhatsAppWait:()=>e.handleWhatsAppWait(),onWhatsAppLogout:()=>e.handleWhatsAppLogout(),onConfigPatch:(t,n)=>U(e,t,n),onConfigSave:()=>e.handleChannelConfigSave(),onConfigReload:()=>e.handleChannelConfigReload(),onNostrProfileEdit:(t,n)=>e.handleNostrProfileEdit(t,n),onNostrProfileCancel:()=>e.handleNostrProfileCancel(),onNostrProfileFieldChange:(t,n)=>e.handleNostrProfileFieldChange(t,n),onNostrProfileSave:()=>e.handleNostrProfileSave(),onNostrProfileImport:()=>e.handleNostrProfileImport(),onNostrProfileToggleAdvanced:()=>e.handleNostrProfileToggleAdvanced()})):i}

        ${e.tab===`instances`?Rx(Nx,t=>t.renderInstances({loading:e.presenceLoading,entries:e.presenceEntries,lastError:e.presenceError,statusMessage:e.presenceStatus,onRefresh:()=>sa(e)})):i}

        ${e.tab===`sessions`?Rx(Ix,t=>t.renderSessions({loading:e.sessionsLoading,result:e.sessionsResult,error:e.sessionsError,activeMinutes:e.sessionsFilterActive,limit:e.sessionsFilterLimit,includeGlobal:e.sessionsIncludeGlobal,includeUnknown:e.sessionsIncludeUnknown,basePath:e.basePath,searchQuery:e.sessionsSearchQuery,sortColumn:e.sessionsSortColumn,sortDir:e.sessionsSortDir,page:e.sessionsPage,pageSize:e.sessionsPageSize,selectedKeys:e.sessionsSelectedKeys,onFiltersChange:t=>{e.sessionsFilterActive=t.activeMinutes,e.sessionsFilterLimit=t.limit,e.sessionsIncludeGlobal=t.includeGlobal,e.sessionsIncludeUnknown=t.includeUnknown},onSearchChange:t=>{e.sessionsSearchQuery=t,e.sessionsPage=0},onSortChange:(t,n)=>{e.sessionsSortColumn=t,e.sessionsSortDir=n,e.sessionsPage=0},onPageChange:t=>{e.sessionsPage=t},onPageSizeChange:t=>{e.sessionsPageSize=t,e.sessionsPage=0},onRefresh:()=>la(e),onPatch:(t,n)=>ua(e,t,n),onToggleSelect:t=>{let n=new Set(e.sessionsSelectedKeys);n.has(t)?n.delete(t):n.add(t),e.sessionsSelectedKeys=n},onSelectPage:t=>{let n=new Set(e.sessionsSelectedKeys);for(let e of t)n.add(e);e.sessionsSelectedKeys=n},onDeselectPage:t=>{let n=new Set(e.sessionsSelectedKeys);for(let e of t)n.delete(e);e.sessionsSelectedKeys=n},onDeselectAll:()=>{e.sessionsSelectedKeys=new Set},onDeleteSelected:async()=>{let t=await da(e,[...e.sessionsSelectedKeys]);if(t.length>0){let n=new Set(e.sessionsSelectedKeys);for(let e of t)n.delete(e);e.sessionsSelectedKeys=n}},onNavigateToChat:t=>{py(e,t),e.setTab(`chat`)}})):i}

        ${ey(e)}

        ${e.tab===`cron`?Rx(jx,t=>t.renderCron({basePath:e.basePath,loading:e.cronLoading,status:e.cronStatus,jobs:D,jobsLoadingMore:e.cronJobsLoadingMore,jobsTotal:e.cronJobsTotal,jobsHasMore:e.cronJobsHasMore,jobsQuery:e.cronJobsQuery,jobsEnabledFilter:e.cronJobsEnabledFilter,jobsScheduleKindFilter:e.cronJobsScheduleKindFilter,jobsLastStatusFilter:e.cronJobsLastStatusFilter,jobsSortBy:e.cronJobsSortBy,jobsSortDir:e.cronJobsSortDir,editingJobId:e.cronEditingJobId,error:e.cronError,busy:e.cronBusy,form:e.cronForm,channels:e.channelsSnapshot?.channelMeta?.length?e.channelsSnapshot.channelMeta.map(e=>e.id):e.channelsSnapshot?.channelOrder??[],channelLabels:e.channelsSnapshot?.channelLabels??{},channelMeta:e.channelsSnapshot?.channelMeta??[],runsJobId:e.cronRunsJobId,runs:e.cronRuns,runsTotal:e.cronRunsTotal,runsHasMore:e.cronRunsHasMore,runsLoadingMore:e.cronRunsLoadingMore,runsScope:e.cronRunsScope,runsStatuses:e.cronRunsStatuses,runsDeliveryStatuses:e.cronRunsDeliveryStatuses,runsStatusFilter:e.cronRunsStatusFilter,runsQuery:e.cronRunsQuery,runsSortDir:e.cronRunsSortDir,fieldErrors:e.cronFieldErrors,canSubmit:!bi(e.cronFieldErrors),agentSuggestions:T,modelSuggestions:E,thinkingSuggestions:Bx,timezoneSuggestions:Vx,deliveryToSuggestions:ie,accountSuggestions:re,onFormChange:t=>{e.cronForm=vi({...e.cronForm,...t}),e.cronFieldErrors=yi(e.cronForm)},onRefresh:()=>e.loadCron(),onAdd:()=>Ri(e),onEdit:t=>Gi(e,t),onClone:t=>qi(e,t),onCancelEdit:()=>Ji(e),onToggle:(t,n)=>zi(e,t,n),onRun:(t,n)=>Bi(e,t,n??`force`),onRemove:t=>Vi(e,t),onLoadRuns:async t=>{Wi(e,{cronRunsScope:`job`}),await Hi(e,t)},onLoadMoreJobs:()=>Ti(e),onJobsFiltersChange:async t=>{Di(e,t),(typeof t.cronJobsQuery==`string`||t.cronJobsEnabledFilter||t.cronJobsSortBy||t.cronJobsSortDir)&&await Ei(e)},onJobsFiltersReset:async()=>{Di(e,{cronJobsQuery:``,cronJobsEnabledFilter:`all`,cronJobsScheduleKindFilter:`all`,cronJobsLastStatusFilter:`all`,cronJobsSortBy:`nextRunAtMs`,cronJobsSortDir:`asc`}),await Ei(e)},onLoadMoreRuns:()=>Ui(e),onRunsFiltersChange:async t=>{if(Wi(e,t),e.cronRunsScope===`all`){await Hi(e,null);return}await Hi(e,e.cronRunsJobId)},onNavigateToChat:t=>{py(e,t),e.setTab(`chat`)}})):i}

        ${e.tab===`agents`?Rx(kx,t=>t.renderAgents({basePath:e.basePath??``,loading:e.agentsLoading,error:e.agentsError,agentsList:e.agentsList,selectedAgentId:y,activePanel:e.agentsPanel,config:{form:_,loading:e.configLoading,saving:e.configSaving,dirty:e.configFormDirty},channels:{snapshot:e.channelsSnapshot,loading:e.channelsLoading,error:e.channelsError,lastSuccess:e.channelsLastSuccess},cron:{status:e.cronStatus,jobs:e.cronJobs,loading:e.cronLoading,error:e.cronError},agentFiles:{list:e.agentFilesList,loading:e.agentFilesLoading,error:e.agentFilesError,active:e.agentFileActive,contents:e.agentFileContents,drafts:e.agentFileDrafts,saving:e.agentFileSaving},agentIdentityLoading:e.agentIdentityLoading,agentIdentityError:e.agentIdentityError,agentIdentityById:e.agentIdentityById,agentSkills:{report:e.agentSkillsReport,loading:e.agentSkillsLoading,error:e.agentSkillsError,agentId:e.agentSkillsAgentId,filter:e.skillsFilter},toolsCatalog:{loading:e.toolsCatalogLoading,error:e.toolsCatalogError,result:e.toolsCatalogResult},toolsEffective:{loading:e.toolsEffectiveLoading,error:e.toolsEffectiveError,result:e.toolsEffectiveResult},runtimeSessionKey:e.sessionKey,runtimeSessionMatchesSelectedAgent:x,modelCatalog:e.chatModelCatalog??[],onRefresh:async()=>{await si(e);let t=e.agentsList?.agents?.map(e=>e.id)??[];t.length>0&&Xr(e,t);let n=e.agentsSelectedId??e.agentsList?.defaultId??e.agentsList?.agents?.[0]?.id??null;e.agentsPanel===`files`&&n&&jy(e,n),e.agentsPanel===`skills`&&n&&Zr(e,n),e.agentsPanel===`tools`&&n&&(ci(e,n),n===k(e.sessionKey)&&li(e,{agentId:n,sessionKey:e.sessionKey})),e.agentsPanel===`channels`&&dn(e,!1),e.agentsPanel===`cron`&&e.loadCron()},onSelectAgent:t=>{e.agentsSelectedId!==t&&(e.agentsSelectedId=t,e.agentFilesList=null,e.agentFilesError=null,e.agentFilesLoading=!1,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},e.agentSkillsReport=null,e.agentSkillsError=null,e.agentSkillsAgentId=null,e.toolsCatalogResult=null,e.toolsCatalogError=null,e.toolsCatalogLoading=!1,e.toolsEffectiveResult=null,e.toolsEffectiveResultKey=null,e.toolsEffectiveError=null,e.toolsEffectiveLoading=!1,e.toolsEffectiveLoadingKey=null,Yr(e,t),e.agentsPanel===`files`&&jy(e,t),e.agentsPanel===`tools`&&(ci(e,t),t===k(e.sessionKey)&&li(e,{agentId:t,sessionKey:e.sessionKey})),e.agentsPanel===`skills`&&Zr(e,t))},onSelectPanel:t=>{if(e.agentsPanel=t,t===`files`&&y&&e.agentFilesList?.agentId!==y&&(e.agentFilesList=null,e.agentFilesError=null,e.agentFileActive=null,e.agentFileContents={},e.agentFileDrafts={},jy(e,y)),t===`skills`&&y&&Zr(e,y),t===`tools`&&y)if((e.toolsCatalogResult?.agentId!==y||e.toolsCatalogError)&&ci(e,y),y===k(e.sessionKey)){let t=ui(e,{agentId:y,sessionKey:e.sessionKey});(e.toolsEffectiveResultKey!==t||e.toolsEffectiveError)&&li(e,{agentId:y,sessionKey:e.sessionKey})}else e.toolsEffectiveResult=null,e.toolsEffectiveResultKey=null,e.toolsEffectiveError=null,e.toolsEffectiveLoading=!1,e.toolsEffectiveLoadingKey=null;t===`channels`&&dn(e,!1),t===`cron`&&e.loadCron()},onLoadFiles:t=>jy(e,t),onSelectFile:t=>{e.agentFileActive=t,y&&My(e,y,t)},onFileDraftChange:(t,n)=>{e.agentFileDrafts={...e.agentFileDrafts,[t]:n}},onFileReset:t=>{let n=e.agentFileContents[t]??``;e.agentFileDrafts={...e.agentFileDrafts,[t]:n}},onFileSave:t=>{y&&Ny(e,y,t,e.agentFileDrafts[t]??e.agentFileContents[t]??``)},onToolsProfileChange:(t,n,r)=>{let i=n||r?w(t):C(t);if(i<0)return;let a=[`agents`,`list`,i,`tools`];n?U(e,[...a,`profile`],n):Jn(e,[...a,`profile`]),r&&Jn(e,[...a,`allow`])},onToolsOverridesChange:(t,n,r)=>{let i=n.length>0||r.length>0?w(t):C(t);if(i<0)return;let a=[`agents`,`list`,i,`tools`];n.length>0?U(e,[...a,`alsoAllow`],n):Jn(e,[...a,`alsoAllow`]),r.length>0?U(e,[...a,`deny`],r):Jn(e,[...a,`deny`])},onConfigReload:()=>zn(e),onConfigSave:()=>pi(e),onChannelsRefresh:()=>dn(e,!1),onCronRefresh:()=>e.loadCron(),onCronRunNow:t=>{let n=e.cronJobs.find(e=>e.id===t);n&&Bi(e,n,`force`)},onSkillsFilterChange:t=>e.skillsFilter=t,onSkillsRefresh:()=>{y&&Zr(e,y)},onAgentSkillToggle:(t,n,r)=>{let i=w(t);if(i<0)return;let a=S()?.agents?.list,o=Array.isArray(a)?a[i]:void 0,s=n.trim();if(!s)return;let c=e.agentSkillsReport?.skills?.map(e=>e.name).filter(Boolean)??[],l=(Array.isArray(o?.skills)?o.skills.map(e=>String(e).trim()).filter(Boolean):void 0)??c,u=new Set(l);r?u.add(s):u.delete(s),U(e,[`agents`,`list`,i,`skills`],[...u])},onAgentSkillsClear:t=>{let n=C(t);n<0||Jn(e,[`agents`,`list`,n,`skills`])},onAgentSkillsDisableAll:t=>{let n=w(t);n<0||U(e,[`agents`,`list`,n,`skills`],[])},onModelChange:(t,n)=>{let r=n?w(t):C(t);if(r<0)return;let i=S()?.agents?.list,a=[`agents`,`list`,r,`model`];if(!n)Jn(e,a);else{let t=(Array.isArray(i)?i[r]:void 0)?.model;if(t&&typeof t==`object`&&!Array.isArray(t)){let r=t.fallbacks;U(e,a,{primary:n,...Array.isArray(r)?{fallbacks:r}:{}})}else U(e,a,n)}di(e)},onModelFallbacksChange:(t,n)=>{let r=n.map(e=>e.trim()).filter(Boolean),i=Ju(S(),t),a=Qu(i.entry?.model)??Qu(i.defaults?.model),o=ed(i.entry?.model,i.defaults?.model),s=r.length>0?a?w(t):-1:(o?.length??0)>0||C(t)>=0?w(t):-1;if(s<0)return;let c=S()?.agents?.list,l=[`agents`,`list`,s,`model`],u=(Array.isArray(c)?c[s]:void 0)?.model,d=(()=>{if(typeof u==`string`)return u.trim()||null;if(u&&typeof u==`object`&&!Array.isArray(u)){let e=u.primary;if(typeof e==`string`)return e.trim()||null}return null})()??a;if(r.length===0){d?U(e,l,d):Jn(e,l);return}d&&U(e,l,{primary:d,fallbacks:r})},onSetDefault:t=>{_&&U(e,[`agents`,`defaultId`],t)}})):i}

        ${e.tab===`skills`?Rx(Lx,t=>t.renderSkills({connected:e.connected,loading:e.skillsLoading,report:e.skillsReport,error:e.skillsError,filter:e.skillsFilter,statusFilter:e.skillsStatusFilter,edits:e.skillEdits,messages:e.skillMessages,busyKey:e.skillsBusyKey,detailKey:e.skillsDetailKey,onFilterChange:t=>e.skillsFilter=t,onStatusFilterChange:t=>e.skillsStatusFilter=t,onRefresh:()=>ma(e,{clearMessages:!0}),onToggle:(t,n)=>ga(e,t,n),onEdit:(t,n)=>ha(e,t,n),onSaveKey:t=>_a(e,t),onInstall:(t,n,r)=>va(e,t,n,r),onDetailOpen:t=>e.skillsDetailKey=t,onDetailClose:()=>e.skillsDetailKey=null})):i}

        ${e.tab===`nodes`?Rx(Fx,t=>t.renderNodes({loading:e.nodesLoading,nodes:e.nodes,devicesLoading:e.devicesLoading,devicesError:e.devicesError,devicesList:e.devicesList,configForm:e.configForm??e.configSnapshot?.config,configLoading:e.configLoading,configSaving:e.configSaving,configDirty:e.configFormDirty,configFormMode:e.configFormMode,execApprovalsLoading:e.execApprovalsLoading,execApprovalsSaving:e.execApprovalsSaving,execApprovalsDirty:e.execApprovalsDirty,execApprovalsSnapshot:e.execApprovalsSnapshot,execApprovalsForm:e.execApprovalsForm,execApprovalsSelectedAgent:e.execApprovalsSelectedAgent,execApprovalsTarget:e.execApprovalsTarget,execApprovalsTargetNodeId:e.execApprovalsTargetNodeId,onRefresh:()=>Hr(e),onDevicesRefresh:()=>Yi(e),onDeviceApprove:t=>Xi(e,t),onDeviceReject:t=>Zi(e,t),onDeviceRotate:(t,n,r)=>Qi(e,{deviceId:t,role:n,scopes:r}),onDeviceRevoke:(t,n)=>$i(e,{deviceId:t,role:n}),onLoadConfig:()=>zn(e),onLoadExecApprovals:()=>na(e,e.execApprovalsTarget===`node`&&e.execApprovalsTargetNodeId?{kind:`node`,nodeId:e.execApprovalsTargetNodeId}:{kind:`gateway`}),onBindDefault:t=>{t?U(e,[`tools`,`exec`,`node`],t):Jn(e,[`tools`,`exec`,`node`])},onBindAgent:(t,n)=>{let r=[`agents`,`list`,t,`tools`,`exec`,`node`];n?U(e,r,n):Jn(e,r)},onSaveBindings:()=>Gn(e),onExecApprovalsTargetChange:(t,n)=>{e.execApprovalsTarget=t,e.execApprovalsTargetNodeId=n,e.execApprovalsSnapshot=null,e.execApprovalsForm=null,e.execApprovalsDirty=!1,e.execApprovalsSelectedAgent=null},onExecApprovalsSelectAgent:t=>{e.execApprovalsSelectedAgent=t},onExecApprovalsPatch:(t,n)=>aa(e,t,n),onExecApprovalsRemove:t=>oa(e,t),onSaveExecApprovals:()=>ia(e,e.execApprovalsTarget===`node`&&e.execApprovalsTargetNodeId?{kind:`node`,nodeId:e.execApprovalsTargetNodeId}:{kind:`gateway`})})):i}

        ${e.tab===`chat`?$m({sessionKey:e.sessionKey,onSessionKeyChange:t=>{e.sessionKey=t,e.chatMessage=``,e.chatAttachments=[],e.chatStream=null,e.chatStreamStartedAt=null,e.chatRunId=null,e.chatQueue=[],e.resetToolStream(),e.resetChatScroll(),e.applySettings({...e.settings,sessionKey:t,lastActiveSessionKey:t}),e.loadAssistantIdentity(),kg(e),n_(e)},thinkingLevel:e.chatThinkingLevel,showThinking:p,showToolCalls:m,loading:e.chatLoading,sending:e.chatSending,compactionStatus:e.compactionStatus,fallbackStatus:e.fallbackStatus,assistantAvatarUrl:g,messages:e.chatMessages,toolMessages:e.chatToolMessages,streamSegments:e.chatStreamSegments,stream:e.chatStream,streamStartedAt:e.chatStreamStartedAt,draft:e.chatMessage,queue:e.chatQueue,connected:e.connected,canSend:e.connected,disabledReason:c,error:e.lastError,sessions:e.sessionsResult,focusMode:u,onRefresh:()=>(e.resetToolStream(),Promise.all([kg(e),n_(e)])),onToggleFocusMode:()=>{e.onboarding||e.applySettings({...e.settings,chatFocusMode:!e.settings.chatFocusMode})},onChatScroll:t=>e.handleChatScroll(t),getDraft:()=>e.chatMessage,onDraftChange:t=>e.chatMessage=t,onRequestUpdate:r,attachments:e.chatAttachments,onAttachmentsChange:t=>e.chatAttachments=t,onSend:()=>e.handleSendChat(),canAbort:!!e.chatRunId,onAbort:()=>void e.handleAbortChat(),onQueueRemove:t=>e.removeQueuedMessage(t),onNewSession:()=>e.handleSendChat(`/new`,{restoreDraft:!0}),onClearHistory:async()=>{if(!(!e.client||!e.connected))try{await e.client.request(`sessions.reset`,{key:e.sessionKey}),e.chatMessages=[],e.chatStream=null,e.chatRunId=null,await kg(e)}catch(t){e.lastError=String(t)}},agentsList:e.agentsList,currentAgentId:y??`main`,onAgentChange:t=>{e.sessionKey=A({agentId:t}),e.chatMessages=[],e.chatStream=null,e.chatRunId=null,e.applySettings({...e.settings,sessionKey:e.sessionKey,lastActiveSessionKey:e.sessionKey}),kg(e),e.loadAssistantIdentity()},onNavigateToAgent:()=>{e.agentsSelectedId=y,e.setTab(`agents`)},onSessionSelect:t=>{py(e,t)},showNewMessages:e.chatNewMessagesBelow&&!e.chatManualRefreshInFlight,onScrollToBottom:()=>e.scrollToBottom(),sidebarOpen:e.sidebarOpen,sidebarContent:e.sidebarContent,sidebarError:e.sidebarError,splitRatio:e.splitRatio,onOpenSidebar:t=>e.handleOpenSidebar(t),onCloseSidebar:()=>e.handleCloseSidebar(),onSplitRatioChange:t=>e.handleSplitRatioChange(t),assistantName:e.assistantName,assistantAvatar:e.assistantAvatar,basePath:e.basePath??``}):i}

        ${e.tab===`config`?Xb({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.configFormMode,showModeToggle:!0,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.configSearchQuery,activeSection:e.configActiveSection&&(Xx.includes(e.configActiveSection)||Zx.includes(e.configActiveSection)||Qx.includes(e.configActiveSection)||$x.includes(e.configActiveSection)||eS.includes(e.configActiveSection))?null:e.configActiveSection,activeSubsection:e.configActiveSection&&(Xx.includes(e.configActiveSection)||Zx.includes(e.configActiveSection)||Qx.includes(e.configActiveSection)||$x.includes(e.configActiveSection)||eS.includes(e.configActiveSection))?null:e.configActiveSubsection,onRawChange:t=>{e.configRaw=t},onRequestUpdate:r,onFormModeChange:t=>e.configFormMode=t,onFormPatch:(t,n)=>U(e,t,n),onSearchChange:t=>e.configSearchQuery=t,onSectionChange:t=>{e.configActiveSection=t,e.configActiveSubsection=null},onSubsectionChange:t=>e.configActiveSubsection=t,onReload:()=>zn(e),onSave:()=>Gn(e),onApply:()=>Kn(e),onUpdate:()=>qn(e),onOpenFile:()=>Zn(e),version:e.hello?.server?.version??``,theme:e.theme,themeMode:e.themeMode,setTheme:(t,n)=>e.setTheme(t,n),setThemeMode:(t,n)=>e.setThemeMode(t,n),borderRadius:e.settings.borderRadius,setBorderRadius:t=>e.setBorderRadius(t),gatewayUrl:e.settings.gatewayUrl,assistantName:e.assistantName,configPath:e.configSnapshot?.path??null,excludeSections:[...Xx,...Qx,...$x,...eS,`ui`,`wizard`],includeVirtualSections:!1}):i}

        ${e.tab===`communications`?Xb({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.communicationsFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.communicationsSearchQuery,activeSection:e.communicationsActiveSection&&!Xx.includes(e.communicationsActiveSection)?null:e.communicationsActiveSection,activeSubsection:e.communicationsActiveSection&&!Xx.includes(e.communicationsActiveSection)?null:e.communicationsActiveSubsection,onRawChange:t=>{e.configRaw=t},onRequestUpdate:r,onFormModeChange:t=>e.communicationsFormMode=t,onFormPatch:(t,n)=>U(e,t,n),onSearchChange:t=>e.communicationsSearchQuery=t,onSectionChange:t=>{e.communicationsActiveSection=t,e.communicationsActiveSubsection=null},onSubsectionChange:t=>e.communicationsActiveSubsection=t,onReload:()=>zn(e),onSave:()=>Gn(e),onApply:()=>Kn(e),onUpdate:()=>qn(e),onOpenFile:()=>Zn(e),version:e.hello?.server?.version??``,theme:e.theme,themeMode:e.themeMode,setTheme:(t,n)=>e.setTheme(t,n),setThemeMode:(t,n)=>e.setThemeMode(t,n),borderRadius:e.settings.borderRadius,setBorderRadius:t=>e.setBorderRadius(t),gatewayUrl:e.settings.gatewayUrl,assistantName:e.assistantName,configPath:e.configSnapshot?.path??null,navRootLabel:`Communication`,includeSections:[...Xx],includeVirtualSections:!1}):i}

        ${e.tab===`appearance`?Xb({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.appearanceFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.appearanceSearchQuery,activeSection:e.appearanceActiveSection&&!Zx.includes(e.appearanceActiveSection)?null:e.appearanceActiveSection,activeSubsection:e.appearanceActiveSection&&!Zx.includes(e.appearanceActiveSection)?null:e.appearanceActiveSubsection,onRawChange:t=>{e.configRaw=t},onRequestUpdate:r,onFormModeChange:t=>e.appearanceFormMode=t,onFormPatch:(t,n)=>U(e,t,n),onSearchChange:t=>e.appearanceSearchQuery=t,onSectionChange:t=>{e.appearanceActiveSection=t,e.appearanceActiveSubsection=null},onSubsectionChange:t=>e.appearanceActiveSubsection=t,onReload:()=>zn(e),onSave:()=>Gn(e),onApply:()=>Kn(e),onUpdate:()=>qn(e),onOpenFile:()=>Zn(e),version:e.hello?.server?.version??``,theme:e.theme,themeMode:e.themeMode,setTheme:(t,n)=>e.setTheme(t,n),setThemeMode:(t,n)=>e.setThemeMode(t,n),borderRadius:e.settings.borderRadius,setBorderRadius:t=>e.setBorderRadius(t),gatewayUrl:e.settings.gatewayUrl,assistantName:e.assistantName,configPath:e.configSnapshot?.path??null,navRootLabel:`Appearance`,includeSections:[...Zx],includeVirtualSections:!0}):i}

        ${e.tab===`automation`?Xb({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.automationFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.automationSearchQuery,activeSection:e.automationActiveSection&&!Qx.includes(e.automationActiveSection)?null:e.automationActiveSection,activeSubsection:e.automationActiveSection&&!Qx.includes(e.automationActiveSection)?null:e.automationActiveSubsection,onRawChange:t=>{e.configRaw=t},onRequestUpdate:r,onFormModeChange:t=>e.automationFormMode=t,onFormPatch:(t,n)=>U(e,t,n),onSearchChange:t=>e.automationSearchQuery=t,onSectionChange:t=>{e.automationActiveSection=t,e.automationActiveSubsection=null},onSubsectionChange:t=>e.automationActiveSubsection=t,onReload:()=>zn(e),onSave:()=>Gn(e),onApply:()=>Kn(e),onUpdate:()=>qn(e),onOpenFile:()=>Zn(e),version:e.hello?.server?.version??``,theme:e.theme,themeMode:e.themeMode,setTheme:(t,n)=>e.setTheme(t,n),setThemeMode:(t,n)=>e.setThemeMode(t,n),borderRadius:e.settings.borderRadius,setBorderRadius:t=>e.setBorderRadius(t),gatewayUrl:e.settings.gatewayUrl,assistantName:e.assistantName,configPath:e.configSnapshot?.path??null,navRootLabel:`Automation`,includeSections:[...Qx],includeVirtualSections:!1}):i}

        ${e.tab===`infrastructure`?Xb({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.infrastructureFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.infrastructureSearchQuery,activeSection:e.infrastructureActiveSection&&!$x.includes(e.infrastructureActiveSection)?null:e.infrastructureActiveSection,activeSubsection:e.infrastructureActiveSection&&!$x.includes(e.infrastructureActiveSection)?null:e.infrastructureActiveSubsection,onRawChange:t=>{e.configRaw=t},onRequestUpdate:r,onFormModeChange:t=>e.infrastructureFormMode=t,onFormPatch:(t,n)=>U(e,t,n),onSearchChange:t=>e.infrastructureSearchQuery=t,onSectionChange:t=>{e.infrastructureActiveSection=t,e.infrastructureActiveSubsection=null},onSubsectionChange:t=>e.infrastructureActiveSubsection=t,onReload:()=>zn(e),onSave:()=>Gn(e),onApply:()=>Kn(e),onUpdate:()=>qn(e),onOpenFile:()=>Zn(e),version:e.hello?.server?.version??``,theme:e.theme,themeMode:e.themeMode,setTheme:(t,n)=>e.setTheme(t,n),setThemeMode:(t,n)=>e.setThemeMode(t,n),borderRadius:e.settings.borderRadius,setBorderRadius:t=>e.setBorderRadius(t),gatewayUrl:e.settings.gatewayUrl,assistantName:e.assistantName,configPath:e.configSnapshot?.path??null,navRootLabel:`Infrastructure`,includeSections:[...$x],includeVirtualSections:!1}):i}

        ${e.tab===`aiAgents`?Xb({raw:e.configRaw,originalRaw:e.configRawOriginal,valid:e.configValid,issues:e.configIssues,loading:e.configLoading,saving:e.configSaving,applying:e.configApplying,updating:e.updateRunning,connected:e.connected,schema:e.configSchema,schemaLoading:e.configSchemaLoading,uiHints:e.configUiHints,formMode:e.aiAgentsFormMode,formValue:e.configForm,originalValue:e.configFormOriginal,searchQuery:e.aiAgentsSearchQuery,activeSection:e.aiAgentsActiveSection&&!eS.includes(e.aiAgentsActiveSection)?null:e.aiAgentsActiveSection,activeSubsection:e.aiAgentsActiveSection&&!eS.includes(e.aiAgentsActiveSection)?null:e.aiAgentsActiveSubsection,onRawChange:t=>{e.configRaw=t},onRequestUpdate:r,onFormModeChange:t=>e.aiAgentsFormMode=t,onFormPatch:(t,n)=>U(e,t,n),onSearchChange:t=>e.aiAgentsSearchQuery=t,onSectionChange:t=>{e.aiAgentsActiveSection=t,e.aiAgentsActiveSubsection=null},onSubsectionChange:t=>e.aiAgentsActiveSubsection=t,onReload:()=>zn(e),onSave:()=>Gn(e),onApply:()=>Kn(e),onUpdate:()=>qn(e),onOpenFile:()=>Zn(e),version:e.hello?.server?.version??``,theme:e.theme,themeMode:e.themeMode,setTheme:(t,n)=>e.setTheme(t,n),setThemeMode:(t,n)=>e.setThemeMode(t,n),borderRadius:e.settings.borderRadius,setBorderRadius:t=>e.setBorderRadius(t),gatewayUrl:e.settings.gatewayUrl,assistantName:e.assistantName,configPath:e.configSnapshot?.path??null,navRootLabel:`AI & Agents`,includeSections:[...eS],includeVirtualSections:!1}):i}

        ${e.tab===`debug`?Rx(Mx,t=>t.renderDebug({loading:e.debugLoading,status:e.debugStatus,health:e.debugHealth,models:e.debugModels,heartbeat:e.debugHeartbeat,eventLog:e.eventLog,methods:(e.hello?.features?.methods??[]).toSorted(),callMethod:e.debugCallMethod,callParams:e.debugCallParams,callResult:e.debugCallResult,callError:e.debugCallError,onCallMethodChange:t=>e.debugCallMethod=t,onCallParamsChange:t=>e.debugCallParams=t,onRefresh:()=>Pr(e),onCall:()=>Fr(e)})):i}

        ${e.tab===`logs`?Rx(Px,t=>t.renderLogs({loading:e.logsLoading,error:e.logsError,file:e.logsFile,entries:e.logsEntries,filterText:e.logsFilterText,levelFilters:e.logsLevelFilters,autoFollow:e.logsAutoFollow,truncated:e.logsTruncated,onFilterTextChange:t=>e.logsFilterText=t,onLevelToggle:(t,n)=>{e.logsLevelFilters={...e.logsLevelFilters,[t]:n}},onToggleAutoFollow:t=>e.logsAutoFollow=t,onRefresh:()=>Vr(e,{reset:!0}),onExport:(t,n)=>e.exportLogs(t,n),onScroll:t=>e.handleLogsScroll(t)})):i}
      </main>
      ${$b(e)}
      ${ex(e)}
      ${i}
    </div>
  `}var rS=s_({});function iS(){if(!window.location.search)return!1;let e=new URLSearchParams(window.location.search).get(`onboarding`);if(!e)return!1;let t=e.trim().toLowerCase();return t===`1`||t===`true`||t===`yes`||t===`on`}var $=class extends c{constructor(){super(),this.i18nController=new pe(this),this.clientInstanceId=Xt(),this.connectGeneration=0,this.settings=So(),this.password=``,this.loginShowGatewayToken=!1,this.loginShowGatewayPassword=!1,this.tab=`chat`,this.onboarding=iS(),this.connected=!1,this.theme=this.settings.theme??`claw`,this.themeMode=this.settings.themeMode??`system`,this.themeResolved=`dark`,this.themeOrder=this.buildThemeOrder(this.theme),this.hello=null,this.lastError=null,this.lastErrorCode=null,this.eventLog=[],this.eventLogBuffer=[],this.toolStreamSyncTimer=null,this.sidebarCloseTimer=null,this.assistantName=rS.name,this.assistantAvatar=rS.avatar,this.assistantAgentId=rS.agentId??null,this.serverVersion=null,this.sessionKey=this.settings.sessionKey,this.chatLoading=!1,this.chatSending=!1,this.chatMessage=``,this.chatMessages=[],this.chatToolMessages=[],this.chatStreamSegments=[],this.chatStream=null,this.chatStreamStartedAt=null,this.chatRunId=null,this.compactionStatus=null,this.fallbackStatus=null,this.chatAvatarUrl=null,this.chatThinkingLevel=null,this.chatModelOverrides={},this.chatModelsLoading=!1,this.chatModelCatalog=[],this.chatQueue=[],this.chatAttachments=[],this.chatManualRefreshInFlight=!1,this.navDrawerOpen=!1,this.sidebarOpen=!1,this.sidebarContent=null,this.sidebarError=null,this.splitRatio=this.settings.splitRatio,this.nodesLoading=!1,this.nodes=[],this.devicesLoading=!1,this.devicesError=null,this.devicesList=null,this.execApprovalsLoading=!1,this.execApprovalsSaving=!1,this.execApprovalsDirty=!1,this.execApprovalsSnapshot=null,this.execApprovalsForm=null,this.execApprovalsSelectedAgent=null,this.execApprovalsTarget=`gateway`,this.execApprovalsTargetNodeId=null,this.execApprovalQueue=[],this.execApprovalBusy=!1,this.execApprovalError=null,this.pendingGatewayUrl=null,this.pendingGatewayToken=null,this.configLoading=!1,this.configRaw=`{
}
`,this.configRawOriginal=``,this.configValid=null,this.configIssues=[],this.configSaving=!1,this.configApplying=!1,this.updateRunning=!1,this.applySessionKey=this.settings.lastActiveSessionKey,this.configSnapshot=null,this.configSchema=null,this.configSchemaVersion=null,this.configSchemaLoading=!1,this.configUiHints={},this.configForm=null,this.configFormOriginal=null,this.configFormDirty=!1,this.configFormMode=`form`,this.configSearchQuery=``,this.configActiveSection=null,this.configActiveSubsection=null,this.communicationsFormMode=`form`,this.communicationsSearchQuery=``,this.communicationsActiveSection=null,this.communicationsActiveSubsection=null,this.appearanceFormMode=`form`,this.appearanceSearchQuery=``,this.appearanceActiveSection=null,this.appearanceActiveSubsection=null,this.automationFormMode=`form`,this.automationSearchQuery=``,this.automationActiveSection=null,this.automationActiveSubsection=null,this.infrastructureFormMode=`form`,this.infrastructureSearchQuery=``,this.infrastructureActiveSection=null,this.infrastructureActiveSubsection=null,this.aiAgentsFormMode=`form`,this.aiAgentsSearchQuery=``,this.aiAgentsActiveSection=null,this.aiAgentsActiveSubsection=null,this.channelsLoading=!1,this.channelsSnapshot=null,this.channelsError=null,this.channelsLastSuccess=null,this.whatsappLoginMessage=null,this.whatsappLoginQrDataUrl=null,this.whatsappLoginConnected=null,this.whatsappBusy=!1,this.nostrProfileFormState=null,this.nostrProfileAccountId=null,this.presenceLoading=!1,this.presenceEntries=[],this.presenceError=null,this.presenceStatus=null,this.agentsLoading=!1,this.agentsList=null,this.agentsError=null,this.agentsSelectedId=null,this.toolsCatalogLoading=!1,this.toolsCatalogError=null,this.toolsCatalogResult=null,this.toolsEffectiveLoading=!1,this.toolsEffectiveLoadingKey=null,this.toolsEffectiveResultKey=null,this.toolsEffectiveError=null,this.toolsEffectiveResult=null,this.agentsPanel=`files`,this.agentFilesLoading=!1,this.agentFilesError=null,this.agentFilesList=null,this.agentFileContents={},this.agentFileDrafts={},this.agentFileActive=null,this.agentFileSaving=!1,this.agentIdentityLoading=!1,this.agentIdentityError=null,this.agentIdentityById={},this.agentSkillsLoading=!1,this.agentSkillsError=null,this.agentSkillsReport=null,this.agentSkillsAgentId=null,this.sessionsLoading=!1,this.sessionsResult=null,this.sessionsError=null,this.sessionsFilterActive=``,this.sessionsFilterLimit=`120`,this.sessionsIncludeGlobal=!0,this.sessionsIncludeUnknown=!1,this.sessionsHideCron=!0,this.sessionsSearchQuery=``,this.sessionsSortColumn=`updated`,this.sessionsSortDir=`desc`,this.sessionsPage=0,this.sessionsPageSize=25,this.sessionsSelectedKeys=new Set,this.usageLoading=!1,this.usageResult=null,this.usageCostSummary=null,this.usageError=null,this.usageStartDate=(()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`})(),this.usageEndDate=(()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`})(),this.usageSelectedSessions=[],this.usageSelectedDays=[],this.usageSelectedHours=[],this.usageChartMode=`tokens`,this.usageDailyChartMode=`by-type`,this.usageTimeSeriesMode=`per-turn`,this.usageTimeSeriesBreakdownMode=`by-type`,this.usageTimeSeries=null,this.usageTimeSeriesLoading=!1,this.usageTimeSeriesCursorStart=null,this.usageTimeSeriesCursorEnd=null,this.usageSessionLogs=null,this.usageSessionLogsLoading=!1,this.usageSessionLogsExpanded=!1,this.usageQuery=``,this.usageQueryDraft=``,this.usageSessionSort=`recent`,this.usageSessionSortDir=`desc`,this.usageRecentSessions=[],this.usageTimeZone=`local`,this.usageContextExpanded=!1,this.usageHeaderPinned=!1,this.usageSessionsTab=`all`,this.usageVisibleColumns=[`channel`,`agent`,`provider`,`model`,`messages`,`tools`,`errors`,`duration`],this.usageLogFilterRoles=[],this.usageLogFilterTools=[],this.usageLogFilterHasTools=!1,this.usageLogFilterQuery=``,this.usageQueryDebounceTimer=null,this.cronLoading=!1,this.cronJobsLoadingMore=!1,this.cronJobs=[],this.cronJobsTotal=0,this.cronJobsHasMore=!1,this.cronJobsNextOffset=null,this.cronJobsLimit=50,this.cronJobsQuery=``,this.cronJobsEnabledFilter=`all`,this.cronJobsScheduleKindFilter=`all`,this.cronJobsLastStatusFilter=`all`,this.cronJobsSortBy=`nextRunAtMs`,this.cronJobsSortDir=`asc`,this.cronStatus=null,this.cronError=null,this.cronForm={...hi},this.cronFieldErrors={},this.cronEditingJobId=null,this.cronRunsJobId=null,this.cronRunsLoadingMore=!1,this.cronRuns=[],this.cronRunsTotal=0,this.cronRunsHasMore=!1,this.cronRunsNextOffset=null,this.cronRunsLimit=50,this.cronRunsScope=`all`,this.cronRunsStatuses=[],this.cronRunsDeliveryStatuses=[],this.cronRunsStatusFilter=`all`,this.cronRunsQuery=``,this.cronRunsSortDir=`desc`,this.cronModelSuggestions=[],this.cronBusy=!1,this.updateAvailable=null,this.attentionItems=[],this.paletteOpen=!1,this.paletteQuery=``,this.paletteActiveIndex=0,this.overviewShowGatewayToken=!1,this.overviewShowGatewayPassword=!1,this.overviewLogLines=[],this.overviewLogCursor=0,this.skillsLoading=!1,this.skillsReport=null,this.skillsError=null,this.skillsFilter=``,this.skillsStatusFilter=`all`,this.skillEdits={},this.skillsBusyKey=null,this.skillMessages={},this.skillsDetailKey=null,this.healthLoading=!1,this.healthResult=null,this.healthError=null,this.debugLoading=!1,this.debugStatus=null,this.debugHealth=null,this.debugModels=[],this.debugHeartbeat=null,this.debugCallMethod=``,this.debugCallParams=`{}`,this.debugCallResult=null,this.debugCallError=null,this.logsLoading=!1,this.logsError=null,this.logsFile=null,this.logsEntries=[],this.logsFilterText=``,this.logsLevelFilters={...mi},this.logsAutoFollow=!0,this.logsTruncated=!1,this.logsCursor=null,this.logsLastFetchAt=null,this.logsLimit=500,this.logsMaxBytes=25e4,this.logsAtBottom=!0,this.client=null,this.chatScrollFrame=null,this.chatScrollTimeout=null,this.chatHasAutoScrolled=!1,this.chatUserNearBottom=!0,this.chatNewMessagesBelow=!1,this.nodesPollInterval=null,this.logsPollInterval=null,this.debugPollInterval=null,this.logsScrollFrame=null,this.toolStreamById=new Map,this.toolStreamOrder=[],this.refreshSessionsAfterChat=new Set,this.basePath=``,this.popStateHandler=()=>bh(this),this.topbarObserver=null,this.globalKeydownHandler=e=>{(e.metaKey||e.ctrlKey)&&!e.shiftKey&&e.key===`k`&&(e.preventDefault(),this.paletteOpen=!this.paletteOpen,this.paletteOpen&&(this.paletteQuery=``,this.paletteActiveIndex=0))},ce(this.settings.locale)&&fe.setLocale(this.settings.locale)}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.onSlashAction=e=>{switch(e){case`toggle-focus`:this.applySettings({...this.settings,chatFocusMode:!this.settings.chatFocusMode});break;case`export`:xs(this.chatMessages,this.assistantName);break;case`refresh-tools-effective`:di(this);break}},document.addEventListener(`keydown`,this.globalKeydownHandler),A_(this)}firstUpdated(){j_(this)}disconnectedCallback(){document.removeEventListener(`keydown`,this.globalKeydownHandler),M_(this),super.disconnectedCallback()}updated(e){if(N_(this,e),!e.has(`sessionKey`)||this.agentsPanel!==`tools`)return;let t=k(this.sessionKey);if(this.agentsSelectedId&&this.agentsSelectedId===t){li(this,{agentId:this.agentsSelectedId,sessionKey:this.sessionKey});return}this.toolsEffectiveResult=null,this.toolsEffectiveResultKey=null,this.toolsEffectiveError=null,this.toolsEffectiveLoading=!1,this.toolsEffectiveLoadingKey=null}connect(){S_(this)}handleChatScroll(e){xr(this,e)}handleLogsScroll(e){Sr(this,e)}exportLogs(e,t){wr(e,t)}resetToolStream(){Kh(this)}resetChatScroll(){Cr(this)}scrollToBottom(e){Cr(this),yr(this,!0,!!e?.smooth)}async loadAssistantIdentity(){await c_(this)}applySettings(e){ih(this,e)}setTab(e){sh(this,e),this.navDrawerOpen=!1}setTheme(e,t){ch(this,e,t),this.themeOrder=this.buildThemeOrder(e)}setThemeMode(e,t){lh(this,e,t)}setBorderRadius(e){ih(this,{...this.settings,borderRadius:e}),this.requestUpdate()}buildThemeOrder(e){return[e,...[...Za].filter(t=>t!==e)]}async loadOverview(){await Th(this)}async loadCron(){await jh(this)}async handleAbortChat(){await Vg(this)}removeQueuedMessage(e){Gg(this,e)}async handleSendChat(e,t){await Kg(this,e,t)}async handleWhatsAppStart(e){await tr(this,e)}async handleWhatsAppWait(){await nr(this)}async handleWhatsAppLogout(){await rr(this)}async handleChannelConfigSave(){await ir(this)}async handleChannelConfigReload(){await ar(this)}handleNostrProfileEdit(e,t){dr(this,e,t)}handleNostrProfileCancel(){fr(this)}handleNostrProfileFieldChange(e,t){pr(this,e,t)}async handleNostrProfileSave(){await hr(this)}async handleNostrProfileImport(){await gr(this)}handleNostrProfileToggleAdvanced(){mr(this)}async handleExecApprovalDecision(e){let t=this.execApprovalQueue[0];if(!(!t||!this.client||this.execApprovalBusy)){this.execApprovalBusy=!0,this.execApprovalError=null;try{await this.client.request(`exec.approval.resolve`,{id:t.id,decision:e}),this.execApprovalQueue=this.execApprovalQueue.filter(e=>e.id!==t.id)}catch(e){this.execApprovalError=`Exec approval failed: ${String(e)}`}finally{this.execApprovalBusy=!1}}}handleGatewayUrlConfirm(){let e=this.pendingGatewayUrl;if(!e)return;let t=this.pendingGatewayToken?.trim()||``;this.pendingGatewayUrl=null,this.pendingGatewayToken=null,ih(this,{...this.settings,gatewayUrl:e,token:t}),this.connect()}handleGatewayUrlCancel(){this.pendingGatewayUrl=null,this.pendingGatewayToken=null}handleOpenSidebar(e){this.sidebarCloseTimer!=null&&(window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=null),this.sidebarContent=e,this.sidebarError=null,this.sidebarOpen=!0}handleCloseSidebar(){this.sidebarOpen=!1,this.sidebarCloseTimer!=null&&window.clearTimeout(this.sidebarCloseTimer),this.sidebarCloseTimer=window.setTimeout(()=>{this.sidebarOpen||(this.sidebarContent=null,this.sidebarError=null,this.sidebarCloseTimer=null)},200)}handleSplitRatioChange(e){let t=Math.max(.4,Math.min(.7,e));this.splitRatio=t,this.applySettings({...this.settings,splitRatio:t})}render(){return nS(this)}};Y([S()],$.prototype,`settings`,void 0),Y([S()],$.prototype,`password`,void 0),Y([S()],$.prototype,`loginShowGatewayToken`,void 0),Y([S()],$.prototype,`loginShowGatewayPassword`,void 0),Y([S()],$.prototype,`tab`,void 0),Y([S()],$.prototype,`onboarding`,void 0),Y([S()],$.prototype,`connected`,void 0),Y([S()],$.prototype,`theme`,void 0),Y([S()],$.prototype,`themeMode`,void 0),Y([S()],$.prototype,`themeResolved`,void 0),Y([S()],$.prototype,`themeOrder`,void 0),Y([S()],$.prototype,`hello`,void 0),Y([S()],$.prototype,`lastError`,void 0),Y([S()],$.prototype,`lastErrorCode`,void 0),Y([S()],$.prototype,`eventLog`,void 0),Y([S()],$.prototype,`assistantName`,void 0),Y([S()],$.prototype,`assistantAvatar`,void 0),Y([S()],$.prototype,`assistantAgentId`,void 0),Y([S()],$.prototype,`serverVersion`,void 0),Y([S()],$.prototype,`sessionKey`,void 0),Y([S()],$.prototype,`chatLoading`,void 0),Y([S()],$.prototype,`chatSending`,void 0),Y([S()],$.prototype,`chatMessage`,void 0),Y([S()],$.prototype,`chatMessages`,void 0),Y([S()],$.prototype,`chatToolMessages`,void 0),Y([S()],$.prototype,`chatStreamSegments`,void 0),Y([S()],$.prototype,`chatStream`,void 0),Y([S()],$.prototype,`chatStreamStartedAt`,void 0),Y([S()],$.prototype,`chatRunId`,void 0),Y([S()],$.prototype,`compactionStatus`,void 0),Y([S()],$.prototype,`fallbackStatus`,void 0),Y([S()],$.prototype,`chatAvatarUrl`,void 0),Y([S()],$.prototype,`chatThinkingLevel`,void 0),Y([S()],$.prototype,`chatModelOverrides`,void 0),Y([S()],$.prototype,`chatModelsLoading`,void 0),Y([S()],$.prototype,`chatModelCatalog`,void 0),Y([S()],$.prototype,`chatQueue`,void 0),Y([S()],$.prototype,`chatAttachments`,void 0),Y([S()],$.prototype,`chatManualRefreshInFlight`,void 0),Y([S()],$.prototype,`navDrawerOpen`,void 0),Y([S()],$.prototype,`sidebarOpen`,void 0),Y([S()],$.prototype,`sidebarContent`,void 0),Y([S()],$.prototype,`sidebarError`,void 0),Y([S()],$.prototype,`splitRatio`,void 0),Y([S()],$.prototype,`nodesLoading`,void 0),Y([S()],$.prototype,`nodes`,void 0),Y([S()],$.prototype,`devicesLoading`,void 0),Y([S()],$.prototype,`devicesError`,void 0),Y([S()],$.prototype,`devicesList`,void 0),Y([S()],$.prototype,`execApprovalsLoading`,void 0),Y([S()],$.prototype,`execApprovalsSaving`,void 0),Y([S()],$.prototype,`execApprovalsDirty`,void 0),Y([S()],$.prototype,`execApprovalsSnapshot`,void 0),Y([S()],$.prototype,`execApprovalsForm`,void 0),Y([S()],$.prototype,`execApprovalsSelectedAgent`,void 0),Y([S()],$.prototype,`execApprovalsTarget`,void 0),Y([S()],$.prototype,`execApprovalsTargetNodeId`,void 0),Y([S()],$.prototype,`execApprovalQueue`,void 0),Y([S()],$.prototype,`execApprovalBusy`,void 0),Y([S()],$.prototype,`execApprovalError`,void 0),Y([S()],$.prototype,`pendingGatewayUrl`,void 0),Y([S()],$.prototype,`configLoading`,void 0),Y([S()],$.prototype,`configRaw`,void 0),Y([S()],$.prototype,`configRawOriginal`,void 0),Y([S()],$.prototype,`configValid`,void 0),Y([S()],$.prototype,`configIssues`,void 0),Y([S()],$.prototype,`configSaving`,void 0),Y([S()],$.prototype,`configApplying`,void 0),Y([S()],$.prototype,`updateRunning`,void 0),Y([S()],$.prototype,`applySessionKey`,void 0),Y([S()],$.prototype,`configSnapshot`,void 0),Y([S()],$.prototype,`configSchema`,void 0),Y([S()],$.prototype,`configSchemaVersion`,void 0),Y([S()],$.prototype,`configSchemaLoading`,void 0),Y([S()],$.prototype,`configUiHints`,void 0),Y([S()],$.prototype,`configForm`,void 0),Y([S()],$.prototype,`configFormOriginal`,void 0),Y([S()],$.prototype,`configFormDirty`,void 0),Y([S()],$.prototype,`configFormMode`,void 0),Y([S()],$.prototype,`configSearchQuery`,void 0),Y([S()],$.prototype,`configActiveSection`,void 0),Y([S()],$.prototype,`configActiveSubsection`,void 0),Y([S()],$.prototype,`communicationsFormMode`,void 0),Y([S()],$.prototype,`communicationsSearchQuery`,void 0),Y([S()],$.prototype,`communicationsActiveSection`,void 0),Y([S()],$.prototype,`communicationsActiveSubsection`,void 0),Y([S()],$.prototype,`appearanceFormMode`,void 0),Y([S()],$.prototype,`appearanceSearchQuery`,void 0),Y([S()],$.prototype,`appearanceActiveSection`,void 0),Y([S()],$.prototype,`appearanceActiveSubsection`,void 0),Y([S()],$.prototype,`automationFormMode`,void 0),Y([S()],$.prototype,`automationSearchQuery`,void 0),Y([S()],$.prototype,`automationActiveSection`,void 0),Y([S()],$.prototype,`automationActiveSubsection`,void 0),Y([S()],$.prototype,`infrastructureFormMode`,void 0),Y([S()],$.prototype,`infrastructureSearchQuery`,void 0),Y([S()],$.prototype,`infrastructureActiveSection`,void 0),Y([S()],$.prototype,`infrastructureActiveSubsection`,void 0),Y([S()],$.prototype,`aiAgentsFormMode`,void 0),Y([S()],$.prototype,`aiAgentsSearchQuery`,void 0),Y([S()],$.prototype,`aiAgentsActiveSection`,void 0),Y([S()],$.prototype,`aiAgentsActiveSubsection`,void 0),Y([S()],$.prototype,`channelsLoading`,void 0),Y([S()],$.prototype,`channelsSnapshot`,void 0),Y([S()],$.prototype,`channelsError`,void 0),Y([S()],$.prototype,`channelsLastSuccess`,void 0),Y([S()],$.prototype,`whatsappLoginMessage`,void 0),Y([S()],$.prototype,`whatsappLoginQrDataUrl`,void 0),Y([S()],$.prototype,`whatsappLoginConnected`,void 0),Y([S()],$.prototype,`whatsappBusy`,void 0),Y([S()],$.prototype,`nostrProfileFormState`,void 0),Y([S()],$.prototype,`nostrProfileAccountId`,void 0),Y([S()],$.prototype,`presenceLoading`,void 0),Y([S()],$.prototype,`presenceEntries`,void 0),Y([S()],$.prototype,`presenceError`,void 0),Y([S()],$.prototype,`presenceStatus`,void 0),Y([S()],$.prototype,`agentsLoading`,void 0),Y([S()],$.prototype,`agentsList`,void 0),Y([S()],$.prototype,`agentsError`,void 0),Y([S()],$.prototype,`agentsSelectedId`,void 0),Y([S()],$.prototype,`toolsCatalogLoading`,void 0),Y([S()],$.prototype,`toolsCatalogError`,void 0),Y([S()],$.prototype,`toolsCatalogResult`,void 0),Y([S()],$.prototype,`toolsEffectiveLoading`,void 0),Y([S()],$.prototype,`toolsEffectiveLoadingKey`,void 0),Y([S()],$.prototype,`toolsEffectiveResultKey`,void 0),Y([S()],$.prototype,`toolsEffectiveError`,void 0),Y([S()],$.prototype,`toolsEffectiveResult`,void 0),Y([S()],$.prototype,`agentsPanel`,void 0),Y([S()],$.prototype,`agentFilesLoading`,void 0),Y([S()],$.prototype,`agentFilesError`,void 0),Y([S()],$.prototype,`agentFilesList`,void 0),Y([S()],$.prototype,`agentFileContents`,void 0),Y([S()],$.prototype,`agentFileDrafts`,void 0),Y([S()],$.prototype,`agentFileActive`,void 0),Y([S()],$.prototype,`agentFileSaving`,void 0),Y([S()],$.prototype,`agentIdentityLoading`,void 0),Y([S()],$.prototype,`agentIdentityError`,void 0),Y([S()],$.prototype,`agentIdentityById`,void 0),Y([S()],$.prototype,`agentSkillsLoading`,void 0),Y([S()],$.prototype,`agentSkillsError`,void 0),Y([S()],$.prototype,`agentSkillsReport`,void 0),Y([S()],$.prototype,`agentSkillsAgentId`,void 0),Y([S()],$.prototype,`sessionsLoading`,void 0),Y([S()],$.prototype,`sessionsResult`,void 0),Y([S()],$.prototype,`sessionsError`,void 0),Y([S()],$.prototype,`sessionsFilterActive`,void 0),Y([S()],$.prototype,`sessionsFilterLimit`,void 0),Y([S()],$.prototype,`sessionsIncludeGlobal`,void 0),Y([S()],$.prototype,`sessionsIncludeUnknown`,void 0),Y([S()],$.prototype,`sessionsHideCron`,void 0),Y([S()],$.prototype,`sessionsSearchQuery`,void 0),Y([S()],$.prototype,`sessionsSortColumn`,void 0),Y([S()],$.prototype,`sessionsSortDir`,void 0),Y([S()],$.prototype,`sessionsPage`,void 0),Y([S()],$.prototype,`sessionsPageSize`,void 0),Y([S()],$.prototype,`sessionsSelectedKeys`,void 0),Y([S()],$.prototype,`usageLoading`,void 0),Y([S()],$.prototype,`usageResult`,void 0),Y([S()],$.prototype,`usageCostSummary`,void 0),Y([S()],$.prototype,`usageError`,void 0),Y([S()],$.prototype,`usageStartDate`,void 0),Y([S()],$.prototype,`usageEndDate`,void 0),Y([S()],$.prototype,`usageSelectedSessions`,void 0),Y([S()],$.prototype,`usageSelectedDays`,void 0),Y([S()],$.prototype,`usageSelectedHours`,void 0),Y([S()],$.prototype,`usageChartMode`,void 0),Y([S()],$.prototype,`usageDailyChartMode`,void 0),Y([S()],$.prototype,`usageTimeSeriesMode`,void 0),Y([S()],$.prototype,`usageTimeSeriesBreakdownMode`,void 0),Y([S()],$.prototype,`usageTimeSeries`,void 0),Y([S()],$.prototype,`usageTimeSeriesLoading`,void 0),Y([S()],$.prototype,`usageTimeSeriesCursorStart`,void 0),Y([S()],$.prototype,`usageTimeSeriesCursorEnd`,void 0),Y([S()],$.prototype,`usageSessionLogs`,void 0),Y([S()],$.prototype,`usageSessionLogsLoading`,void 0),Y([S()],$.prototype,`usageSessionLogsExpanded`,void 0),Y([S()],$.prototype,`usageQuery`,void 0),Y([S()],$.prototype,`usageQueryDraft`,void 0),Y([S()],$.prototype,`usageSessionSort`,void 0),Y([S()],$.prototype,`usageSessionSortDir`,void 0),Y([S()],$.prototype,`usageRecentSessions`,void 0),Y([S()],$.prototype,`usageTimeZone`,void 0),Y([S()],$.prototype,`usageContextExpanded`,void 0),Y([S()],$.prototype,`usageHeaderPinned`,void 0),Y([S()],$.prototype,`usageSessionsTab`,void 0),Y([S()],$.prototype,`usageVisibleColumns`,void 0),Y([S()],$.prototype,`usageLogFilterRoles`,void 0),Y([S()],$.prototype,`usageLogFilterTools`,void 0),Y([S()],$.prototype,`usageLogFilterHasTools`,void 0),Y([S()],$.prototype,`usageLogFilterQuery`,void 0),Y([S()],$.prototype,`cronLoading`,void 0),Y([S()],$.prototype,`cronJobsLoadingMore`,void 0),Y([S()],$.prototype,`cronJobs`,void 0),Y([S()],$.prototype,`cronJobsTotal`,void 0),Y([S()],$.prototype,`cronJobsHasMore`,void 0),Y([S()],$.prototype,`cronJobsNextOffset`,void 0),Y([S()],$.prototype,`cronJobsLimit`,void 0),Y([S()],$.prototype,`cronJobsQuery`,void 0),Y([S()],$.prototype,`cronJobsEnabledFilter`,void 0),Y([S()],$.prototype,`cronJobsScheduleKindFilter`,void 0),Y([S()],$.prototype,`cronJobsLastStatusFilter`,void 0),Y([S()],$.prototype,`cronJobsSortBy`,void 0),Y([S()],$.prototype,`cronJobsSortDir`,void 0),Y([S()],$.prototype,`cronStatus`,void 0),Y([S()],$.prototype,`cronError`,void 0),Y([S()],$.prototype,`cronForm`,void 0),Y([S()],$.prototype,`cronFieldErrors`,void 0),Y([S()],$.prototype,`cronEditingJobId`,void 0),Y([S()],$.prototype,`cronRunsJobId`,void 0),Y([S()],$.prototype,`cronRunsLoadingMore`,void 0),Y([S()],$.prototype,`cronRuns`,void 0),Y([S()],$.prototype,`cronRunsTotal`,void 0),Y([S()],$.prototype,`cronRunsHasMore`,void 0),Y([S()],$.prototype,`cronRunsNextOffset`,void 0),Y([S()],$.prototype,`cronRunsLimit`,void 0),Y([S()],$.prototype,`cronRunsScope`,void 0),Y([S()],$.prototype,`cronRunsStatuses`,void 0),Y([S()],$.prototype,`cronRunsDeliveryStatuses`,void 0),Y([S()],$.prototype,`cronRunsStatusFilter`,void 0),Y([S()],$.prototype,`cronRunsQuery`,void 0),Y([S()],$.prototype,`cronRunsSortDir`,void 0),Y([S()],$.prototype,`cronModelSuggestions`,void 0),Y([S()],$.prototype,`cronBusy`,void 0),Y([S()],$.prototype,`updateAvailable`,void 0),Y([S()],$.prototype,`attentionItems`,void 0),Y([S()],$.prototype,`paletteOpen`,void 0),Y([S()],$.prototype,`paletteQuery`,void 0),Y([S()],$.prototype,`paletteActiveIndex`,void 0),Y([S()],$.prototype,`overviewShowGatewayToken`,void 0),Y([S()],$.prototype,`overviewShowGatewayPassword`,void 0),Y([S()],$.prototype,`overviewLogLines`,void 0),Y([S()],$.prototype,`overviewLogCursor`,void 0),Y([S()],$.prototype,`skillsLoading`,void 0),Y([S()],$.prototype,`skillsReport`,void 0),Y([S()],$.prototype,`skillsError`,void 0),Y([S()],$.prototype,`skillsFilter`,void 0),Y([S()],$.prototype,`skillsStatusFilter`,void 0),Y([S()],$.prototype,`skillEdits`,void 0),Y([S()],$.prototype,`skillsBusyKey`,void 0),Y([S()],$.prototype,`skillMessages`,void 0),Y([S()],$.prototype,`skillsDetailKey`,void 0),Y([S()],$.prototype,`healthLoading`,void 0),Y([S()],$.prototype,`healthResult`,void 0),Y([S()],$.prototype,`healthError`,void 0),Y([S()],$.prototype,`debugLoading`,void 0),Y([S()],$.prototype,`debugStatus`,void 0),Y([S()],$.prototype,`debugHealth`,void 0),Y([S()],$.prototype,`debugModels`,void 0),Y([S()],$.prototype,`debugHeartbeat`,void 0),Y([S()],$.prototype,`debugCallMethod`,void 0),Y([S()],$.prototype,`debugCallParams`,void 0),Y([S()],$.prototype,`debugCallResult`,void 0),Y([S()],$.prototype,`debugCallError`,void 0),Y([S()],$.prototype,`logsLoading`,void 0),Y([S()],$.prototype,`logsError`,void 0),Y([S()],$.prototype,`logsFile`,void 0),Y([S()],$.prototype,`logsEntries`,void 0),Y([S()],$.prototype,`logsFilterText`,void 0),Y([S()],$.prototype,`logsLevelFilters`,void 0),Y([S()],$.prototype,`logsAutoFollow`,void 0),Y([S()],$.prototype,`logsTruncated`,void 0),Y([S()],$.prototype,`logsCursor`,void 0),Y([S()],$.prototype,`logsLastFetchAt`,void 0),Y([S()],$.prototype,`logsLimit`,void 0),Y([S()],$.prototype,`logsMaxBytes`,void 0),Y([S()],$.prototype,`logsAtBottom`,void 0),Y([S()],$.prototype,`chatNewMessagesBelow`,void 0),$=Y([v(`openclaw-app`)],$);export{ws as A,Hu as C,q as D,Cu as E,P as F,$n as M,hn as N,Dc as O,L as P,pd as S,Fu as T,ad as _,ox as a,Xu as b,Db as c,Yu as d,sd as f,Zu as g,Uu as h,cx as i,Ga as j,W as k,db as l,fd as m,ux as n,ax as o,dd as p,lx as r,sx as s,dx as t,qu as u,Ju as v,Vu as w,Qu as x,$u as y};
//# sourceMappingURL=index-Ij2djnNX.js.map