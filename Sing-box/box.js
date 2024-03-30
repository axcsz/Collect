const { type, name } = $arguments
const compatible_outbound = {
  tag: 'COMPATIBLE',
  type: 'direct',
}

let compatible
let config = JSON.parse($files[0])
let proxies = await produceArtifact({
  name,
  type: /^1$|col/i.test(type) ? 'collection' : 'subscription',
  platform: 'sing-box',
  produceType: 'internal',
})

config.outbounds.push(...proxies)

config.outbounds.map(i => {
  if (['全部节点'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies))
  }
  if (['香港节点'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /(?=.*(港|HK|(?i)Hong))^((?!(台|日|韩|新|美)).)*$))
  }
  if (['台湾节点'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /(?=.*(台|TW|(?i)Taiwan))^((?!(港|日|韩|新|美)).)*$))
  }
  if (['日本节点'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /(?=.*(日|JP|(?i)Japan))^((?!(港|台|韩|新|美)).)*$))
  }
  if (['狮城节点'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /(?=.*(新|狮|獅|SG|(?i)Singapore))^((?!(港|台|日|韩|兰|美|西)).)*$))
  }
  if (['韩国节点'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /(?=.*(韩|韓|朝|KR|(?i)Korea))^((?!(港|台|日|新|美)).)*$))
  }
  if (['美国节点'].includes(i.tag)) {
    i.outbounds.push(...getTags(proxies, /(?=.*(美|US|(?i)States|American))^((?!(港|台|日|韩|新)).)*$))
  }
})

config.outbounds.forEach(outbound => {
  if (Array.isArray(outbound.outbounds) && outbound.outbounds.length === 0) {
    if (!compatible) {
      config.outbounds.push(compatible_outbound)
      compatible = true
    }
    outbound.outbounds.push(compatible_outbound.tag);
  }
});

$content = JSON.stringify(config, null, 2)

function getTags(proxies, regex) {
  return (regex ? proxies.filter(p => regex.test(p.tag)) : proxies).map(p => p.tag)
}
