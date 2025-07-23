{
  pageData: {
    Info: {
      general: [];
    }
  }
}

const pageData = {
  category: "Info",
  serial:
    "Ih|Zombies Attack!|1|c|i|§1397331785498497045/ZombieAttack_Park.png?ex=68815622&is=688004a2&hm=7e37c2332ffcfc0c65e5bc318af8bbdb1c6b3bcca1586f492ea9d30af1e9828b&|0|c|t|Zombies totally fucked us at the park. Hope none of em goes home and fucks my mom!|2|c|t|Ohhh fuck, your mission is to totally fuck over the zombies|3|c|t|Ohhh yeahh, you gotta do it|4|c|t|Ohhh fuck, your mission is to totally fuck over the zombies|5|c|i|§1397331785955934389/ZombieAttack_Park_2.png?ex=6881fee2&is=6880ad62&hm=44b608750c7504a5570920a7b4eeb36a49eb4ea9b726be5c35ad5a317eee2031&|6|c|i|§1397331935176556757/ZombieAttack_Park_3.png?ex=6881ff06&is=6880ad86&hm=d38b2bd90688d83dcb626c17dc15570f2127abe080d185582d30b5ea6cc3eca0&|7|c|",
};

/*
I update the Github data
I send a TS.sync.multiSend or TS.sync.send message with data on which page to pull
Clients receive message, create promise that fetches data
Their PAGE_DATA will be updated with the data from the fetch
The response will be used as a map, and will be also have a true false flag for whether or not to run clearText()
Response should be JSON
{
    Info: {
        shouldClear: true,
        segments: [],
        segmentIndex: 0 //will be used as segment to start from
    }
}

*/
