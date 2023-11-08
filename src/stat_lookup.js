import STAT_DATA from './data/stat_data'

class StatLookup {
  //STRENGTH
  get_phys_power(strength) {
    return STAT_DATA.strength.physical_power[strength]
  }
  get_phys_power_bonus(phys_power) {
    return STAT_DATA.strength.physical_power_bonus[phys_power]
  }
  get_max_health(strength) {
    return STAT_DATA.strength.health[strength]
  }
  //AGILITY
  get_action_speed(agility) {
    return STAT_DATA.agility.action_speed[agility]
  }
  get_move_speed(agility) {
    return STAT_DATA.agility.move_speed[agility]
  }
  get_item_equip_speed(agility) {
    return STAT_DATA.agility.item_equip_speed[agility]
  }
  //WILL
  get_magic_power(will) {
    return STAT_DATA.will.magic_power[will]
  }
  get_magic_power_bonus(magic_power) {
    return STAT_DATA.will.magic_power_bonus[magic_power]
  }
  get_magic_resistance(will) {
    return STAT_DATA.will.magic_resistance[will]
  }
  get_magic_damage_reduction(magic_resist) {
    if (magic_resist >= 0) return STAT_DATA.will.magic_damage_reduction.positive[magic_resist]
    else return STAT_DATA.will.magic_damage_reduction.negative[magic_resist * -1 - 1]
  }
  get_buff_duration(will) {
    return STAT_DATA.will.buff_duration[will]
  }
  get_debuff_duration(will) {
    return STAT_DATA.will.debuff_duration[will]
  }
  //KNOWLEDGE
  get_spell_casting_speed(knowledge) {
    return STAT_DATA.knowledge.spell_cast_speed[knowledge]
  }
  get_memory_capacity(knowledge) {
    return STAT_DATA.knowledge.memory_capacity[knowledge]
  }
  get_magical_interaction_speed(knowledge) {
    return STAT_DATA.knowledge.magical_interaction_speed[knowledge]
  }
  //RESOURCEFULNESS
  get_persuasiveness(resourcefulness) {
    return STAT_DATA.resourcefulness.persuasiveness[resourcefulness]
  }
  //COMPOSITE
  get_interaction_speed(agility, resourcefulness) {
    let value = agility * 0.4 + resourcefulness * 0.6
    return STAT_DATA.interaction_speed[value]
  }
  //NONE OF THE ABOVE
  get_physical_damage_reduction(armor) {
    if (armor >= 0) return STAT_DATA.physical_damage_reduction.positive[armor]
    else return STAT_DATA.physical_damage_reduction.negative[armor * -1 - 1]
  }
}

export default StatLookup
//let stats = new StatLookup()
//console.log(stats.get_phys_power_bonus(stats.get_phys_power(30)))
//console.log(stats.get_interaction_speed(15, 15))
//console.log(stats.get_physical_damage_reduction(500))
